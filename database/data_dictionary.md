# EduGap — Data Dictionary

Dokumen ini merangkum tabel inti database `edugap_db`. Cocokkan dengan struktur aktual di pgAdmin sebelum dijadikan spesifikasi final.

## `data_sources`
Menyimpan metadata sumber data.

| Kolom | Fungsi |
|---|---|
| `id` | Primary key sumber data |
| `name` | Nama sumber data |
| `url` | URL portal/sumber |
| `dataset_name` | Nama dataset |
| `frequency` | Frekuensi pembaruan |
| `last_fetched_at` | Waktu pengambilan data terakhir, jika digunakan |

## `regions`
Menyimpan referensi wilayah.

| Kolom | Fungsi |
|---|---|
| `id` | Primary key wilayah |
| `name` | Nama wilayah |
| `code` | Kode wilayah jika tersedia |
| `region_type` | Jenis wilayah, misalnya `country`, `province`, atau `special` |
| `parent_id` | Relasi ke wilayah induk jika digunakan |

**Catatan kualitas data:** nama seperti `Aceh` dan `PROV. ACEH` pernah tercatat sebagai duplikat. Jangan menghapus atau menggabungkan ID sebelum memeriksa referensinya pada `observations`.

## `indicators`
Menyimpan definisi indikator.

| Kolom | Fungsi |
|---|---|
| `id` | Primary key indikator |
| `code` | Kode indikator unik |
| `name` | Nama indikator |
| `description` | Deskripsi indikator |
| `unit` | Satuan nilai |
| `category` | Kelompok indikator |
| `source_id` | Referensi sumber data |

## `observations`
Menyimpan nilai indikator per wilayah dan tahun.

| Kolom | Fungsi |
|---|---|
| `id` | Primary key observasi |
| `region_id` | Referensi ke `regions.id` |
| `indicator_id` | Referensi ke `indicators.id` |
| `year` | Tahun data |
| `category` | Kategori tambahan, misalnya kelompok umur, jenjang, atau status |
| `value` | Nilai indikator |
| `source_id` | Referensi sumber data |

Kombinasi wilayah, indikator, tahun, dan kategori dirancang sebagai identitas observasi. Periksa constraint aktual di PostgreSQL.

## Tabel staging
Tabel staging menampung data hasil impor sebelum dimasukkan ke tabel inti. Nama staging yang pernah digunakan meliputi `staging_education_staff`, `staging_school_overview`, serta `staging_aps` dan `staging_students`. Konfirmasi nama aktual melalui daftar tabel di pgAdmin.
