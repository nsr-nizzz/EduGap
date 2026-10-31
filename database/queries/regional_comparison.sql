-- EduGap: perbandingan antarwilayah.
-- Contoh menggunakan APS (Angka Partisipasi Sekolah).
-- Nilai dipisahkan per kelompok/kategori agar tidak tercampur.

-- 1. Bandingkan APS antarprovinsi untuk tahun 2025
SELECT
    r.name AS wilayah,
    o.year,
    o.category AS kelompok,
    o.value,
    i.unit AS satuan
FROM observations o
JOIN indicators i ON i.id = o.indicator_id
JOIN regions r ON r.id = o.region_id
WHERE i.code = 'APS'
  AND o.year = 2025
  AND r.region_type = 'province'
ORDER BY o.category, o.value DESC NULLS LAST, r.name;

-- 2. Bandingkan nilai satu indikator pada dua tahun.
-- Contoh APS 2021 versus 2025. Perubahan dihitung per provinsi dan kategori.
SELECT
    r.name AS wilayah,
    o.category AS kelompok,
    MAX(o.value) FILTER (WHERE o.year = 2021) AS nilai_2021,
    MAX(o.value) FILTER (WHERE o.year = 2025) AS nilai_2025,
    MAX(o.value) FILTER (WHERE o.year = 2025)
      - MAX(o.value) FILTER (WHERE o.year = 2021) AS perubahan_absolut
FROM observations o
JOIN indicators i ON i.id = o.indicator_id
JOIN regions r ON r.id = o.region_id
WHERE i.code = 'APS'
  AND o.year IN (2021, 2025)
  AND r.region_type = 'province'
GROUP BY r.name, o.category
ORDER BY o.category, perubahan_absolut DESC NULLS LAST, r.name;

-- 3. Semua indikator yang tersedia untuk Jawa Barat
SELECT
    r.name AS wilayah,
    o.year,
    i.code,
    i.name AS indikator,
    o.category,
    o.value,
    i.unit AS satuan
FROM observations o
JOIN regions r ON r.id = o.region_id
JOIN indicators i ON i.id = o.indicator_id
WHERE r.name = 'Jawa Barat'
ORDER BY o.year, i.name, o.category;
