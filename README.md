# Lab Website (Static Template)

A lightweight, accessible lab website inspired by Wagenblast Lab's structure (Research, Lab, Publications, Mission, Contact).

## How to use
1. Download the ZIP and unzip.
2. Push the `lab-site` folder to a GitHub repo.
3. Enable GitHub Pages (Settings → Pages → from `main` branch, `/` root). The site will be live at `https://<you>.github.io/lab-site/`.
4. Edit content:
   - `index.html` (hero text)
   - `assets/people.json` (team members; supports current/former)
   - `publications.html` (paste DOIs, PubMed links)
   - `mission.html`, `contact.html`
5. Optional: move to a custom domain and add analytics.

## Notes
- Color accent: #015E68 (teal).
- Fully static: no build step required. Easy to migrate to Quarto/Hugo later.
