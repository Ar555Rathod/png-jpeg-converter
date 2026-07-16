import React, { useRef, useState } from 'react'

export default function Converter() {
  const [files, setFiles] = useState([])
  const fileInputRef = useRef(null)

  function handleFiles(selectedFiles) {
    const arr = Array.from(selectedFiles).map((f) => ({
      file: f,
      url: URL.createObjectURL(f),
      convertedUrl: null,
      name: f.name,
    }))
    setFiles((prev) => prev.concat(arr))
  }

  function onDrop(e) {
    e.preventDefault()
    handleFiles(e.dataTransfer.files)
  }
  function onDragOver(e) {
    e.preventDefault()
  }

  async function convertItem(item, targetFormat = 'image/jpeg', quality = 0.92, background = '#fff') {
    const img = new Image()
    img.src = item.url
    await img.decode()

    const canvas = document.createElement('canvas')
    canvas.width = img.naturalWidth
    canvas.height = img.naturalHeight
    const ctx = canvas.getContext('2d')

    if (targetFormat === 'image/jpeg') {
      // fill background for transparent PNGs
      ctx.fillStyle = background
      ctx.fillRect(0, 0, canvas.width, canvas.height)
    }
    ctx.drawImage(img, 0, 0)

    const blob = await new Promise((res) => canvas.toBlob(res, targetFormat, quality))
    const url = URL.createObjectURL(blob)
    return url
  }

  async function convertAll(target = 'jpeg') {
    const newFiles = await Promise.all(files.map(async (it) => {
      const targetFormat = target === 'jpeg' ? 'image/jpeg' : 'image/png'
      const url = await convertItem(it, targetFormat)
      return { ...it, convertedUrl: url }
    }))
    setFiles(newFiles)
  }

  return (
    <div className="converter">
      <div className="upload" onDrop={onDrop} onDragOver={onDragOver}>
        <p>Drag & drop images here or</p>
        <button onClick={() => fileInputRef.current.click()}>Select files</button>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/png, image/jpeg"
          multiple
          onChange={(e) => handleFiles(e.target.files)}
          hidden
        />
      </div>
      <div className="actions">
        <button onClick={() => convertAll('jpeg')}>Convert to JPEG</button>
        <button onClick={() => convertAll('png')}>Convert to PNG</button>
      </div>
      <ul className="file-list">
        {files.map((f, i) => (
          <li key={i}>
            <img src={f.url} alt={f.name} width={80} />
            <div>{f.name}</div>
            {f.convertedUrl && (
              <a href={f.convertedUrl} download={f.name.replace(/\.png|\.jpg|\.jpeg/i, '') + (f.convertedUrl.includes('image/png') ? '.png' : '.jpg')}>Download</a>
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}
