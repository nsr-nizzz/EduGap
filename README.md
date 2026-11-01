
# EduGap – Peta Kesenjangan Pendidikan Indonesia

## Deskripsi Project

**EduGap** merupakan platform visualisasi data pendidikan yang bertujuan untuk membantu pengguna memahami kesenjangan pendidikan antarwilayah di Indonesia. Platform ini menyediakan informasi berbasis data melalui dashboard, peta kesenjangan, perbandingan wilayah, serta analisis dan simulasi kebijakan untuk mendukung pengambilan keputusan yang lebih tepat sasaran.

## Tech Stack

Teknologi yang digunakan dalam pengembangan EduGap:

- **Frontend:** React.js
- **Build Tool:** Vite
- **Programming Language:** JavaScript
- **Styling:** CSS
- **API Integration:** REST API
- **Version Control:** Git & GitHub
- **Database:** PostgreSQL

## Cara Menjalankan Project

Pastikan perangkat telah memiliki:

- Node.js
- npm
- Git

### 1. Clone Repository

Clone repository EduGap ke komputer lokal:

```bash
git clone https://github.com/USERNAME/REPOSITORY.git
```

Masuk ke direktori project:

```bash
cd REPOSITORY
```

### 2. Install Dependencies

Jalankan perintah berikut untuk menginstal seluruh dependencies:

```bash
npm install
```

### 3. Konfigurasi Environment

Jika project menggunakan environment variables, buat file `.env` berdasarkan konfigurasi yang dibutuhkan.

Contoh:

```env
VITE_API_URL=URL_BACKEND_API
```

Sesuaikan URL API dengan alamat backend yang digunakan.

### 4. Jalankan Project

Jalankan development server menggunakan perintah:

```bash
npm run dev
```

Buka alamat yang ditampilkan pada terminal, biasanya:

```text
http://localhost:5173
```

## Progress Pengembangan

Saat ini, EduGap telah memiliki 9 halaman utama yang dikembangkan, yaitu Beranda, Dashboard, Peta Kesenjangan, Simulasi Kebijakan, Perbandingan Wilayah, Jelajahi Data, Detail Wilayah, Analisis & Insight, dan Tentang EduGap.

Beberapa halaman, meliputi Dashboard, Peta Kesenjangan, Jelajahi Data, Perbandingan Wilayah, Detail Wilayah, dan Analisis & Insight, telah mulai terintegrasi dengan API. Namun, beberapa komponen visualisasi masih menggunakan data dummy dan belum sepenuhnya terhubung dengan database.

## Catatan dan Keterbatasan Pengembangan

Dalam proses pengembangan dan integrasi API, terdapat beberapa keterbatasan yang perlu diperhatikan:

### 1. Visualisasi Peta Indonesia

Peta Indonesia yang digunakan pada frontend saat ini masih berupa ilustrasi SVG dan belum terhubung dengan koordinat geografis maupun data spasial. Dengan demikian, visualisasi peta belum sepenuhnya merepresentasikan kondisi geografis berdasarkan data aktual dari setiap wilayah.

### 2. Penggunaan Data Dummy

Meskipun beberapa halaman telah terintegrasi dengan API, belum seluruh komponen visualisasi menggunakan data aktual dari database. Beberapa bagian masih menggunakan data dummy sebagai data sementara, sehingga informasi yang ditampilkan belum sepenuhnya merepresentasikan kondisi pendidikan berdasarkan data aktual.

## Rencana Pengembangan Selanjutnya

Beberapa hal yang menjadi rencana pengembangan EduGap berikutnya:

- Melengkapi dan memvalidasi data observasi pendidikan.
- Meningkatkan integrasi seluruh komponen visualisasi dengan API.
- Mengembangkan peta geografis Indonesia berbasis data spasial.
- Menyempurnakan fitur perbandingan wilayah dan analisis data.
- Meningkatkan akurasi dan konsistensi informasi yang ditampilkan.

---

**EduGap – Mewujudkan Pendidikan yang Lebih Merata untuk Indonesia.**
