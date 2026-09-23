document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // supaya form tidak reload halaman

    // Ambil nilai dari input
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const message = document.getElementById('message').value.trim();

    // Validasi sederhana
    if (!name || !email || !phone || !message) {
        alert('Mohon isi semua field terlebih dahulu.');
        return;
    }

    // Nomor WhatsApp pembuat web (format internasional, tanpa + atau 0 di depan)
    // Contoh: 08123456789 -> 628123456789
    const waNumber = '6281376508809'; // GANTI dengan nomor WhatsApp kamu

    // Susun teks pesan
    const text =
        `Halo, saya ingin menghubungi Anda melalui form website:\n\n` +
        `Nama: ${name}\n` +
        `Email: ${email}\n` +
        `Telepon: ${phone}\n` +
        `Pesan: ${message}`;

    // Encode teks untuk URL
    const encodedText = encodeURIComponent(text);

    // Buat URL WhatsApp
    const waUrl = `https://wa.me/${waNumber}?text=${encodedText}`;

    // Redirect / buka WhatsApp
    window.open(waUrl, '_blank');

    // Optional: reset form setelah kirim
    this.reset();
});