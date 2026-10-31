# EduGap — Database

Folder ini berisi struktur, query, dan dokumentasi database PostgreSQL `edugap_db`.

## Struktur folder yang disarankan

```text
database/
├── sql/
│   ├── schema.sql
│   └── edugap_db.backup
├── queries/
│   ├── data_exploration.sql
│   ├── dashboard.sql
│   └── regional_comparison.sql
├── data_dictionary.md
└── README.md
```

`schema.sql` berisi struktur saja. File `.backup` berisi struktur dan data apabila backup lengkap berhasil dibuat.

## Cara menggunakan

1. Pastikan PostgreSQL terpasang.
2. Untuk membuat struktur saja, jalankan `schema.sql` pada database kosong.
3. Untuk memulihkan backup lengkap `.backup`, gunakan pgAdmin: klik kanan database tujuan → Restore → pilih file backup.
4. Jalankan query dalam folder `queries/` pada database yang sudah terisi.

Jangan restore backup lengkap ke database aktif yang sudah berisi data tanpa memahami dampaknya. Uji pemulihan pada database terpisah terlebih dahulu.

## Catatan untuk backend

- Backend mengakses PostgreSQL melalui server/API; frontend tidak boleh terhubung langsung ke database.
- Simpan kredensial dalam environment variables, bukan di GitHub.
- Gunakan parameterized queries untuk input pengguna.
- Ganti placeholder `KODE_INDIKATOR` dengan kode yang benar-benar tersedia pada tabel `indicators`.
- Pertahankan kategori dan satuan agar nilai dengan makna berbeda tidak tercampur.

## File backup dan CSV

Backup database dan CSV mentah mungkin berukuran besar. Pertimbangkan membagikannya melalui Google Drive dan mencantumkan petunjuk akses di README. Jangan unggah kata sandi atau kredensial.
