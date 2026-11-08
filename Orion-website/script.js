(() => {
  const cfg = window.ORION || {};
  const dl = cfg.downloads || {};

  // Guess Apple Silicon vs Intel. Safari doesn't say, so default to Apple Silicon (most Macs since 2021).
  let arch = 'appleSilicon';
  const setArch = (a) => {
    arch = a;
    const other = a === 'intel' ? 'appleSilicon' : 'intel';
    document.querySelectorAll('[data-download]').forEach((el) => { el.href = dl[arch] || '#'; });
    document.querySelectorAll('[data-download-other]').forEach((el) => {
      el.href = dl[other] || '#';
      el.textContent = other === 'intel' ? 'Have an Intel Mac? Get that version' : 'Have an Apple Silicon Mac (M1–M4)? Get that version';
    });
    document.querySelectorAll('[data-arch-label]').forEach((el) => { el.textContent = arch === 'intel' ? 'Intel Mac' : 'Apple Silicon (M1–M4)'; });
  };
  setArch('appleSilicon');
  if (navigator.userAgentData && navigator.userAgentData.getHighEntropyValues) {
    navigator.userAgentData.getHighEntropyValues(['architecture']).then((v) => { if (v.architecture === 'x86') setArch('intel'); }).catch(() => {});
  }

  document.querySelectorAll('[data-version]').forEach((el) => { el.textContent = cfg.version || el.textContent; });
  document.querySelectorAll('[data-source]').forEach((el) => {
    if (cfg.sourceUrl) el.href = cfg.sourceUrl; else el.style.display = 'none';
  });

  // Copy buttons
  document.querySelectorAll('[data-copy]').forEach((btn) => {
    btn.addEventListener('click', async () => {
      const text = document.querySelector(btn.dataset.copy).textContent;
      try { await navigator.clipboard.writeText(text); } catch {
        const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta); ta.select(); document.execCommand('copy'); ta.remove();
      }
      btn.textContent = 'Copied!'; btn.classList.add('ok');
      setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('ok'); }, 1600);
    });
  });
})();
