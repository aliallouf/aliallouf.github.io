# Ali Allouf: portfolio

A static site for GitHub Pages. Plain HTML, CSS and a little JavaScript, with no build step.

## Intro, photo and resume

- **Intro:** in `index.html`, change the words between `INTRO START` and `INTRO END`.
- **Photo:** replace `assets/photo.jpg` with your picture, using the same name.
- **Resume:** add your PDF as `assets/Ali_Allouf_CV.pdf`.

## Before publishing

Edit `index.html`:

1. **Contact links.** Find `ADD YOUR LINKS`, fill in the `YOUR_...` addresses, remove any line you don't need, and delete the comment markers so the list appears.
2. **CV (optional).** Save it as `assets/Ali_Allouf_CV.pdf`, or delete that line. Everything in this folder is public, so use a version without your phone number or home address.
3. **Publication.** Confirm the title, status, authors and DOI.
4. **Facts.** Read every section and correct anything that is out of date.

## Publish

1. On GitHub, create a **public** repository named `USERNAME.github.io` (your username, in lowercase).
2. Choose **Add file > Upload files** and drag in the *contents* of this folder (`index.html`, `README.md`, `.nojekyll` and the `assets` folder). `index.html` must be at the top level. Commit.
3. Open **Settings > Pages**. Under *Build and deployment*, set **Source** to *Deploy from a branch*, choose `main` and `/ (root)`, then save.
4. After a few minutes the site is live at `https://USERNAME.github.io`.

`.nojekyll` is a hidden file. If your file manager doesn't show it, create it on GitHub with **Add file > Create new file**. The site also works without it.

## Preview locally

Open `index.html` in a browser, or run `python3 -m http.server` in this folder and visit `http://localhost:8000`.

## Add a project

Copy one `<article>...</article>` block in the Research section and change its text. To link to code, add:

```html
<p><a href="https://github.com/USERNAME/REPO">View the code</a></p>
```

## Fonts

Overpass and Source Serif 4, both under the SIL Open Font License (see `assets/fonts`).
