How to upload your mom's photo so it appears on the site

1. Resize the photo (recommended):
   - Make a square image, ideally 800×800px or 400×400px.
   - Save as PNG or JPG. PNG preserves higher quality.

2. Name the file exactly:
   - `Mompicture.png` (preferred) or `Mompicture.jpg`.
   - Place it in the `Beginning/assets/` folder in the repository.

3. Commit and push or place the file in the workspace:
   - Example (from repo root):
     ```bash
     cp /path/to/photo.png Beginning/assets/Mompicture.png
     git add Beginning/assets/Mompicture.png
     git commit -m "Add mom's headshot"
     git push
     ```

4. Preview locally:
   ```bash
   python3 -m http.server 8000
   # then open http://localhost:8000/
   ```

Notes:
- The page prefers `Mompicture.png`; if it exists the browser will show it. Otherwise the current SVG placeholder is used.
- If you want me to also crop, compress, or convert the photo for you, upload the image file into the `Beginning/assets/` folder here and tell me; I'll replace the SVG and adjust styling if needed.
