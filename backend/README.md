# EduGap Backend

Backend EduGap merupakan REST API yang dibangun menggunakan Node.js, Express.js, dan PostgreSQL. Backend berfungsi untuk mengambil dan mengolah data pendidikan dari database agar dapat ditampilkan pada frontend EduGap.

## 1. Teknologi

- Node.js
- Express.js
- PostgreSQL
- Express
- node-postgres (`pg`)
- dotenv
- cors

## 2. Struktur Folder

```text
backend/
├── config/
│   └── database.js
├── controllers/
│   ├── dashboardController.js
│   ├── indicatorController.js
│   ├── regionController.js
│   ├── comparisonController.js
│   ├── mapController.js
│   └── insightsController.js
├── routes/
│   ├── dashboardRoutes.js
│   ├── indicatorRoutes.js
│   ├── regionRoutes.js
│   ├── comparisonRoutes.js
│   ├── mapRoutes.js
│   └── insightsRoutes.js
├── middleware/
│   └── errorHandler.js
├── .env
├── .env.example
├── .gitignore
├── app.js
├── server.js
├── package.json
└── README.md
```

## 3. Persiapan

Pastikan perangkat sudah memiliki:

- Node.js dan npm
- PostgreSQL
- Database `edugap_db` yang telah dibuat dan diisi dengan skema database EduGap.

## 4. Instalasi dan Menjalankan Backend

Buka terminal pada direktori proyek, kemudian masuk ke folder backend:

```bash
cd backend
```

Instal seluruh dependency:

```bash
npm install
```

Pastikan konfigurasi database sudah tersedia pada file `.env`.

Jalankan backend:

```bash
npm start
```

Jika berhasil, server akan berjalan pada:

```text
http://localhost:5000
```

## 5. Konfigurasi Environment

Buat file `.env` di dalam folder `backend`. Contoh konfigurasi:

```env
PORT=5000

DB_HOST=localhost
DB_PORT=5432
DB_NAME=edugap_db
DB_USER=postgres
DB_PASSWORD=your_password
```

Sesuaikan nama variabel dengan konfigurasi yang digunakan pada `config/database.js`.

File `.env` berisi informasi konfigurasi lokal, termasuk kredensial database. File tersebut tidak boleh diunggah ke repository publik.

Gunakan `.env.example` sebagai template konfigurasi tanpa password asli.

## 6. Daftar API Endpoint

| Method | Endpoint | Fungsi |
|---|---|---|
| GET | `/` | Memeriksa status API |
| GET | `/api/dashboard/summary` | Mengambil ringkasan dashboard |
| GET | `/api/dashboard/trends` | Mengambil data tren indikator |
| GET | `/api/indicators` | Mengambil daftar indikator |
| GET | `/api/indicators/:code` | Mengambil detail indikator |
| GET | `/api/regions` | Mengambil daftar wilayah |
| GET | `/api/regions/:id` | Mengambil detail wilayah |
| GET | `/api/regions/:id/observations` | Mengambil observasi wilayah |
| GET | `/api/compare` | Mengambil data perbandingan wilayah |
| GET | `/api/map` | Mengambil data indikator untuk peta |
| GET | `/api/insights` | Mengambil data analisis dan insight |

Contoh penggunaan parameter:

```text
/api/dashboard/trends?indicator=APS

/api/compare?indicator=APS&year=2024&regions=10,46

/api/map?indicator=APS&year=2024

/api/insights?indicator=APS
```

## 7. Catatan Pengembangan

Beberapa hal yang masih menjadi perhatian dalam pengembangan backend dan integrasi frontend:

1. **Kelengkapan data wilayah:** Tidak semua wilayah yang terdaftar pada tabel `regions` sudah memiliki observasi pada tabel `observations` untuk setiap indikator dan tahun.
2. **Perbandingan wilayah:** Data wilayah yang belum memiliki observasi tidak akan muncul pada hasil perbandingan, meskipun wilayah tersebut tersedia dalam daftar pilihan.
3. **Visualisasi peta:** Peta Indonesia pada frontend masih berupa ilustrasi SVG. Data koordinat atau geospasial belum tersedia pada struktur database saat ini.
4. **Agregasi grafik:** Data tren tertentu perlu diolah terlebih dahulu sebelum divisualisasikan. Nilai rata-rata antarprovinsi tidak selalu sama dengan rata-rata nasional berbobot.
5. **Pengembangan lanjutan:** Perlu dilakukan pemeriksaan kelengkapan dataset, proses import, dan konsistensi data sebelum seluruh visualisasi dapat dianggap mewakili kondisi setiap wilayah.

---

Backend EduGap masih dalam tahap pengembangan dan integrasi dengan frontend. Kelengkapan serta validitas data perlu diperhatikan dalam interpretasi hasil visualisasi.