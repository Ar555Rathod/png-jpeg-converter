import React, { useState } from 'react'
import Converter from './components/Converter'

export default function App() {
  return (
    <div className="app">
      <header>
        <h1>PNG ↔ JPEG Converter</h1>
      </header>
      <main>
        <Converter />
      </main>
    </div>
  )
}
