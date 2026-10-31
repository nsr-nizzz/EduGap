import React, { useMemo, useState } from "react";
import {
  Home,
  LayoutDashboard,
  Map,
  SlidersHorizontal,
  Database,
  Lightbulb,
  Compass,
  Info,
  Search,
  Bell,
  UserRound,
  Menu,
  ChevronDown,
  ArrowUpRight,
  ArrowDownRight,
  School,
  Users,
  GraduationCap,
  UserCheck,
  ChartNoAxesCombined,
  MapPin,
  Download,
  RotateCcw,
  Play,
  CheckCircle2,
  BookOpen,
  ShieldCheck,
  Eye,
  Target,
  Sparkles,
  ArrowRight,
  X,
  Filter,
  ExternalLink,
} from "lucide-react";
import {
  ResponsiveContainer,
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { 
  getDashboardSummary,
  getMapData, 
  getIndicators, 
  getRegions,
  getRegionObservations,
  compareRegions,
  getInsights,
  getDashboardTrends,
} from "./services/api";


export const nav = [
  { label: "Beranda", icon: Home },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Peta Kesenjangan", icon: Map },
  { label: "Simulasi", icon: SlidersHorizontal },
  { label: "Perbandingan Wilayah", icon: ChartNoAxesCombined },
  { label: "Jelajahi Data", icon: Database },
  { label: "Analisis & Insight", icon: Lightbulb },
  { label: "Detail Wilayah", icon: Compass },
  { label: "Tentang", icon: Info },
];
export const provinces = [
  {
    name: "DKI Jakarta",
    school: "1.234",
    students: "162.345",
    teachers: "12.731",
    ratio: 92.6,
    gap: 0.5,
    aps: 94.3,
  },
  {
    name: "Jawa Barat",
    school: "5.432",
    students: "245.882",
    teachers: "18.204",
    ratio: 92.1,
    gap: 0.3,
    aps: 81.2,
  },
  {
    name: "Jawa Tengah",
    school: "4.981",
    students: "180.421",
    teachers: "13.892",
    ratio: 90.4,
    gap: 0.2,
    aps: 84.7,
  },
  {
    name: "DI Yogyakarta",
    school: "802",
    students: "112.701",
    teachers: "9.431",
    ratio: 95.6,
    gap: 0.8,
    aps: 91.8,
  },
  {
    name: "Jawa Timur",
    school: "6.120",
    students: "221.908",
    teachers: "14.682",
    ratio: 91.7,
    gap: 0.4,
    aps: 86.5,
  },
  {
    name: "Banten",
    school: "2.341",
    students: "138.221",
    teachers: "10.091",
    ratio: 88.3,
    gap: 0.6,
    aps: 79.4,
  },
  {
    name: "Bali",
    school: "1.087",
    students: "142.501",
    teachers: "11.204",
    ratio: 94.5,
    gap: 1.2,
    aps: 89.7,
  },
  {
    name: "Nusa Tenggara Timur",
    school: "1.002",
    students: "87.773",
    teachers: "11.704",
    ratio: 78.1,
    gap: 1.2,
    aps: 66.8,
  },
  {
    name: "Kalimantan Barat",
    school: "1.145",
    students: "70.330",
    teachers: "8.772",
    ratio: 76.9,
    gap: 1.5,
    aps: 72.3,
  },
  {
    name: "Papua",
    school: "876",
    students: "20.321",
    teachers: "7.113",
    ratio: 67.4,
    gap: 2.1,
    aps: 56.2,
  },
  {
    name: "Papua Barat",
    school: "421",
    students: "18.402",
    teachers: "3.831",
    ratio: 72.5,
    gap: 1.8,
    aps: 62.5,
  },
  {
    name: "Sulawesi Barat",
    school: "691",
    students: "38.500",
    teachers: "4.923",
    ratio: 80.2,
    gap: 0.9,
    aps: 71.2,
  },
];
export const trend = [
  { year: "2019", sma: 79, smk: 77, smp: 86 },
  { year: "2020", sma: 80, smk: 78, smp: 87 },
  { year: "2021", sma: 82, smk: 79, smp: 88 },
  { year: "2022", sma: 83, smk: 81, smp: 89 },
  { year: "2023", sma: 84, smk: 82, smp: 90 },
  { year: "2024", sma: 85, sma2: 84, smk: 83, smp: 91 },
];
export const distribution = [
  { name: "SD", value: 45.2 },
  { name: "SMP", value: 28.3 },
  { name: "SMA", value: 18.1 },
  { name: "SMK", value: 8.4 },
];
export const colors = ["#0878f9", "#4aa5ff", "#7cc4ff", "#b8e2ff"];

export function Brand() {
  return (
    <div className="brand">
      <div className="brand-mark">
        <BookOpen size={17} />
      </div>
      <span>
        Edu<span>Gap</span>
      </span>
    </div>
  );
}
export function Sidebar({ page, setPage, open, setOpen }) {
  return (
    <aside className={`sidebar ${open ? "sidebar-open" : ""}`}>
      <div className="side-top">
        <Brand />
        <button className="mobile-close" onClick={() => setOpen(false)}>
          <X size={18} />
        </button>
      </div>
      <div className="side-label">MENU UTAMA</div>
      <nav>
        {nav.map(({ label, icon: Icon }) => (
          <button
            key={label}
            className={`nav-item ${page === label ? "active" : ""}`}
            onClick={() => {
              setPage(label);
              setOpen(false);
            }}
          >
            <Icon size={17} />
            <span>{label}</span>
            {label === "Analisis & Insight" && <span className="nav-dot" />}
          </button>
        ))}
      </nav>
      <div className="side-help">
        <div className="help-icon">
          <Sparkles size={18} />
        </div>
        <b>Temukan insight baru</b>
        <p>Jelajahi data untuk memahami pemerataan pendidikan.</p>
        <button onClick={() => setPage("Analisis & Insight")}>
          Lihat insight <ArrowRight size={14} />
        </button>
      </div>
      <div className="side-bottom">
        <div className="avatar">EG</div>
        <div>
          <b>EduGap Explorer</b>
          <small>Pengunjung</small>
        </div>
        <ChevronDown size={15} />
      </div>
    </aside>
  );
}
export function Header({ page, setOpen }) {
  return (
    <header className="topbar">
      <div className="mobile-brand">
        <button className="menu-button" onClick={() => setOpen(true)}>
          <Menu size={20} />
        </button>
        <Brand />
      </div>
      <div className="breadcrumb">
        Workspace <span>/</span> <b>{page}</b>
      </div>
      <div className="top-actions">
        <label className="global-search">
          <Search size={16} />
          <input placeholder="Cari wilayah, indikator, atau kata kunci..." />
          <kbd>⌘ K</kbd>
        </label>
        <button className="icon-button" title="Notifikasi">
          <Bell size={18} />
          <i />
        </button>
        <button className="profile-button">
          <span className="avatar small">EG</span>
          <ChevronDown size={14} />
        </button>
      </div>
    </header>
  );
}
export function PageHeading({ eyebrow, title, desc, action }) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">
          <span />
          {eyebrow || "EDUGAP INSIGHT"}
        </div>
        <h1>{title}</h1>
        <p>{desc}</p>
      </div>
      {action && <div className="heading-action">{action}</div>}
    </div>
  );
}
export function StatCard({
  icon: Icon,
  label,
  value,
  change,
  sub,
  accent = "blue",
}) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${accent}`}>
        <Icon size={19} />
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-foot">
        <span className={change?.startsWith("-") ? "negative" : "positive"}>
          {change?.startsWith("-") ? (
            <ArrowDownRight size={13} />
          ) : (
            <ArrowUpRight size={13} />
          )}{" "}
          {change}
        </span>
        <span>{sub}</span>
      </div>
    </div>
  );
}
export function Panel({ title, subtitle, action, children, className = "" }) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-head">
        <div>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}
export function IndonesiaMap({ large = false }) {
  return (
    <div className={`map-visual ${large ? "map-large" : ""}`}>
      <div className="map-grid" />
      <svg
        viewBox="0 0 700 300"
        role="img"
        aria-label="Ilustrasi peta kepulauan Indonesia"
      >
        <defs>
          <linearGradient id="island" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#6db9ff" />
            <stop offset="1" stopColor="#0878f9" />
          </linearGradient>
        </defs>
        <g
          fill="url(#island)"
          stroke="#fff"
          strokeWidth="2.5"
          strokeLinejoin="round"
        >
          <path d="M48 95l30-12 28 7 13 16-15 12-26-5-14 13-19-9-12 8-8-13z" />
          <path d="M105 138l23-9 22 9 14 16-13 15-18-3-11 13-13-9-7-17z" />
          <path d="M183 95l27-11 21 7 18 19-14 12-20-4-10 11-17-6-11-13z" />
          <path d="M226 138l18-8 20 8 12 14-14 11-17-3-10 8-12-10z" />
          <path d="M291 98l20-12 16 4 8 14-9 13-19-3-11 8-9-12z" />
          <path d="M327 125l14-7 12 9 3 14-10 9-13-6-7-10z" />
          <path d="M365 92l22-13 18 6 16 16-8 13-19-1-10 10-17-7-8-13z" />
          <path d="M405 135l22-9 17 8 7 15-13 12-19-4-10 8-12-11z" />
          <path d="M457 101l20-11 19 8 8 13-13 10-17-3-8 8-12-9z" />
          <path d="M506 119l18-8 17 9 8 13-13 10-15-5-11 6-9-12z" />
          <path d="M552 91l25-10 17 8 10 15-15 13-20-4-9 9-13-10z" />
          <path d="M585 142l15-9 16 8 6 13-12 11-14-4-8 7-9-11z" />
          <path d="M635 110l15-6 12 9-5 13-14 3-8-8z" />
          <path d="M155 190l18-7 19 7 10 13-12 10-17-2-11 6-9-11z" />
          <path d="M247 192l20-8 18 9 6 12-15 11-15-4-8 7-12-12z" />
          <path d="M355 188l16-8 15 9 4 12-12 10-13-3-8 5-8-11z" />
          <path d="M472 190l19-8 15 8 4 13-13 9-15-4-8 5-7-11z" />
        </g>
        <g fill="#dbeeff" stroke="#fff" strokeWidth="1">
          <circle cx="116" cy="104" r="5" />
          <circle cx="250" cy="146" r="5" />
          <circle cx="391" cy="100" r="5" />
          <circle cx="522" cy="127" r="5" />
          <circle cx="591" cy="148" r="5" />
        </g>
      </svg>
      <div className="map-legend">
        <span>
          <i className="legend-blue" />
          Kesenjangan rendah
        </span>
        <span>
          <i className="legend-mid" />
          Sedang
        </span>
        <span>
          <i className="legend-high" />
          Tinggi
        </span>
      </div>
      {large && (
        <div className="map-tooltip">
          <b>Kalimantan Barat</b>
          <span>
            Rasio Siswa-Guru <strong>19,2</strong>
          </span>
          <span>
            Rata-rata Nasional <strong>16,8</strong>
            <a> Lihat detail →</a>
          </span>
        </div>
      )}
    </div>
  );
}
export function MiniBars({ data }) {
  return (
    <div className="mini-bars">
      {data.map((d, i) => (
        <div className="mini-bar-row" key={d.name}>
          <span className="rank">{i + 1}</span>
          <span className="bar-name">{d.name}</span>
          <div className="bar-track">
            <i style={{ width: `${d.value}%` }} />
          </div>
          <b>{d.value.toFixed(1)}%</b>
        </div>
      ))}
    </div>
  );
}
export function HomePage({ setPage }) {
  return (
    <>
      <div className="hero">
        <div className="hero-copy">
          <div className="hero-pill">
            <Sparkles size={13} /> DATA UNTUK MASA DEPAN
          </div>
          <h1>
            Wujudkan Pemerataan
            <br />
            Pendidikan yang <span>Lebih Tegas dan Terarah</span>
          </h1>
          <p>
            EduGap membantu melihat kesenjangan pendidikan di Indonesia,
            menentukan prioritas, dan menyimulasikan dampak kebijakan berbasis
            data.
          </p>
          <div className="hero-actions">
            <button
              className="primary-btn"
              onClick={() => setPage("Jelajahi Data")}
            >
              Jelajahi Data <ArrowRight size={16} />
            </button>
            <button
              className="secondary-btn"
              onClick={() => setPage("Dashboard")}
            >
              Lihat Dashboard
            </button>
          </div>
          <div className="hero-proof">
            <div className="proof-avatars">
              <span>SD</span>
              <span>SM</span>
              <span>PT</span>
            </div>
            <span>
              <b>Data pendidikan Indonesia</b>
              <small>Terintegrasi dari berbagai sumber</small>
            </span>
          </div>
        </div>
        <div className="hero-art">
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />
          <div className="art-sun" />
          <div className="art-building">
            <div className="building-roof" />
            <div className="building-body">
              <div className="building-window-row">
                <i />
                <i />
                <i />
              </div>
              <div className="building-door" />
              <div className="building-window-row">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="art-book">
            <BookOpen size={35} />
          </div>
          <div className="art-people">
            <span />
            <span />
            <span />
            <span />
          </div>
          <div className="floating-tag">
            <MapPin size={15} /> Indonesia
          </div>
        </div>
      </div>
      <div className="feature-grid">
        <button
          onClick={() => setPage("Peta Kesenjangan")}
          className="feature-card"
        >
          <div className="feature-icon">
            <MapPin />
          </div>
          <b>Peta Kesenjangan</b>
          <p>Visualisasi kondisi pendidikan antarwilayah.</p>
          <ArrowRight size={15} />
        </button>
        <button onClick={() => setPage("Dashboard")} className="feature-card">
          <div className="feature-icon cyan">
            <Target />
          </div>
          <b>Prioritas Wilayah</b>
          <p>Tentukan wilayah yang paling membutuhkan intervensi.</p>
          <ArrowRight size={15} />
        </button>
        <button onClick={() => setPage("Simulasi")} className="feature-card">
          <div className="feature-icon purple">
            <SlidersHorizontal />
          </div>
          <b>Simulasi Kebijakan</b>
          <p>Lihat dampak dari berbagai skenario.</p>
          <ArrowRight size={15} />
        </button>
        <button
          onClick={() => setPage("Analisis & Insight")}
          className="feature-card"
        >
          <div className="feature-icon orange">
            <ChartNoAxesCombined />
          </div>
          <b>Analisis & Insight</b>
          <p>Rekomendasi berbasis data yang dapat ditindaklanjuti.</p>
          <ArrowRight size={15} />
        </button>
      </div>
      <div className="source-strip">
        <div>
          <span className="source-icon">
            <ShieldCheck />
          </span>
          <div>
            <b>Data yang digunakan</b>
            <small>Sumber tepercaya untuk pemetaan pendidikan</small>
          </div>
        </div>
        <div className="source-logos">
          <b className="kemdik">KEMDIKDASMEN</b>
          <b className="sip">SIP</b>
          <b className="sp">
            SP<span>2</span>KP
          </b>
          <b className="bps">BPS</b>
        </div>
        <button className="text-link" onClick={() => setPage("Tentang")}>
          Lihat selengkapnya <ArrowRight size={14} />
        </button>
      </div>
      <div className="section-title">
        <div>
          <h2>Berita & Informasi</h2>
          <p>Informasi terbaru seputar pendidikan Indonesia</p>
        </div>
        <button className="text-link" onClick={() => setPage("Jelajahi Data")}>
          Jelajahi data <ArrowRight size={14} />
        </button>
      </div>
      <div className="news-grid">
        <NewsCard
          icon="01"
          title="Buletin Pendidikan September 2024"
          date="12 Sep 2024"
        />
        <NewsCard
          icon="02"
          title="Peningkatan Akses Fasilitas di Daerah 3T"
          date="20 Agu 2024"
        />
        <NewsCard
          icon="03"
          title="Data Terbaru Pendidikan Indonesia"
          date="15 Agu 2024"
        />
      </div>
    </>
  );
}
export function NewsCard({ icon, title, date }) {
  return (
    <article className="news-card">
      <div className={`news-art art-${icon}`}>
        {icon === "01" ? (
          <BookOpen />
        ) : icon === "02" ? (
          <School />
        ) : (
          <ChartNoAxesCombined />
        )}
      </div>
      <div>
        <span className="news-category">INFORMASI</span>
        <h3>{title}</h3>
        <small>{date} · 4 menit baca</small>
      </div>
      <ArrowUpRight size={16} />
    </article>
  );
}
export function DashboardPage({ setPage }) {
  const [summary, setSummary] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  const [trendData, setTrendData] = React.useState([]);
  const [loadingTrend, setLoadingTrend] = React.useState(true);
  const [trendError, setTrendError] = React.useState("");

  const [lowestAPS, setLowestAPS] = React.useState([]);

  // Mengambil ringkasan dashboard
  React.useEffect(() => {
    let cancelled = false;

    const loadSummary = async () => {
      try {
        const result = await getDashboardSummary();

        if (!result.success) {
          throw new Error("Gagal mengambil data dashboard.");
        }

        if (!cancelled) {
          setSummary(result.data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadSummary();

    return () => {
      cancelled = true;
    };
  }, []);

  // Mengambil dan mengolah tren APS
  React.useEffect(() => {
    let cancelled = false;

    const loadTrends = async () => {
      setLoadingTrend(true);
      setTrendError("");

      try {
        const result = await getDashboardTrends("APS");

        if (!result.success) {
          throw new Error("Gagal mengambil data tren APS.");
        }

        const observations = (result.data || []).filter(
          (item) => item.region_type === "province"
        );

        const grouped = {};

        observations.forEach((item) => {
          const year = Number(item.year);
          const category = item.category;
          const value = Number(item.value);

          if (!grouped[year]) {
            grouped[year] = {};
          }

          if (!grouped[year][category]) {
            grouped[year][category] = {
              total: 0,
              count: 0,
            };
          }

          if (Number.isFinite(value)) {
            grouped[year][category].total += value;
            grouped[year][category].count += 1;
          }
        });

        const averages = Object.entries(grouped)
          .map(([year, categories]) => {
            const row = { year };

            Object.entries(categories).forEach(([category, values]) => {
              row[category] =
                values.count > 0
                  ? Number((values.total / values.count).toFixed(2))
                  : null;
            });

            return row;
          })
          .sort((a, b) => Number(a.year) - Number(b.year));

        // Ambil nilai APS terbaru setiap provinsi untuk kategori 16-18
        const latestByRegion = {};

        observations
          .filter((item) => item.category === "16-18")
          .forEach((item) => {
            const current = latestByRegion[item.region_id];

            if (!current || Number(item.year) > Number(current.year)) {
              latestByRegion[item.region_id] = {
                region_id: item.region_id,
                name: item.region,
                year: Number(item.year),
                value: Number(item.value),
              };
            }
          });

        const lowest = Object.values(latestByRegion)
          .sort((a, b) => a.value - b.value)
          .slice(0, 5);

        if (!cancelled) {
          setTrendData(averages);
          setLowestAPS(lowest);
        }
      } catch (err) {
        if (!cancelled) {
          setTrendError(err.message);
          setTrendData([]);
          setLowestAPS([]);
        }
      } finally {
        if (!cancelled) {
          setLoadingTrend(false);
        }
      }
    };

    loadTrends();

    return () => {
      cancelled = true;
    };
  }, []);

  const formatNumber = (value) => {
    if (value === null || value === undefined) return "—";
    return Number(value).toLocaleString("id-ID");
  };

  const yearRange = summary
    ? `${summary.first_year}–${summary.last_year}`
    : "—";

  return (
    <>
      <PageHeading
        eyebrow="RINGKASAN NASIONAL"
        title="Dashboard Pendidikan"
        desc="Pantau kondisi pendidikan Indonesia berdasarkan data terbaru."
        action={
          <>
            <select className="select-compact">
              <option>2024</option>
              <option>2023</option>
              <option>2022</option>
            </select>
            <select className="select-compact">
              <option>Nasional</option>
              <option>Provinsi</option>
            </select>
          </>
        }
      />

      <div className="stats-grid">
        <StatCard
          icon={School}
          label="Jumlah Indikator"
          value={
            loading ? "Memuat..." : error ? "—" : formatNumber(summary?.total_indicators)
          }
          sub="Indikator pendidikan tersedia"
        />

        <StatCard
          icon={Users}
          label="Cakupan Provinsi"
          value={
            loading ? "Memuat..." : error ? "—" : formatNumber(summary?.total_provinces)
          }
          sub="Wilayah dalam database"
          accent="cyan"
        />

        <StatCard
          icon={GraduationCap}
          label="Total Observasi"
          value={
            loading ? "Memuat..." : error ? "—" : formatNumber(summary?.total_observations)
          }
          sub="Data observasi tersimpan"
          accent="orange"
        />

        <StatCard
          icon={UserCheck}
          label="Periode Data"
          value={loading ? "Memuat..." : error ? "—" : yearRange}
          sub="Rentang tahun pengamatan"
          accent="purple"
        />
      </div>

      {error && (
        <p style={{ color: "red", marginBottom: "16px" }}>
          Gagal memuat data dashboard: {error}
        </p>
      )}

      <div className="dashboard-grid">
        <Panel
          title="Peta Kesenjangan Pendidikan"
          subtitle="Sebaran indikator pendidikan di Indonesia"
          action={
            <button
              className="small-btn"
              onClick={() => setPage("Peta Kesenjangan")}
            >
              Lihat peta <ArrowRight size={13} />
            </button>
          }
        >
          <IndonesiaMap />
        </Panel>

        <Panel
          title="Distribusi Kondisi Pendidikan"
          subtitle="Proporsi peserta didik berdasarkan jenjang"
        >
          <div className="donut-wrap">
            <ResponsiveContainer width="56%" height={190}>
              <PieChart>
                <Pie
                  data={distribution}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={52}
                  outerRadius={76}
                  paddingAngle={3}
                  stroke="none"
                >
                  {distribution.map((d, i) => (
                    <Cell key={d.name} fill={colors[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={(v) => `${v}%`} />
              </PieChart>
            </ResponsiveContainer>

            <div className="donut-center">
              <b>438.987</b>
              <span>Sekolah</span>
            </div>

            <div className="legend-list">
              {distribution.map((d, i) => (
                <div key={d.name}>
                  <span>
                    <i style={{ background: colors[i] }} />
                    {d.name}
                  </span>
                  <b>{d.value}%</b>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel
          title="Tren Angka Partisipasi Sekolah"
          subtitle="Rata-rata APS provinsi berdasarkan kelompok usia"
          className="span-2"
        >
          {loadingTrend ? (
            <p>Memuat grafik tren...</p>
          ) : trendError ? (
            <p style={{ color: "red" }}>{trendError}</p>
          ) : trendData.length > 0 ? (
            <>
              <div className="chart-legend">
                <span>
                  <i className="dot-blue" />
                  Usia 13–15
                </span>
                <span>
                  <i className="dot-cyan" />
                  Usia 16–18
                </span>
                <span>
                  <i className="dot-orange" />
                  Usia 19–23
                </span>
              </div>

              <ResponsiveContainer width="100%" height={210}>
                <LineChart
                  data={trendData}
                  margin={{ top: 10, right: 12, left: -22, bottom: 0 }}
                >
                  <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#eaf0f7"
                  />

                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "#8292a8" }}
                  />

                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 11, fill: "#8292a8" }}
                    domain={[0, 100]}
                  />

                  <Tooltip
                    formatter={(value) => [`${value}%`, "APS"]}
                  />

                  <Line
                    type="monotone"
                    dataKey="13-15"
                    name="Usia 13–15"
                    stroke="#0878f9"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    connectNulls
                  />

                  <Line
                    type="monotone"
                    dataKey="16-18"
                    name="Usia 16–18"
                    stroke="#38bdf8"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    connectNulls
                  />

                  <Line
                    type="monotone"
                    dataKey="19-23"
                    name="Usia 19–23"
                    stroke="#f59e0b"
                    strokeWidth={2.5}
                    dot={{ r: 3 }}
                    connectNulls
                  />
                </LineChart>
              </ResponsiveContainer>
            </>
          ) : (
            <p>Belum ada data tren APS.</p>
          )}
        </Panel>

        <Panel
          title="5 Provinsi dengan APS Terendah"
          subtitle="Kategori usia 16–18 tahun, berdasarkan tahun terbaru"
        >
          {loadingTrend ? (
            <p>Memuat data wilayah...</p>
          ) : trendError ? (
            <p style={{ color: "red" }}>{trendError}</p>
          ) : lowestAPS.length > 0 ? (
            <MiniBars
              data={lowestAPS.map((item) => ({
                name: item.name,
                value: item.value,
              }))}
            />
          ) : (
            <p>Belum ada data APS.</p>
          )}

          <button
            className="text-link bottom-link"
            onClick={() => setPage("Analisis & Insight")}
          >
            Lihat analisis lengkap <ArrowRight size={14} />
          </button>
        </Panel>
      </div>
    </>
  );
}
export function MapPage({ setPage }) {
  const [indicators, setIndicators] = useState([]);
  const [mapData, setMapData] = useState([]);

  const [indicator, setIndicator] = useState("APS");
  const [year, setYear] = useState("2024");
  const [region, setRegion] = useState("province");
  const [category, setCategory] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Mengambil daftar indikator dari database
  React.useEffect(() => {
    getIndicators()
      .then((result) => {
        if (!result.success) {
          throw new Error("Gagal mengambil daftar indikator.");
        }

        setIndicators(result.data || []);

        // Pastikan indikator awal tersedia di database
        if (result.data?.length > 0) {
          const hasAPS = result.data.some((item) => item.code === "APS");

          if (!hasAPS) {
            setIndicator(result.data[0].code);
          }
        }
      })
      .catch((err) => setError(err.message));
  }, []);

  // Mengambil data peta berdasarkan filter yang diterapkan
  const loadMapData = async () => {
    setLoading(true);
    setError("");

    try {
      const result = await getMapData(indicator, year);

      if (!result.success) {
        throw new Error("Gagal mengambil data peta.");
      }

      setMapData(result.data || []);
      setCategory("");
    } catch (err) {
      setError(err.message);
      setMapData([]);
    } finally {
      setLoading(false);
    }
  };

  // Ambil data awal saat halaman dibuka
  React.useEffect(() => {
    loadMapData();
  }, []);

  // Pilihan kategori berdasarkan data API
  const categories = [
    ...new Set(
      mapData
        .map((item) => item.category)
        .filter(Boolean)
    ),
  ];

  // Pilih kategori pertama jika kategori belum dipilih
  React.useEffect(() => {
    if (categories.length > 0 && !categories.includes(category)) {
      setCategory(categories[0]);
    }
  }, [mapData]);

  // Filter berdasarkan tingkat wilayah dan kategori
  const filteredData = mapData.filter((item) => {
    const type = String(item.region_type || "").toLowerCase();

    const matchesRegion =
      region === "all" ||
      (region === "province" && type.includes("province")) ||
      (region === "regency" &&
        (type.includes("regency") ||
          type.includes("kabupaten") ||
          type.includes("city") ||
          type.includes("kota")));

    const matchesCategory =
      !category || item.category === category;

    return matchesRegion && matchesCategory;
  });

  // Urutkan nilai untuk mendapatkan Top 5
  const sortedData = [...filteredData].sort(
    (a, b) => Number(b.value) - Number(a.value)
  );

  const highestData = sortedData.slice(0, 5).map((item) => ({
    name: item.region,
    value: Number(item.value),
  }));

  const lowestData = [...sortedData]
    .reverse()
    .slice(0, 5)
    .map((item) => ({
      name: item.region,
      value: Number(item.value),
    }));

  const selectedIndicator = indicators.find(
    (item) => item.code === indicator
  );

  return (
    <>
      <PageHeading
        title="Peta Kesenjangan Pendidikan"
        desc="Visualisasi kondisi pendidikan antarwilayah berdasarkan indikator pilihan."
      />

      <div className="filter-panel">
        <div className="filter-field">
          <label>Indikator</label>
          <select
            value={indicator}
            onChange={(e) => setIndicator(e.target.value)}
          >
            {indicators.map((item) => (
              <option key={item.id} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>Tahun</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div className="filter-field">
          <label>Tingkat Wilayah</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          >
            <option value="province">Provinsi</option>
            <option value="regency">Kabupaten/Kota</option>
            <option value="all">Semua Wilayah</option>
          </select>
        </div>

        <button
          className="primary-btn"
          onClick={loadMapData}
          disabled={loading}
        >
          {loading ? "Memuat..." : "Terapkan Filter"}
        </button>
      </div>

      {error && (
        <p style={{ color: "red", marginBottom: "16px" }}>
          Gagal memuat data: {error}
        </p>
      )}

      <Panel
        title={`${selectedIndicator?.name || indicator} · ${year}`}
        subtitle={`Tingkat wilayah: ${
          region === "province"
            ? "Provinsi"
            : region === "regency"
              ? "Kabupaten/Kota"
              : "Semua Wilayah"
        }`}
      >
        <IndonesiaMap large />

        <div className="map-footnote">
          <span>
            <i className="status-dot" />
            {loading
              ? "Memuat data..."
              : `${filteredData.length} data wilayah tersedia`}
          </span>

          <button
            className="text-link"
            onClick={() => setPage("Jelajahi Data")}
          >
            Lihat data wilayah <ArrowRight size={14} />
          </button>
        </div>
      </Panel>

      {categories.length > 0 && (
        <div className="filter-panel top-gap">
          <div className="filter-field">
            <label>Kategori Data</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <div className="two-col top-gap">
        <Panel
          title="Top 5 Wilayah dengan Nilai Tertinggi"
          subtitle={`${selectedIndicator?.name || indicator} · ${category || "Semua kategori"}`}
        >
          {loading ? (
            <p>Memuat data...</p>
          ) : highestData.length > 0 ? (
            <MiniBars data={highestData} />
          ) : (
            <p>Belum ada data untuk filter yang dipilih.</p>
          )}
        </Panel>

        <Panel
          title="Top 5 Wilayah dengan Nilai Terendah"
          subtitle={`${selectedIndicator?.name || indicator} · ${category || "Semua kategori"}`}
        >
          {loading ? (
            <p>Memuat data...</p>
          ) : lowestData.length > 0 ? (
            <MiniBars data={lowestData} />
          ) : (
            <p>Belum ada data untuk filter yang dipilih.</p>
          )}
        </Panel>
      </div>
    </>
  );
}
export function ExplorePage() {
  const [query, setQuery] = useState("");
  const [indicator, setIndicator] = useState("APS");
  const [year, setYear] = useState("2024");
  const [category, setCategory] = useState("all");
  const [regionLevel, setRegionLevel] = useState("province");
  const [show, setShow] = useState(10);

  const [indicators, setIndicators] = useState([]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Ambil daftar indikator
  React.useEffect(() => {
    getIndicators()
      .then((result) => {
        if (!result.success) {
          throw new Error("Gagal mengambil daftar indikator.");
        }

        setIndicators(result.data || []);
      })
      .catch((err) => setError(err.message));
  }, []);

  // Ambil data berdasarkan indikator dan tahun
  React.useEffect(() => {
    let cancelled = false;

    const loadData = async () => {
      setLoading(true);
      setError("");

      try {
        const result = await getMapData(indicator, year);

        if (!result.success) {
          throw new Error("Gagal mengambil data wilayah.");
        }

        if (!cancelled) {
          setData(result.data || []);
          setShow(10);
          setCategory("all");
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
          setData([]);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadData();

    return () => {
      cancelled = true;
    };
  }, [indicator, year]);

  // Daftar kategori yang tersedia dari database
  const categories = useMemo(
    () => [...new Set(data.map((item) => item.category).filter(Boolean))],
    [data]
  );

  // Filter data
  const filtered = useMemo(() => {
    return data.filter((item) => {
      const name = (item.region || "").toLowerCase();
      const type = (item.region_type || "").toLowerCase();

      const matchesQuery = name.includes(query.toLowerCase());

      const matchesLevel =
        regionLevel === "all" ||
        (regionLevel === "province" && type.includes("province")) ||
        (regionLevel === "regency" &&
          (type.includes("regency") ||
            type.includes("kabupaten") ||
            type.includes("city") ||
            type.includes("kota")));

      const matchesCategory =
        category === "all" || item.category === category;

      return matchesQuery && matchesLevel && matchesCategory;
    });
  }, [data, query, regionLevel, category]);

  const selectedIndicator = indicators.find(
    (item) => item.code === indicator
  );

  // Ekspor data yang sedang ditampilkan ke CSV
  const exportCsv = () => {
    const headers = [
      "Nama Wilayah",
      "Kode Wilayah",
      "Jenis Wilayah",
      "Indikator",
      "Kategori",
      "Tahun",
      "Nilai",
      "Satuan",
    ];

    const rows = filtered.map((item) => [
      item.region,
      item.region_code,
      item.region_type,
      item.indicator_name,
      item.category,
      item.year,
      item.value,
      item.unit,
    ]);

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");

    a.href = url;
    a.download = `edugap-${indicator}-${year}.csv`;
    a.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHeading
        title="Jelajahi Data"
        desc="Cari, filter, dan eksplorasi data pendidikan dari berbagai sumber pemerintah."
        action={
          <button
            className="secondary-btn"
            onClick={exportCsv}
            disabled={filtered.length === 0}
          >
            <Download size={15} /> Unduh CSV
          </button>
        }
      />

      <div className="explore-controls">
        <label className="control-search">
          <Search size={16} />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Cari nama wilayah..."
          />
        </label>

        <div className="filter-field">
          <label>Indikator</label>
          <select
            value={indicator}
            onChange={(e) => setIndicator(e.target.value)}
          >
            {indicators.map((item) => (
              <option key={item.id} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>Kategori</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Semua kategori</option>
            {categories.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>Tahun</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>

        <div className="filter-field">
          <label>Tingkat Wilayah</label>
          <select
            value={regionLevel}
            onChange={(e) => setRegionLevel(e.target.value)}
          >
            <option value="province">Provinsi</option>
            <option value="regency">Kabupaten/Kota</option>
            <option value="all">Semua wilayah</option>
          </select>
        </div>

        <button
          className="reset-btn"
          onClick={() => {
            setQuery("");
            setIndicator("APS");
            setYear("2024");
            setCategory("all");
            setRegionLevel("province");
            setShow(10);
          }}
        >
          <RotateCcw size={14} /> Reset
        </button>
      </div>

      <div className="table-meta">
        <span>
          <b>{filtered.length}</b> data ditemukan
        </span>

        <span>
          <Filter size={14} /> Data tahun {year} ·{" "}
          {selectedIndicator?.name || indicator}
        </span>
      </div>

      {error && (
        <div className="empty-state">
          Gagal memuat data: {error}
        </div>
      )}

      <div className="table-wrap">
        <table>
          <thead>
            <tr>
              <th>No.</th>
              <th>Wilayah</th>
              <th>Kategori</th>
              <th>Nilai</th>
              <th>Satuan</th>
              <th>Tahun</th>
            </tr>
          </thead>

          <tbody>
            {loading ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Memuat data dari database...
                </td>
              </tr>
            ) : (
              filtered.slice(0, show).map((item, i) => (
                <tr key={`${item.region_id}-${item.category}-${i}`}>
                  <td>{String(i + 1).padStart(2, "0")}</td>

                  <td>
                    <div className="province-cell">
                      <span className="province-dot">
                        {(item.region || "?").slice(0, 1)}
                      </span>
                      <b>{item.region}</b>
                    </div>
                  </td>

                  <td>{item.category || "—"}</td>

                  <td>
                    <b>
                      {Number(item.value).toLocaleString("id-ID", {
                        maximumFractionDigits: 2,
                      })}
                    </b>
                  </td>

                  <td>{item.unit || "—"}</td>

                  <td>{item.year}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>

        {!loading && !error && filtered.length === 0 && (
          <div className="empty-state">
            Tidak ada data yang cocok dengan filter pencarianmu.
          </div>
        )}
      </div>

      <div className="table-footer">
        <span>
          Menampilkan {Math.min(show, filtered.length)} dari{" "}
          {filtered.length} data
        </span>

        <div>
          <button
            className="pagination-btn"
            disabled={show <= 10}
            onClick={() => setShow((prev) => Math.max(10, prev - 10))}
          >
            ‹
          </button>

          <button className="pagination-btn current">
            {Math.ceil(show / 10)}
          </button>

          <button
            className="pagination-btn"
            disabled={show >= filtered.length}
            onClick={() => setShow((prev) => prev + 10)}
          >
            ›
          </button>
        </div>
      </div>
    </>
  );
}
export function ComparePage() {
  const [regions, setRegions] = useState([]);
  const [indicators, setIndicators] = useState([]);

  const [selected, setSelected] = useState([]);
  const [indicator, setIndicator] = useState("APS");
  const [year, setYear] = useState("2024");
  const [category, setCategory] = useState("");
  const [tab, setTab] = useState("Grafik");

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Ambil daftar wilayah dan indikator
  React.useEffect(() => {
    Promise.all([
      getRegions("province"),
      getIndicators(),
    ])
      .then(([regionResult, indicatorResult]) => {
        if (!regionResult.success || !indicatorResult.success) {
          throw new Error("Gagal mengambil data wilayah atau indikator.");
        }

        const provinceList = regionResult.data || [];

        setRegions(provinceList);
        setIndicators(indicatorResult.data || []);

        // Pilih dua wilayah awal jika tersedia
        setSelected(
          provinceList.slice(0, 2).map((item) => item.id)
        );
      })
      .catch((err) => setError(err.message));
  }, []);

  // Ambil hasil perbandingan
  React.useEffect(() => {
    if (selected.length < 2) {
      setData([]);
      return;
    }

    let cancelled = false;

    const loadComparison = async () => {
      setLoading(true);
      setError("");

      try {
        const result = await compareRegions(
          indicator,
          year,
          selected
        );

        if (!result.success) {
          throw new Error("Gagal mengambil data perbandingan.");
        }

        if (!cancelled) {
          const comparison = (result.data || []).map((item) => ({
            ...item,
            region_id: Number(item.region_id),
            year: Number(item.year),
            value: Number(item.value),
          }));

          setData(comparison);
          setCategory("");
        }
      } catch (err) {
        if (!cancelled) {
          setData([]);
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadComparison();

    return () => {
      cancelled = true;
    };
  }, [selected, indicator, year]);

  // Kategori yang tersedia
  const categories = [
    ...new Set(
      data.map((item) => item.category).filter(Boolean)
    ),
  ];

  const activeCategory =
    category && categories.includes(category)
      ? category
      : categories[0] || "";

  // Ubah ID wilayah menjadi nama wilayah
  const comparisonData = data
    .filter((item) => {
      return !activeCategory || item.category === activeCategory;
    })
    .map((item) => {
      const region = regions.find(
        (r) => Number(r.id) === Number(item.region_id)
      );

      return {
        name:
          item.region ||
          item.region_name ||
          region?.name ||
          `Wilayah ${item.region_id}`,
        value: Number(item.value),
        category: item.category,
        unit: item.unit,
      };
    });

  const selectedIndicator = indicators.find(
    (item) => item.code === indicator
  );

  const formatValue = (value) =>
    Number(value).toLocaleString("id-ID", {
      maximumFractionDigits: 2,
    });

  const removeRegion = (id) => {
    setSelected((prev) => prev.filter((item) => item !== id));
  };

  return (
    <>
      <PageHeading
        title="Perbandingan Wilayah"
        desc="Bandingkan kondisi pendidikan beberapa wilayah berdasarkan indikator yang dipilih."
      />

      <div className="filter-panel compare-filters">
        <div className="filter-field wide">
          <label>Wilayah pembanding</label>

          <div className="chips">
            {selected.map((id) => {
              const region = regions.find(
                (item) => Number(item.id) === Number(id)
              );

              if (!region) return null;

              return (
                <button
                  className="chip"
                  key={id}
                  onClick={() => removeRegion(id)}
                >
                  {region.name} <X size={12} />
                </button>
              );
            })}

            <select
              aria-label="Tambah wilayah"
              value=""
              onChange={(e) => {
                const id = Number(e.target.value);

                if (
                  id &&
                  !selected.includes(id)
                ) {
                  setSelected((prev) => [...prev, id]);
                }
              }}
            >
              <option value="">+ Tambah wilayah</option>

              {regions
                .filter(
                  (item) => !selected.includes(Number(item.id))
                )
                .map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
            </select>
          </div>
        </div>

        <div className="filter-field">
          <label>Indikator</label>
          <select
            value={indicator}
            onChange={(e) => setIndicator(e.target.value)}
          >
            {indicators.map((item) => (
              <option key={item.id} value={item.code}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filter-field">
          <label>Tahun</label>
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
          >
            <option value="2025">2025</option>
            <option value="2024">2024</option>
            <option value="2023">2023</option>
            <option value="2022">2022</option>
            <option value="2021">2021</option>
          </select>
        </div>
      </div>

      {categories.length > 0 && (
        <div className="filter-panel">
          <div className="filter-field">
            <label>Kategori</label>
            <select
              value={activeCategory}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      )}

      <Panel
        title={`Perbandingan ${selectedIndicator?.name || indicator}`}
        subtitle={`Tahun ${year} · Kategori ${activeCategory || "—"}`}
      >
        <div className="tab-row">
          {["Ringkasan", "Grafik", "Tabel", "Peta Mini"].map((t) => (
            <button
              key={t}
              className={tab === t ? "selected" : ""}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>

        {loading ? (
          <p>Memuat data perbandingan...</p>
        ) : error ? (
          <p style={{ color: "red" }}>{error}</p>
        ) : selected.length < 2 ? (
          <p>Pilih minimal dua wilayah untuk melakukan perbandingan.</p>
        ) : comparisonData.length === 0 ? (
          <p>
            Belum tersedia data untuk kombinasi wilayah, indikator,
            tahun, dan kategori yang dipilih.
          </p>
        ) : tab === "Grafik" ? (
          <ResponsiveContainer width="100%" height={280}>
            <BarChart
              data={comparisonData}
              margin={{ top: 15, right: 10, left: 0, bottom: 5 }}
            >
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="#eaf0f7"
              />
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#6b7c93" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 11, fill: "#8292a8" }}
              />
              <Tooltip />
              <Bar
                dataKey="value"
                name={selectedIndicator?.name || indicator}
                fill="#2f91fa"
                radius={[7, 7, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        ) : tab === "Tabel" ? (
          <div className="table-wrap compact-table">
            <table>
              <thead>
                <tr>
                  <th>Wilayah</th>
                  <th>Kategori</th>
                  <th>Nilai</th>
                  <th>Satuan</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((item, index) => (
                  <tr key={`${item.name}-${index}`}>
                    <td>{item.name}</td>
                    <td>{item.category || "—"}</td>
                    <td>{formatValue(item.value)}</td>
                    <td>{item.unit || selectedIndicator?.unit || "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : tab === "Ringkasan" ? (
          <div className="summary-cards">
            {comparisonData.map((item, index) => (
              <div className="summary-card" key={`${item.name}-${index}`}>
                <span>{item.name}</span>
                <b>{formatValue(item.value)}</b>
                <small>
                  {item.category || selectedIndicator?.unit || "Nilai observasi"}
                </small>
              </div>
            ))}
          </div>
        ) : (
          <>
            <IndonesiaMap />
            <p className="map-footnote">
              Peta mini merupakan ilustrasi. Nilai perbandingan aktual
              ditampilkan pada grafik dan tabel.
            </p>
          </>
        )}
      </Panel>
    </>
  );
}
export function SimulationPage() {
  const [province, setProvince] = useState("Nusa Tenggara Timur");
  const [intervention, setIntervention] = useState("Penambahan Guru");
  const [teachers, setTeachers] = useState(500);
  const [budget, setBudget] = useState(5);
  const [ran, setRan] = useState(false);
  const selected = provinces.find((p) => p.name === province) || provinces[7];
  const improvement = Math.min(12, teachers / 125 + budget * 0.25);
  return (
    <>
      <PageHeading
        title="Simulasi Kebijakan"
        desc="Coba berbagai skenario untuk melihat potensi dampak intervensi terhadap indikator pendidikan."
      />
      <div className="simulation-layout">
        <Panel
          title="Pengaturan Simulasi"
          subtitle="Atur skenario kebijakan yang ingin diuji."
          className="simulation-config"
        >
          <div className="form-field">
            <label>Pilih Wilayah</label>
            <select
              value={province}
              onChange={(e) => {
                setProvince(e.target.value);
                setRan(false);
              }}
            >
              {provinces.map((p) => (
                <option key={p.name}>{p.name}</option>
              ))}
            </select>
          </div>
          <div className="form-field">
            <label>Jenis Intervensi</label>
            <select
              value={intervention}
              onChange={(e) => {
                setIntervention(e.target.value);
                setRan(false);
              }}
            >
              <option>Penambahan Guru</option>
              <option>Renovasi Fasilitas</option>
              <option>Bantuan Pendidikan</option>
              <option>Akses Internet Sekolah</option>
            </select>
          </div>
          <div className="form-field">
            <div className="range-label">
              <label>Jumlah Guru Tambahan</label>
              <b>{teachers.toLocaleString("id-ID")} guru</b>
            </div>
            <input
              type="range"
              min="0"
              max="1500"
              step="100"
              value={teachers}
              onChange={(e) => {
                setTeachers(+e.target.value);
                setRan(false);
              }}
            />
          </div>
          <div className="form-field">
            <div className="range-label">
              <label>Anggaran (estimasi)</label>
              <b>Rp {budget} miliar</b>
            </div>
            <input
              type="range"
              min="1"
              max="20"
              value={budget}
              onChange={(e) => {
                setBudget(+e.target.value);
                setRan(false);
              }}
            />
          </div>
          <div className="budget-hint">
            <InfoIcon /> Estimasi awal untuk eksplorasi skenario, bukan proyeksi
            resmi.
          </div>
          <button className="primary-btn full-btn" onClick={() => setRan(true)}>
            <Play size={15} fill="currentColor" /> Jalankan Simulasi
          </button>
        </Panel>
        <Panel
          title="Hasil Simulasi"
          subtitle={
            ran
              ? "Hasil estimasi berdasarkan parameter pilihan."
              : "Jalankan simulasi untuk melihat estimasi perubahan."
          }
          className="simulation-results"
        >
          <div className="result-head">
            <span className="result-tag">{province}</span>
            <span className="result-tag blue-tag">{intervention}</span>
          </div>
          <div className="result-table">
            <div className="result-row header">
              <span>Indikator</span>
              <span>Sebelum</span>
              <span>Sesudah</span>
              <span>Perubahan</span>
            </div>
            <div className="result-row">
              <span>Rasio Siswa-Guru</span>
              <b>{selected.ratio < 20 ? "22,5" : "18,4"}</b>
              <b>{ran ? "18,1" : "18,1"}</b>
              <strong>↓ {ran ? improvement.toFixed(1) : "4,4"}</strong>
            </div>
            <div className="result-row">
              <span>Angka Partisipasi Sekolah</span>
              <b>{selected.aps.toFixed(1)}%</b>
              <b>
                {(selected.aps + (ran ? improvement * 0.45 : 3.6)).toFixed(1)}%
              </b>
              <strong>
                ↑ {ran ? (improvement * 0.45).toFixed(1) : "3,6"}%
              </strong>
            </div>
            <div className="result-row">
              <span>Jumlah Siswa</span>
              <b>{selected.students}</b>
              <b>
                {(
                  parseInt(selected.students.replaceAll(".", "")) +
                  teachers * 2
                ).toLocaleString("id-ID")}
              </b>
              <strong>↑ {(teachers * 2).toLocaleString("id-ID")}</strong>
            </div>
            <div className="result-row">
              <span>Jumlah Guru</span>
              <b>{selected.teachers}</b>
              <b>
                {(
                  parseInt(selected.teachers.replaceAll(".", "")) +
                  (ran ? teachers : 500)
                ).toLocaleString("id-ID")}
              </b>
              <strong>↑ {ran ? teachers : 500}</strong>
            </div>
            <div className="result-row">
              <span>Skor Kesenjangan</span>
              <b>0,72</b>
              <b>{ran ? "0,51" : "0,58"}</b>
              <strong>↓ {ran ? "0,21" : "0,14"}</strong>
            </div>
          </div>
          <div className="insight-callout">
            <div>
              <Sparkles size={18} />
            </div>
            <p>
              <b>{ran ? "Simulasi berhasil dijalankan." : "Insight awal"}</b>
              <br />
              {ran
                ? `Skenario ${intervention.toLowerCase()} di ${province} berpotensi meningkatkan indikator akses pendidikan. Evaluasi dampak aktual tetap memerlukan data lapangan.`
                : "Berdasarkan skenario awal, intervensi yang terarah dapat membantu memperkecil kesenjangan pendidikan. Sesuaikan parameter untuk mengeksplorasi hasil."}
            </p>
          </div>
          <div className="result-chart">
            <div className="result-chart-head">
              <b>Proyeksi indikator</b>
              <span>Estimasi</span>
            </div>
            <ResponsiveContainer width="100%" height={130}>
              <AreaChart
                data={[
                  { n: "Saat ini", v: selected.aps },
                  { n: "3 bulan", v: selected.aps + improvement * 0.15 },
                  { n: "6 bulan", v: selected.aps + improvement * 0.3 },
                  { n: "12 bulan", v: selected.aps + improvement * 0.45 },
                ]}
              >
                <defs>
                  <linearGradient id="fillBlue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1683ff" stopOpacity={0.25} />
                    <stop offset="100%" stopColor="#1683ff" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis
                  dataKey="n"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 10, fill: "#8292a8" }}
                />
                <YAxis hide domain={["dataMin - 3", "dataMax + 3"]} />
                <Tooltip />
                <Area
                  dataKey="v"
                  stroke="#0878f9"
                  fill="url(#fillBlue)"
                  strokeWidth={2}
                  type="monotone"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Panel>
      </div>
    </>
  );
}
export function DetailPage() {
  const [regions, setRegions] = useState([]);
  const [regionId, setRegionId] = useState("");
  const [observations, setObservations] = useState([]);
  const [category, setCategory] = useState("");

  const [loadingRegions, setLoadingRegions] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState("");

  // Mengambil daftar provinsi
  React.useEffect(() => {
    getRegions("province")
      .then((result) => {
        if (!result.success) {
          throw new Error("Gagal mengambil daftar wilayah.");
        }

        const provinceList = result.data || [];
        setRegions(provinceList);

        const defaultRegion =
          provinceList.find(
            (item) => item.name === "Nusa Tenggara Timur"
          ) || provinceList[0];

        if (defaultRegion) {
          setRegionId(String(defaultRegion.id));
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoadingRegions(false));
  }, []);

  // Mengambil observasi APS berdasarkan provinsi terpilih
  React.useEffect(() => {
    if (!regionId) return;

    let cancelled = false;

    const loadObservations = async () => {
      setLoadingData(true);
      setError("");

      try {
        const result = await getRegionObservations(regionId, "APS");

        if (!result.success) {
          throw new Error("Gagal mengambil data observasi.");
        }

        if (!cancelled) {
          const observations = (result.data || []).map((item) => ({
            ...item,
            year: Number(item.year),
            value: Number(item.value),
          }));

          setObservations(observations);
          setCategory("");
        }
      } catch (err) {
        if (!cancelled) {
          setObservations([]);
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoadingData(false);
        }
      }
    };

    loadObservations();

    return () => {
      cancelled = true;
    };
  }, [regionId]);

  const selectedRegion = regions.find(
    (item) => String(item.id) === String(regionId)
  );

  const categories = [
    ...new Set(
      observations
        .map((item) => item.category)
        .filter(Boolean)
    ),
  ];

  const activeCategory =
    category && categories.includes(category)
      ? category
      : categories[0] || "";

  const selectedObservations = observations
    .filter((item) => item.category === activeCategory)
    .sort((a, b) => Number(a.year) - Number(b.year));

  const trendData = selectedObservations.map((item) => ({
    year: item.year,
    value: Number(item.value),
  }));

  const latestObservation =
    selectedObservations[selectedObservations.length - 1];

  const years = observations
    .map((item) => Number(item.year))
    .filter(Number.isFinite);

  const firstYear = years.length ? Math.min(...years) : "—";
  const lastYear = years.length ? Math.max(...years) : "—";

  const formatValue = (value) =>
    value === null || value === undefined
      ? "—"
      : Number(value).toLocaleString("id-ID", {
          maximumFractionDigits: 2,
        });

  return (
    <>
      <PageHeading
        title="Detail Wilayah"
        desc="Pahami profil dan indikator pendidikan untuk wilayah yang kamu pilih."
      />

      <div className="detail-select">
        <MapPin size={17} />
        <div>
          <small>WILAYAH TERPILIH</small>
          <select
            value={regionId}
            onChange={(e) => setRegionId(e.target.value)}
            disabled={loadingRegions}
          >
            {loadingRegions && <option>Memuat wilayah...</option>}

            {regions.map((item) => (
              <option key={item.id} value={item.id}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <span className="region-badge">Provinsi</span>
      </div>

      <div className="detail-hero">
        <div>
          <div className="eyebrow">
            <span /> PROFIL WILAYAH
          </div>

          <h2>{selectedRegion?.name || "Memuat wilayah..."}</h2>

          <p>
            Data observasi Angka Partisipasi Sekolah untuk wilayah{" "}
            {selectedRegion?.name || "terpilih"}.
          </p>

          <div className="detail-meta">
            <span>
              <MapPin size={14} /> Indonesia
            </span>

            <span>
              <Database size={14} /> Tahun data {firstYear}–{lastYear}
            </span>
          </div>
        </div>

        <div className="detail-map">
          <IndonesiaMap />
        </div>
      </div>

      {error && (
        <p style={{ color: "red", marginBottom: "16px" }}>
          Gagal memuat data: {error}
        </p>
      )}

      <div className="stats-grid">
        <StatCard
          icon={Database}
          label="Total Observasi"
          value={loadingData ? "..." : formatValue(observations.length)}
          sub="Data APS tersimpan"
        />

        <StatCard
          icon={ChartNoAxesCombined}
          label="Kategori APS"
          value={loadingData ? "..." : formatValue(categories.length)}
          sub="Kelompok umur tersedia"
          accent="cyan"
        />

        <StatCard
          icon={School}
          label="Tahun Awal"
          value={loadingData ? "..." : String(firstYear)}
          sub="Awal periode data"
          accent="orange"
        />

        <StatCard
          icon={GraduationCap}
          label="Tahun Terbaru"
          value={loadingData ? "..." : String(lastYear)}
          sub="Akhir periode data"
          accent="purple"
        />
      </div>

      <div className="two-col top-gap">
        <Panel
          title="Tren Angka Partisipasi Sekolah"
          subtitle={`Perkembangan APS berdasarkan kategori ${activeCategory || "—"}`}
        >
          <div className="filter-field" style={{ marginBottom: "16px" }}>
            <label>Kategori APS</label>
            <select
              value={activeCategory}
              onChange={(e) => setCategory(e.target.value)}
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>

          {loadingData ? (
            <p>Memuat data...</p>
          ) : trendData.length > 0 ? (
            <ResponsiveContainer width="100%" height={210}>
              <LineChart data={trendData}>
                <CartesianGrid
                  strokeDasharray="3 3"
                  vertical={false}
                  stroke="#eaf0f7"
                />
                <XAxis
                  dataKey="year"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                />
                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 11 }}
                />
                <Tooltip />
                <Line
                  dataKey="value"
                  name="APS"
                  stroke="#0878f9"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          ) : (
            <p>Belum tersedia data APS untuk wilayah ini.</p>
          )}
        </Panel>

        <Panel
          title="Observasi Terbaru"
          subtitle={`Nilai APS terbaru untuk kategori ${activeCategory || "—"}`}
        >
          {loadingData ? (
            <p>Memuat data...</p>
          ) : latestObservation ? (
            <>
              <div className="facility-score">
                <div className="score-ring">
                  <span>
                    {formatValue(latestObservation.value)}
                    <small>%</small>
                  </span>
                </div>

                <div>
                  <b>Angka Partisipasi Sekolah</b>
                  <p>
                    Kategori umur {latestObservation.category}
                  </p>
                  <span>
                    Tahun {latestObservation.year}
                  </span>
                </div>
              </div>

              <div className="progress-item">
                <span>Nilai observasi</span>
                <b>{formatValue(latestObservation.value)}%</b>
                <div className="progress-track">
                  <i
                    style={{
                      width: `${Math.min(
                        100,
                        Math.max(0, Number(latestObservation.value))
                      )}%`,
                    }}
                  />
                </div>
              </div>
            </>
          ) : (
            <p>Belum tersedia observasi untuk wilayah ini.</p>
          )}
        </Panel>
      </div>
    </>
  );
}
export function InsightsPage({ setPage }) {
  const [data, setData] = React.useState([]);
  const [indicators, setIndicators] = React.useState([]);
  const [indicator, setIndicator] = React.useState("APS");
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState("");

  // Mengambil daftar indikator
  React.useEffect(() => {
    let cancelled = false;

    const loadIndicators = async () => {
      try {
        const result = await getIndicators();

        if (!result.success) {
          throw new Error("Gagal mengambil daftar indikator.");
        }

        if (!cancelled) {
          setIndicators(result.data || []);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err.message);
        }
      }
    };

    loadIndicators();

    return () => {
      cancelled = true;
    };
  }, []);

  // Mengambil data insight berdasarkan indikator
  React.useEffect(() => {
    let cancelled = false;

    const loadInsights = async () => {
      setLoading(true);
      setError("");

      try {
        const result = await getInsights(indicator);

        if (!result.success) {
          throw new Error("Gagal mengambil data insight.");
        }

        if (!cancelled) {
          const insights = (result.data || []).map((item) => ({
            ...item,
            first_value: Number(item.first_value),
            latest_value: Number(item.latest_value),
            value_change: Number(item.value_change),
            percentage_change: Number(item.percentage_change),
          }));

          setData(insights);
        }
      } catch (err) {
        if (!cancelled) {
          setData([]);
          setError(err.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    loadInsights();

    return () => {
      cancelled = true;
    };
  }, [indicator]);

  // Format angka
  const formatNumber = (value) =>
    Number(value).toLocaleString("id-ID", {
      maximumFractionDigits: 2,
    });

  // Mengurutkan wilayah berdasarkan perubahan indikator
  const sortedData = [...data].sort(
    (a, b) => a.value_change - b.value_change
  );

  const decliningRegions = sortedData
    .filter((item) => item.value_change < 0)
    .slice(0, 5);

  const increasingRegions = [...data]
    .filter((item) => item.value_change > 0)
    .sort((a, b) => b.value_change - a.value_change)
    .slice(0, 5);

  const largestDecline = decliningRegions[0];

  // Ekspor data insight ke CSV
  const exportCSV = () => {
    if (data.length === 0) return;

    const headers = [
      "Wilayah",
      "Kategori",
      "Tahun Awal",
      "Nilai Awal",
      "Tahun Terbaru",
      "Nilai Terbaru",
      "Perubahan",
      "Persentase Perubahan",
    ];

    const rows = data.map((item) => [
      item.region,
      item.category,
      item.first_year,
      item.first_value,
      item.latest_year,
      item.latest_value,
      item.value_change,
      item.percentage_change,
    ]);

    const csvContent = [
      headers,
      ...rows,
    ]
      .map((row) =>
        row
          .map((value) => `"${String(value ?? "").replace(/"/g, '""')}"`)
          .join(",")
      )
      .join("\n");

    const blob = new Blob(["\uFEFF" + csvContent], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");

    link.href = url;
    link.download = `insight_${indicator}.csv`;
    link.click();

    URL.revokeObjectURL(url);
  };

  return (
    <>
      <PageHeading
        title="Analisis & Insight"
        desc="Analisis perubahan indikator pendidikan berdasarkan data setiap wilayah."
        action={
          <button
            className="secondary-btn"
            onClick={exportCSV}
            disabled={loading || data.length === 0}
          >
            <Download size={15} /> Ekspor laporan
          </button>
        }
      />

      {/* Filter indikator */}
      <div className="top-gap" style={{ marginBottom: 20 }}>
        <label style={{ marginRight: 10 }}>Pilih indikator:</label>

        <select
          value={indicator}
          onChange={(e) => setIndicator(e.target.value)}
          disabled={loading && indicators.length === 0}
        >
          {indicators.map((item) => (
            <option key={item.code} value={item.code}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      {loading ? (
        <div className="insight-banner">
          <p>Memuat data analisis...</p>
        </div>
      ) : error ? (
        <div className="insight-banner">
          <p>Gagal memuat data: {error}</p>
        </div>
      ) : data.length === 0 ? (
        <div className="insight-banner">
          <p>Belum ada data insight untuk indikator ini.</p>
        </div>
      ) : (
        <>
          {/* Insight utama */}
          <div className="insight-banner">
            <div className="insight-banner-icon">
              <Sparkles size={22} />
            </div>

            <div>
              <span>
                INSIGHT UTAMA · {indicator}
              </span>

              <h2>
                {largestDecline
                  ? `${largestDecline.region} mengalami penurunan indikator terbesar.`
                  : "Belum ditemukan penurunan indikator pada data."}
              </h2>

              <p>
                {largestDecline
                  ? `Kategori ${largestDecline.category} mengalami perubahan sebesar ${formatNumber(largestDecline.value_change)} ${largestDecline.unit || ""} (${formatNumber(largestDecline.percentage_change)}%) dari ${largestDecline.first_year} hingga ${largestDecline.latest_year}.`
                  : `Data mencakup ${data.length} observasi perubahan indikator berdasarkan wilayah dan kategori.`}
              </p>
            </div>

            <button
              className="primary-btn"
              onClick={() => setPage("Simulasi")}
            >
              Coba simulasi <ArrowRight size={15} />
            </button>
          </div>

          {/* Analisis perubahan wilayah */}
          <div className="two-col top-gap">
            <Panel
              title="Wilayah dengan Penurunan Terbesar"
              subtitle="Lima perubahan nilai paling negatif"
            >
              <div className="priority-table">
                {decliningRegions.length > 0 ? (
                  decliningRegions.map((item, index) => (
                    <div
                      className="priority-row"
                      key={`${item.region_id}-${item.category}`}
                    >
                      <span className="priority-num">{index + 1}</span>

                      <b>{item.region}</b>

                      <span>
                        {formatNumber(item.value_change)}
                      </span>

                      <span className="severity high">
                        {formatNumber(item.percentage_change)}%
                      </span>

                      <button
                        className="table-action"
                        onClick={() => setPage("Detail Wilayah")}
                      >
                        <ArrowUpRight size={14} />
                      </button>
                    </div>
                  ))
                ) : (
                  <p>Tidak ditemukan penurunan indikator.</p>
                )}
              </div>
            </Panel>

            <Panel
              title="Wilayah dengan Kenaikan Terbesar"
              subtitle="Lima perubahan nilai paling positif"
            >
              <div className="factor-list">
                {increasingRegions.length > 0 ? (
                  increasingRegions.map((item, index) => (
                    <div className="factor" key={`${item.region_id}-${item.category}`}>
                      <div>
                        <span>
                          {index + 1}. {item.region} ({item.category})
                        </span>

                        <b>+{formatNumber(item.value_change)}</b>
                      </div>

                      <div className="bar-track">
                        <i
                          style={{
                            width: `${Math.min(
                              Math.abs(item.percentage_change),
                              100
                            )}%`,
                          }}
                        />
                      </div>
                    </div>
                  ))
                ) : (
                  <p>Tidak ditemukan kenaikan indikator.</p>
                )}
              </div>
            </Panel>
          </div>

          {/* Rekomendasi umum */}
          <div className="recommendation-grid">
            <div className="recommendation-card">
              <div className="recommendation-icon">
                <Users />
              </div>

              <span>ARAH TINDAK LANJUT 01</span>

              <h3>Evaluasi pemerataan tenaga pendidik</h3>

              <p>
                Bandingkan data tenaga pendidik dan jumlah siswa
                untuk mengidentifikasi wilayah yang membutuhkan
                pemerataan guru.
              </p>

              <button onClick={() => setPage("Jelajahi Data")}>
                Jelajahi data <ArrowRight size={14} />
              </button>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-icon cyan">
                <School />
              </div>

              <span>ARAH TINDAK LANJUT 02</span>

              <h3>Periksa kondisi fasilitas pendidikan</h3>

              <p>
                Gunakan data kondisi sekolah untuk melihat
                kebutuhan fasilitas dasar dan sarana pembelajaran
                di setiap wilayah.
              </p>

              <button onClick={() => setPage("Jelajahi Data")}>
                Jelajahi data <ArrowRight size={14} />
              </button>
            </div>

            <div className="recommendation-card">
              <div className="recommendation-icon purple">
                <Target />
              </div>

              <span>ARAH TINDAK LANJUT 03</span>

              <h3>Prioritaskan akses pendidikan</h3>

              <p>
                Perhatikan kategori usia dengan perubahan indikator
                terbesar sebagai bahan evaluasi program pemerataan
                akses pendidikan.
              </p>

              <button onClick={() => setPage("Peta Kesenjangan")}>
                Lihat peta <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}
export function AboutPage() {
  const [tab, setTab] = useState("Latar Belakang");
  const content = {
    "Latar Belakang": [
      "Kesenjangan pendidikan masih menjadi tantangan penting di Indonesia. Perbedaan akses fasilitas, tenaga pendidik, dan partisipasi sekolah membuat pengalaman belajar belum merata di seluruh wilayah.",
      "EduGap hadir sebagai platform eksplorasi data yang membantu pengguna memahami kondisi pendidikan melalui visualisasi, perbandingan wilayah, dan simulasi kebijakan.",
    ],
    Tujuan: [
      "Menyediakan gambaran kondisi pendidikan yang mudah dipahami.",
      "Membantu mengidentifikasi wilayah prioritas berdasarkan indikator.",
      "Mendukung eksplorasi skenario intervensi berbasis data.",
    ],
    Manfaat: [
      "Bagi masyarakat: memahami tantangan pemerataan pendidikan.",
      "Bagi peneliti: menemukan pola dan indikator yang relevan.",
      "Bagi pengambil kebijakan: membantu menyusun prioritas intervensi.",
    ],
    "Sumber Data": [
      "Data referensi yang ditampilkan dalam prototipe ini mencakup indikator pendidikan yang umum dipublikasikan oleh Kemendikdasmen, BPS, dan sumber data pemerintah terkait.",
      "Angka pada antarmuka ini adalah data contoh untuk demonstrasi desain, bukan data resmi yang telah diverifikasi.",
    ],
    "Tim Pengembang": [
      "EduGap dikembangkan sebagai konsep platform visualisasi kesenjangan pendidikan Indonesia.",
      "Prototipe ini dirancang untuk membantu proses eksplorasi dan komunikasi data pendidikan.",
    ],
  };
  return (
    <>
      <PageHeading
        title="Tentang EduGap"
        desc="Mengenal tujuan, prinsip, dan sumber data di balik platform EduGap."
      />
      <div className="about-hero">
        <div className="about-copy">
          <div className="eyebrow">
            <span /> TENTANG PLATFORM
          </div>
          <h2>Pendidikan yang lebih merata untuk masa depan Indonesia.</h2>
          <p>
            EduGap mengubah data menjadi insight yang mudah dipahami agar
            kesenjangan pendidikan dapat dikenali dan ditangani secara lebih
            terarah.
          </p>
          <div className="about-stat-row">
            <div>
              <b>38</b>
              <span>Provinsi Indonesia</span>
            </div>
            <div>
              <b>1</b>
              <span>Tujuan bersama</span>
            </div>
            <div>
              <b>100%</b>
              <span>Fokus pada dampak</span>
            </div>
          </div>
        </div>
        <div className="about-art">
          <div className="about-sun" />
          <div className="about-school">
            <div className="building-roof" />
            <div className="building-body">
              <div className="building-window-row">
                <i />
                <i />
                <i />
              </div>
              <div className="building-door" />
              <div className="building-window-row">
                <i />
                <i />
                <i />
              </div>
            </div>
          </div>
          <div className="flag">🇮🇩</div>
          <div className="art-book">
            <BookOpen size={30} />
          </div>
        </div>
      </div>
      <div className="about-tabs">
        {Object.keys(content).map((t) => (
          <button
            key={t}
            className={tab === t ? "selected" : ""}
            onClick={() => setTab(t)}
          >
            {t}
          </button>
        ))}
      </div>
      <div className="about-content">
        <div className="about-content-icon">
          <Info size={22} />
        </div>
        <div>
          <h2>{tab}</h2>
          {content[tab].map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      </div>
      <div className="principles-grid">
        <div>
          <Eye />
          <b>Berbasis Data</b>
          <p>Mengutamakan data sebagai dasar memahami kondisi pendidikan.</p>
        </div>
        <div>
          <ShieldCheck />
          <b>Transparan</b>
          <p>Menjelaskan sumber dan konteks data secara terbuka.</p>
        </div>
        <div>
          <Target />
          <b>Untuk Semua</b>
          <p>Mendukung keputusan yang lebih inklusif dan berkeadilan.</p>
        </div>
      </div>
    </>
  );
}
function InfoIcon() {
  return <Info size={15} />;
}
export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-brand">
        <Brand />
        <span>Mewujudkan pendidikan yang lebih merata untuk Indonesia.</span>
      </div>
      <div className="footer-links">
        <span>Beranda</span>
        <span>Dataset</span>
        <span>Sumber Data</span>
        <span>Kontak</span>
      </div>
      <small>© 2024 EduGap. Prototipe visualisasi pendidikan.</small>
    </footer>
  );
}
export default function App() {
  const [page, setPage] = useState("Beranda");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  React.useEffect(() => {
    const fn = (e) => setPage(e.detail);
    window.addEventListener("edugap-navigate", fn);
    return () => window.removeEventListener("edugap-navigate", fn);
  }, []);
  const renderPage = () => {
    switch (page) {
      case "Beranda":
        return <HomePage setPage={setPage} />;
      case "Dashboard":
        return <DashboardPage setPage={setPage} />;
      case "Peta Kesenjangan":
        return <MapPage setPage={setPage} />;
      case "Jelajahi Data":
        return <ExplorePage />;
      case "Perbandingan Wilayah":
        return <ComparePage />;
      case "Simulasi":
        return <SimulationPage />;
      case "Detail Wilayah":
        return <DetailPage />;
      case "Analisis & Insight":
        return <InsightsPage setPage={setPage} />;
      case "Tentang":
        return <AboutPage />;
      default:
        return <HomePage setPage={setPage} />;
    }
  };
  return (
    <div className="app-shell">
      <Sidebar
        page={page}
        setPage={setPage}
        open={sidebarOpen}
        setOpen={setSidebarOpen}
      />
      <div className="main-shell">
        <Header page={page} setOpen={setSidebarOpen} />
        <main className="main-content" key={page}>
          {renderPage()}
          <Footer />
        </main>
      </div>
    </div>
  );
}
