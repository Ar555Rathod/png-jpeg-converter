Project: PNG ↔ JPEG Converter Web App
Duration: 1 week (5 working days)
Tech stack
- Frontend: React (Vite + React) using JavaScript (optionally TypeScript)
- Image processing: Client-side via HTML5 Canvas for conversion (no server required)
- UI components: CSS Modules or Tailwind CSS (plain CSS acceptable)
- Build & Deploy: Vercel or Netlify
- Optional backend (if needed): Node.js + Express + Sharp for server-side processing

High-level architecture
- Single-page React app that accepts image files via drag-and-drop or file input.
- For each uploaded file, show a preview and current format.
- Conversion performed on the client using canvas: load image -> draw to canvas -> export as desired MIME type (image/png or image/jpeg) with optional JPEG quality parameter.
- When converting PNG -> JPEG, transparencies are flattened against a configurable background color (default white) because JPEG does not support alpha.
- Support batch conversion and per-file download or zip download for multiple files.

Day-by-day plan (5 working days)
Day 1 - Project and repository setup (1 day)
- Create GitHub repository and initialize Vite + React app scaffold.
- Add .gitignore, LICENSE, README.md and architecture.md (this file) to repo.
- Create initial branches: main, feature/ui.
- Set up basic project scripts (start, build, preview).
- Acceptance: Repo exists, app boots with a placeholder UI.

Day 2 - File input & UI skeleton (1 day)
- Implement file upload UI with drag-and-drop and file input fallback.
- Show list of uploaded files with filename, type, size and preview thumbnail.
- Implement basic responsive layout and styles.
- Acceptance: Files can be uploaded and thumbnails previewed.

Day 3 - Conversion engine & options (1 day)
- Implement conversion logic using HTML5 Canvas: load image to canvas, export to target MIME type.
- Add convert options: target format (PNG or JPEG), JPEG quality slider (0.1 - 1.0), background color selector for PNG->JPEG conversion.
- Handle errors and unsupported file types.
- Acceptance: Individual files can be converted in-memory and previewed as converted results.

Day 4 - Download, batch export & UX polish (1 day)
- Implement per-file download of converted file.
- Implement batch download: create ZIP archive client-side (JSZip) if multiple files selected.
- Add progress indicators and success/error notifications.
- Polish UI/UX: icons, buttons, accessibility labels.
- Acceptance: Single and batch conversions can be downloaded successfully.

Day 5 - Testing, CI, documentation & deploy (1 day)
- Write basic unit/integration tests where applicable (component rendering, conversion helper functions).
- Add GitHub Actions for build/test pipeline (optional for this scope).
- Create README with usage instructions and deploy to Vercel/Netlify.
- Acceptance: App deployed to a public URL and README documents how to run locally and use the app.

Deliverables
- React app repository with source code, README and architecture.md
- CI pipeline (optional) and deployment URL
- Jira board with one story per working day (5 stories), each 1 story point, in an active sprint

Notes and assumptions
- The conversion will be primarily client-side to avoid the need for server resources and to keep privacy intact (images do not leave the user's browser).
- For very large files or advanced image operations, a server-side option with Sharp can be added later.

Acceptance criteria summary
- Upload PNG or JPEG files, preview, convert to the other format, and download result.
- Preserve reasonable image quality with configurable JPEG quality.
- Clear UI and working deployment.

End of architecture.md
