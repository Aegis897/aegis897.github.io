/**
 * Calcolatore IV per Glitchmon
 * Gestisce la logica di calcolo delle statistiche in base alla generazione.
 */

document.addEventListener('DOMContentLoaded', () => {
    // Riferimenti agli elementi DOM
    const inputs = {
        atk: document.getElementById('iv-atk'),
        def: document.getElementById('iv-def'),
        spd: document.getElementById('iv-spd'),
        spc: document.getElementById('iv-spc')
    };

    const resultDisplay = document.getElementById('iv-hp-result');
    const binaryExplanation = document.getElementById('binary-explanation');

    /**
     * Calcola gli IV dei PS per la Prima Generazione.
     * Metodo: Prende l'ultimo bit (LSB) di ogni IV (Attacco, Difesa, Velocità, Speciali)
     * e li concatena per formare un numero binario a 4 bit.
     *
     * Esempio:
     * Atk: 6 (110) -> 0
     * Def: 5 (101) -> 1
     * Spd: 6 (110) -> 0
     * Spc: 8 (1000) -> 0
     * Risultato binario: 0100 -> Decimale: 4
     */
    function calculateGen1HP() {
        const vals = {
            atk: parseInt(inputs.atk.value) || 0,
            def: parseInt(inputs.def.value) || 0,
            spd: parseInt(inputs.spd.value) || 0,
            spc: parseInt(inputs.spc.value) || 0
        };

        // Validazione range (0-15 per Gen 1)
        for (let key in vals) {
            if (vals[key] < 0) inputs[key].value = 0;
            if (vals[key] > 15) inputs[key].value = 15;
        }

        // Estrazione dell'ultimo bit (operatore AND bitwise con 1)
        const bitAtk = vals.atk & 1;
        const bitDef = vals.def & 1;
        const bitSpd = vals.spd & 1;
        const bitSpc = vals.spc & 1;

        // Composizione del valore finale (bitshift)
        // L'ordine standard è solitamente: Atk, Def, Spd, Spc (MSB to LSB)
        const hpIV = (bitAtk << 3) | (bitDef << 2) | (bitSpd << 1) | bitSpc;

        // Costruzione spiegazione binaria
        const binaryString = `${bitAtk}${bitDef}${bitSpd}${bitSpc}`;

        // Aggiornamento UI
        resultDisplay.textContent = hpIV;
        binaryExplanation.textContent = `Binario: ${binaryString} (Atk ${bitAtk}, Def ${bitDef}, Spd ${bitSpd}, Spc ${bitSpc})`;
    }

    // Aggiunta event listener a tutti gli input per rendere il calcolo interattivo
    Object.values(inputs).forEach(input => {
        input.addEventListener('input', calculateGen1HP);
    });

    // Esecuzione iniziale al caricamento
    calculateGen1HP();
});