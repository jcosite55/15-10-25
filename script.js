/**
 * Fungsi untuk memadamkan lilin ketika di-tap/klik
 * @param {number} candleNumber - Nomor lilin (1 sampai 4)
 */
function blowOut(candleNumber) {
    const candleElement = document.querySelector(`.base-${candleNumber}`);
    const flameElement = document.querySelector(`.flame-${candleNumber}`);

    // Cek apakah lilin sudah ditiup atau belum
    if (flameElement.style.opacity !== '0') {
        // Lilin ditiup
        flameElement.style.opacity = '0';
        candleElement.classList.add('blown-out');

        // Cek apakah semua lilin sudah ditiup
        checkAllBlownOut();
    }
}

/**
 * Fungsi untuk memeriksa apakah semua lilin sudah ditiup
 */
function checkAllBlownOut() {
    const totalCandles = 4;
    let blownOutCount = 0;

    for (let i = 1; i <= totalCandles; i++) {
        const flameElement = document.querySelector(`.flame-${i}`);
        if (flameElement.style.opacity === '0') {
            blownOutCount++;
        }
    }

    if (blownOutCount === totalCandles) {
        // Semua lilin sudah ditiup!
        const instruction = document.querySelector('.instruction');
        // Ubah teks instruksi menjadi pesan penutup
        instruction.innerHTML = "Yeay! Make a wish! ✨";

        // Opsional: Tambahkan animasi konfeti atau efek lain di sini
    }
}