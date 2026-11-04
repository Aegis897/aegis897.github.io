/**
 * Calcolatore IV per Glitchmon
 * Gestisce la logica di calcolo delle statistiche in base alla generazione.
 */

/* ---------- Tema: fallback se ../theme.js non fornisce già le funzioni ---------- */
(function ensureThemeFunctions() {
  function applyTheme(dark) {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }

  if (typeof window.initTheme !== 'function') {
    window.initTheme = function () {
      let saved = null;
      try { saved = localStorage.getItem('theme'); } catch (e) { /* storage non disponibile */ }
      applyTheme(saved === 'dark');
    };
  }

  if (typeof window.toggleTheme !== 'function') {
    window.toggleTheme = function () {
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
      applyTheme(!isDark);
      try { localStorage.setItem('theme', isDark ? 'light' : 'dark'); } catch (e) { /* ignora */ }
    };
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  /* ---------- Card 1: Gen 1 ---------- */
  const inputs = {
    atk: document.getElementById('iv-atk'),
    def: document.getElementById('iv-def'),
    spd: document.getElementById('iv-spd'),
    spc: document.getElementById('iv-spc')
  };
  const resultDisplay = document.getElementById('iv-hp-result');
  const binaryExplanation = document.getElementById('binary-explanation');

  /* ---------- Card 2: Gen 2 (variante) ---------- */
  const inputsV = {
    atk: document.getElementById('iv-atk-v'),
    def: document.getElementById('iv-def-v'),
    spd: document.getElementById('iv-spd-v'),
    spatk: document.getElementById('iv-spatk-v'),
    spdef: document.getElementById('iv-spdef-v')
  };
  const resultDisplayV = document.getElementById('iv-hp-result-v');
  const binaryExplanationV = document.getElementById('binary-explanation-v');

  /** Legge un IV e lo porta nel range 0-15. */
  function readIV(el) {
    let v = parseInt(el.value, 10);
    if (Number.isNaN(v)) v = 0;
    if (v < 0) v = 0;
    if (v > 15) v = 15;
    return v;
  }

  /** Formula PS Gen 1/2: bit di Atk, Def, Spd, Spc (o SpAtk nella variante). */
  function computeHP(bitAtk, bitDef, bitSpd, bitSpc) {
    const hpIV = (bitAtk << 3) | (bitDef << 2) | (bitSpd << 1) | bitSpc;
    const binaryString = `${bitAtk}${bitDef}${bitSpd}${bitSpc}`;
    return { hpIV, binaryString };
  }

  /** Calcola gli IV dei PS per la Prima Generazione. */
  function calculateGen1HP() {
    const vals = {
      atk: readIV(inputs.atk),
      def: readIV(inputs.def),
      spd: readIV(inputs.spd),
      spc: readIV(inputs.spc)
    };

    // Riporta nel range i valori fuori limite
    for (const key in vals) {
      inputs[key].value = vals[key];
    }

    const bitAtk = vals.atk & 1;
    const bitDef = vals.def & 1;
    const bitSpd = vals.spd & 1;
    const bitSpc = vals.spc & 1;

    const { hpIV, binaryString } = computeHP(bitAtk, bitDef, bitSpd, bitSpc);
    resultDisplay.textContent = hpIV;
    binaryExplanation.textContent = `Binario: ${binaryString} (Atk ${bitAtk}, Def ${bitDef}, Spd ${bitSpd}, Spc ${bitSpc})`;
  }

  /** Calcola gli IV dei PS per la Variante con Speciali separati. */
  function calculateGen2HP() {
    const vals = {
      atk: readIV(inputsV.atk),
      def: readIV(inputsV.def),
      spd: readIV(inputsV.spd),
      spatk: readIV(inputsV.spatk),
      spdef: readIV(inputsV.spdef)
    };

    for (const key in vals) {
      inputsV[key].value = vals[key];
    }

    // Come da logica originale: per i PS si usa SpAtk come riferimento "Speciale"
    const bitAtk = vals.atk & 1;
    const bitDef = vals.def & 1;
    const bitSpd = vals.spd & 1;
    const bitSpc = vals.spatk & 1;

    const { hpIV, binaryString } = computeHP(bitAtk, bitDef, bitSpd, bitSpc);
    resultDisplayV.textContent = hpIV;
    binaryExplanationV.textContent = `Binario: ${binaryString} (Atk ${bitAtk}, Def ${bitDef}, Spd ${bitSpd}, Spc ${bitSpc})`;
  }

  // Listener Card 1
  Object.values(inputs).forEach(input => {
    input.addEventListener('input', calculateGen1HP);
  });

  // Listener Card 2 (con sincronizzazione SpAtk -> SpDef)
  Object.values(inputsV).forEach(input => {
    input.addEventListener('input', (e) => {
      if (e.target.id === 'iv-spatk-v') {
        inputsV.spdef.value = e.target.value;
      }
      calculateGen2HP();
    });
  });

  /* ---------- Gen 3: distribuzione bit interattiva ---------- */
  const singleBoxes = document.querySelectorAll('.bit-box[data-single]');
  const groupBoxes = document.querySelectorAll('.bit-box[data-stat]');
  const regHex = document.getElementById('reg-hex');
  const regDec = document.getElementById('reg-dec');

  /** Ricalcola i valori per statistica e il registro a 32 bit. */
  function updateRegister() {
    let reg = 0;

    singleBoxes.forEach(box => {
      const btn = box.querySelector('.bit');
      if (btn.classList.contains('on')) {
        reg |= 1 << Number(box.dataset.shift);
      }
    });

    groupBoxes.forEach(box => {
      // Sinistra = bit più significativo
      const tiles = box.querySelectorAll('.bit');
      let v = 0;
      tiles.forEach(btn => {
        v = (v << 1) | (btn.textContent.trim() === '1' ? 1 : 0);
      });
      reg |= v << Number(box.dataset.shift);
      const num = document.querySelector(`[data-num-for="${box.dataset.stat}"]`);
      if (num) num.textContent = v;
    });

    const unsigned = reg >>> 0;
    regDec.textContent = `Decimale: ${unsigned}`;
    regHex.textContent = '0x' + unsigned.toString(16).toUpperCase().padStart(8, '0');
  }

  // Bit singoli (abilità, uovo)
  singleBoxes.forEach(box => {
    const btn = box.querySelector('.bit');
    btn.addEventListener('click', () => {
      const on = !btn.classList.contains('on');
      btn.classList.toggle('on', on);
      btn.textContent = on ? '1' : '0';
      btn.setAttribute('aria-pressed', String(on));
      updateRegister();
    });
  });

  // Bit dei gruppi (5 per statistica)
  groupBoxes.forEach(box => {
    box.querySelectorAll('.bit').forEach(btn => {
      btn.addEventListener('click', () => {
        const flipped = btn.textContent.trim() === '1' ? '0' : '1';
        btn.textContent = flipped;
        btn.classList.toggle('on', flipped === '1');
        updateRegister();
      });
    });
  });

  // Stato iniziale dei bit a 1
  document.querySelectorAll('.bit').forEach(btn => {
    btn.classList.toggle('on', btn.textContent.trim() === '1');
  });

  /* ---------- Esecuzione iniziale ---------- */
  calculateGen1HP();
  calculateGen2HP();
  updateRegister();
});