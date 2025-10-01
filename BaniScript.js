document.addEventListener('DOMContentLoaded', () => {
    // 1. Smooth Scrolling untuk Navigasi
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll ke elemen target dengan efek halus
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 2. Typing Effect (Efek Mengetik)
    const typingElement = document.getElementById('typing-text');
    // Ambil teks dari HTML yang sudah dibersihkan dari simbol-simbol.
    const textToType = 'Mahasiswa Teknik Informatika | AI & Computer Vision Strategist';
    typingElement.textContent = '|'; // Tampilkan kursor awal

    let i = 0;
    function typeWriter() {
        if (i < textToType.length) {
            // Hapus kursor, tambahkan karakter, tambahkan kursor lagi
            typingElement.textContent = typingElement.textContent.slice(0, -1) + textToType.charAt(i) + '|';
            i++;
            // Atur kecepatan ketik (50ms)
            setTimeout(typeWriter, 50);
        } else {
            // Hilangkan kursor setelah selesai mengetik
            typingElement.textContent = typingElement.textContent.slice(0, -1);
        }
    }

    // Panggil fungsi saat halaman selesai dimuat
    typeWriter();
});