// Kode JavaScript untuk interaksi (opsional)

// Contoh: Menampilkan pesan saat mouse di atas kontak
const contactItems = document.querySelectorAll(".contact li");

contactItems.forEach(item => {
    item.addEventListener("mouseover", () => {
        // Anda bisa menambahkan animasi, efek, atau pesan di sini
        console.log("Mouse over kontak");
    });
});