console.log("JavaScript file loaded");
document.getElementById('languageSelect').addEventListener('change', function () {
    if (this.value === 'indonesia') {
        document.getElementById('navHome').textContent = 'Beranda';
        document.getElementById('navDestination').textContent = 'Tujuan';
        document.getElementById('navFAQ').textContent = 'FAQ';
        document.getElementById('navAbout').textContent = 'Tentang Kami';

        document.getElementById('ctaHeading').textContent = 'Eksplorasi Pulau Bersejarah';
        document.getElementById('ctaDescription').textContent = 'Selamat datang di Pulau Penyengat, sebuah pulau kecil yang kaya akan sejarah di Kepulauan Riau, Indonesia. Dalam tur audio ini, kami akan membawa Anda melalui beberapa situs paling penting di pulau ini. Mari kita mulai perjalanan kita dengan pengenalan singkat tentang Pulau Penyengat...';

        document.getElementById('destinationTitle').textContent = 'Mesjid Raya Sultan Riau';
        document.getElementById('destinationDescription').textContent = 'Objek pertama kita adalah Mesjid Raya Sultan Riau, sebuah bangunan bersejarah yang dibangun pada tahun 1832. Mesjid ini terkenal dengan kubahnya yang terbuat dari telur ayam sebagai bahan pengikat. Selain berfungsi sebagai tempat ibadah, mesjid ini juga merupakan pusat pendidikan dan budaya pada masanya. Mari kita lihat lebih dekat arsitektur unik dan cerita di balik pembangunan mesjid ini...';

        document.getElementById('faqQuestion1').textContent = 'Apa itu Pulau Penyengat?';
        document.getElementById('faqAnswer1').textContent = 'Pulau Penyengat adalah sebuah pulau kecil yang kaya akan sejarah di Kepulauan Riau, Indonesia. Pulau ini terkenal karena warisan budayanya dan sejarahnya yang kaya.';
    } else {
        // Kembali ke teks bahasa Inggris
        document.getElementById('navHome').textContent = 'Home';
        document.getElementById('navDestination').textContent = 'Destination';
        document.getElementById('navFAQ').textContent = 'FAQ';
        document.getElementById('navAbout').textContent = 'About Us';

        document.getElementById('ctaHeading').textContent = 'Explore The Historical Island';
        document.getElementById('ctaDescription').textContent = 'Welcome to Penyengat Island, a small but historically rich island in the Riau Islands, Indonesia. In this audio tour, we will take you through some of the most important sites on the island. Let\'s start our journey with a brief introduction to Penyengat Island...';

        document.getElementById('destinationTitle').textContent = 'Sultan Riau Mosque';
        document.getElementById('destinationDescription').textContent = 'Our first object is the Sultan Riau Mosque, a historical building built in 1832. This mosque is famous for its dome made of chicken eggs as a binding material. In addition to functioning as a place of worship, this mosque was also a center of education and culture in its time. Let\'s take a closer look at the unique architecture and the story behind the construction of this mosque...';

        document.getElementById('faqQuestion1').textContent = 'What is Penyengat Island?';
        document.getElementById('faqAnswer1').textContent = 'Penyengat Island is a small but historically rich island in the Riau Islands, Indonesia. The island is renowned for its cultural heritage and rich history.';
    }
});
