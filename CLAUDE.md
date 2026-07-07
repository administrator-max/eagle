# CLAUDE.md — Eagle I Dashboard

> Konteks untuk Claude Code saat kerja di folder ini. Bagian dari workspace `project_dashboard` — lihat `../CLAUDE.md` untuk katalog lengkap & aturan umum (jangan commit kredensial, hati-hati folder kembaran).

## Apa ini
Dashboard investasi family office "Eagle I": server Express tipis yang menyajikan satu `index.html` besar (data investasi tertanam inline + Chart.js), dibungkus PIN gate dan header anti-crawl.

## Stack
- Node.js (engines `>=18.x`)
- express ^4.19.2 — web server
- express-session ^1.18.0 — session PIN (server-side)
- dotenv ^16.4.5 — baca env dari `.env`

## Cara jalan
```bash
npm install
npm start          # = node server.js, listen di PORT (default 3000)
# buka http://localhost:3000  → redirect ke /pin → masukkan PIN
```
Wajib set `DASHBOARD_PIN`; tanpa itu server `process.exit(1)`.

## Data & cara update konten
Semua data dashboard tertanam langsung di `index.html` (tidak ada DB / API data). Update konten = ganti `index.html`, lalu:
```bash
./update_dashboard.sh "path/to/eagle1_dashboard - YYYY-MM-DD.html"
```
Script: copy file → `index.html`, `git add` + commit, `git push origin main`, lalu `git push heroku main`.

## Env vars (JANGAN tulis nilai asli)
- `DASHBOARD_PIN` — PIN gate; wajib, server berhenti jika kosong
- `SESSION_SECRET` — secret express-session (ada fallback hardcoded, ganti di prod)
- `PORT` — port listen (default 3000; Heroku set otomatis)

## File penting
- `server.js` — Express app: trust proxy, session, PIN auth guard, anti-crawl header, serve `index.html` & `/static`
- `index.html` — dashboard utuh dengan data inline (ganti ini untuk update)
- `views/pin.html` — halaman input PIN
- `static/` — aset (css/js) di-serve via `/static` (protected)
- `update_dashboard.sh` — copy + commit + push GitHub & Heroku
- `Procfile` — `web: node server.js`

## Deploy
Heroku (dyno web). Push via `git push heroku main` (otomatis dilakukan `update_dashboard.sh`). Heroku selalu HTTPS.

## Aturan & gotcha
- KEMBARAN: `eagle-vercel` adalah port serverless dari project ini (HMAC cookie, bukan express-session). Jangan tertukar saat edit.
- Cookie `secure: true` hard-coded — mengandalkan Heroku HTTPS + `trust proxy = 1`. Tidak akan login via HTTP lokal biasa kecuali pakai HTTPS.
- PIN selalu aktif (tidak ada toggle di sini).

## Status
Aktif.
