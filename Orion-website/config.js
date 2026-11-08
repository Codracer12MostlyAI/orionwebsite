// ─────────────────────────────────────────────────────────────
//  Orion download site settings: edit these, nothing else.
// ─────────────────────────────────────────────────────────────
window.ORION = {
  version: '1.0.0',

  // Where the Mac app zips live. GitHub Releases is recommended (files can be up to 2 GB;
  // Render/GitHub repos can't hold files over 100 MB). A Google Drive "anyone with the link"
  // download link works too.
  downloads: {
    appleSilicon: 'https://github.com/YOUR-GITHUB-NAME/orion/releases/latest/download/Orion-mac-AppleSilicon.zip',
    intel: 'https://github.com/YOUR-GITHUB-NAME/orion/releases/latest/download/Orion-mac-Intel.zip',
  },

  // Link to the source code (for the "Run from source" section). Leave empty to hide the button.
  sourceUrl: 'https://github.com/YOUR-GITHUB-NAME/orion',
};
