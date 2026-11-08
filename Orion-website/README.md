# Orion download website

A one-page site that shows off Orion and walks people through downloading, opening and running it. It's plain HTML/CSS (no build step), so it deploys to Render as a free **Static Site**.

## 1. Put the app zips somewhere people can download them

The Mac app zips are about 120 MB, too big for a GitHub repo or Render (100 MB limit per file). Use either:

- **GitHub Releases (recommended):** in your GitHub repo, go to **Releases → Draft a new release**, drag in `Orion-mac-AppleSilicon.zip` (and `Orion-mac-Intel.zip` if you have it), and publish.
- **Google Drive:** upload the zip, set sharing to "Anyone with the link", and use that link.

Then open **`config.js`** and paste your links into `appleSilicon` / `intel`. Replace `YOUR-GITHUB-NAME` in `sourceUrl` too, or set it to `''` to hide the "View the source code" button. That's the only file you need to edit.

**Tip:** build the zip you share on your own Mac (`npm run dist` in the Orion folder). Friends then get the normal "Open Anyway" prompt instead of the "damaged" message. The site explains both.

## 2. Deploy on Render

1. Create a new GitHub repo (e.g. `orion-site`) and upload everything in this folder.
2. On render.com: **New + → Static Site**, connect the repo.
3. Leave **Build Command** empty and set **Publish Directory** to `.`
4. Click **Create Static Site**. Your site is live at `https://orion-site.onrender.com` (or whatever name you pick).

Or use **New + → Blueprint** and pick the repo; `render.yaml` sets everything up for you.

Every time you push a change to GitHub, Render updates the site automatically.

## What's in here

```
index.html      the page
styles.css      styling (Space Grotesk, Orion colors)
script.js       download buttons (picks Apple Silicon/Intel), copy buttons
config.js       your download links, edit this
assets/         screenshots of Orion, icon, social preview image (og.png)
fonts/          Space Grotesk (SIL Open Font License)
render.yaml     Render setup
```
