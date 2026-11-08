// ─────────────────────────────────────────────────────────────
//  Orion download site settings: edit these, nothing else.
// ─────────────────────────────────────────────────────────────
window.ORION = {
  version: '1.0.0',

  // Where the Mac app zips live. GitHub Releases is recommended (files can be up to 2 GB;
  // Render/GitHub repos can't hold files over 100 MB). A Google Drive "anyone with the link"
  // download link works too.
  downloads: {
    appleSilicon: 'https://github.com/Codracer12MostlyAI/orionwebsite/releases/latest/download/Orion-mac-AppleSilicon.zip',
    intel: ''  // no Intel build yet: the Intel link stays hidden,
  },

  // Link to the source code (for the "Run from source" section). Leave empty to hide the button.
  sourceUrl: '',
};
