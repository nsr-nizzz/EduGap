-- EduGap: query untuk dashboard.
-- Hindari menjumlahkan semua nilai lintas kategori/jenjang/status karena
-- kategori bisa mewakili kelompok berbeda atau subtotal.

-- 1. Kartu ringkasan umum database
SELECT
    (SELECT COUNT(*) FROM indicators) AS jumlah_indikator_terdaftar,
    (SELECT COUNT(*) FROM regions WHERE region_type = 'province') AS jumlah_wilayah_provinsi_terdaftar,
    (SELECT COUNT(*) FROM observations) AS jumlah_observasi,
    (SELECT MIN(year) FROM observations) AS tahun_awal_data,
    (SELECT MAX(year) FROM observations) AS tahun_akhir_data;

-- 2. Ringkasan ketersediaan data per indikator
SELECT
    i.code,
    i.name AS indikator,
    i.unit AS satuan,
    COUNT(o.id) AS jumlah_observasi,
    MIN(o.year) AS tahun_awal,
    MAX(o.year) AS tahun_akhir
FROM indicators i
LEFT JOIN observations o ON o.indicator_id = i.id
GROUP BY i.code, i.name, i.unit
ORDER BY i.name;

-- 3. Tren APS per tahun dan kelompok umur.
-- Ini mengembalikan nilai per wilayah dan kategori; backend dapat memfilter
-- wilayah atau menyusun grafik tanpa mencampur kelompok umur.
SELECT
    r.name AS wilayah,
    r.region_type AS tipe_wilayah,
    o.year,
    o.category AS kelompok,
    o.value,
    i.unit AS satuan
FROM observations o
JOIN indicators i ON i.id = o.indicator_id
JOIN regions r ON r.id = o.region_id
WHERE i.code = 'APS'
ORDER BY o.year, r.name, o.category;

-- 4. Tren jumlah peserta didik.
-- Kategori dipertahankan agar jenjang/status/kelas tidak dijumlahkan tanpa sengaja.
SELECT
    r.name AS wilayah,
    r.region_type AS tipe_wilayah,
    o.year,
    o.category,
    o.value,
    i.unit AS satuan
FROM observations o
JOIN indicators i ON i.id = o.indicator_id
JOIN regions r ON r.id = o.region_id
WHERE i.code = 'STUDENT_COUNT'
ORDER BY o.year, r.name, o.category;

-- 5. Ringkasan indikator keadaan sekolah per tahun, wilayah, dan kategori.
SELECT
    i.code,
    i.name AS indikator,
    r.name AS wilayah,
    r.region_type AS tipe_wilayah,
    o.year,
    o.category,
    o.value,
    i.unit AS satuan
FROM observations o
JOIN indicators i ON i.id = o.indicator_id
JOIN regions r ON r.id = o.region_id
WHERE i.code IN (
    'SCHOOL_COUNT',
    'CLASS_GROUP_COUNT',
    'CLASSROOM_COUNT',
    'REPEATER_COUNT',
    'DROPOUT_COUNT',
    'SCHOOL_HEADS_TEACHERS_COUNT',
    'EDUCATION_STAFF_COUNT'
)
ORDER BY i.code, o.year, r.name, o.category;

-- 6. Jumlah tenaga pendidik per wilayah, tahun, dan kategori.
-- Jangan menjumlahkan kategori Negeri, Swasta, dan gabungan sekaligus.
SELECT
    r.name AS wilayah,
    r.region_type AS tipe_wilayah,
    o.year,
    o.category,
    o.value AS jumlah_tenaga_pendidik,
    i.unit AS satuan
FROM observations o
JOIN indicators i ON i.id = o.indicator_id
JOIN regions r ON r.id = o.region_id
WHERE i.code = 'TOTAL_EDUCATION_STAFF'
ORDER BY o.year, r.name, o.category;
