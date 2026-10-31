-- EduGap: eksplorasi indikator dan cakupan data
-- Jalankan di pgAdmin Query Tool pada database edugap_db.

-- A. Daftar indikator dan jumlah observasi
SELECT
    i.code,
    i.name AS indikator,
    i.unit AS satuan,
    i.category AS kategori_indikator,
    COUNT(o.id) AS jumlah_observasi,
    MIN(o.year) AS tahun_awal,
    MAX(o.year) AS tahun_akhir
FROM indicators i
LEFT JOIN observations o ON o.indicator_id = i.id
GROUP BY i.code, i.name, i.unit, i.category
ORDER BY i.category, i.name;

-- B. Cakupan observasi per tahun
SELECT year, COUNT(*) AS jumlah_observasi
FROM observations
GROUP BY year
ORDER BY year;

-- C. Kode indikator yang sudah memiliki data
SELECT i.code, i.name, COUNT(o.id) AS jumlah_observasi
FROM indicators i
LEFT JOIN observations o ON o.indicator_id = i.id
GROUP BY i.code, i.name
ORDER BY i.code;
