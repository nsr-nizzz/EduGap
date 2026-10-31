const API_URL = "http://localhost:5000/api";

async function fetchAPI(endpoint) {
  const response = await fetch(`${API_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

// Helper untuk menyusun query parameter
function buildQuery(params = {}) {
  const query = new URLSearchParams();

  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      query.append(key, value);
    }
  });

  const queryString = query.toString();
  return queryString ? `?${queryString}` : "";
}

// ==============================
// DASHBOARD
// ==============================

export const getDashboardSummary = () =>
  fetchAPI("/dashboard/summary");

export const getDashboardTrends = (indicator = "APS", region_id, year) =>
  fetchAPI(
    `/dashboard/trends${buildQuery({ indicator, region_id, year })}`
  );

// ==============================
// INDIKATOR
// ==============================

export const getIndicators = () =>
  fetchAPI("/indicators");

export const getIndicatorByCode = (code) =>
  fetchAPI(`/indicators/${encodeURIComponent(code)}`);

// ==============================
// WILAYAH
// ==============================

export const getRegions = (type, search) =>
  fetchAPI(`/regions${buildQuery({ type, search })}`);

export const getRegionById = (id) =>
  fetchAPI(`/regions/${id}`);

export const getRegionObservations = (id, indicator, year) =>
  fetchAPI(
    `/regions/${id}/observations${buildQuery({ indicator, year })}`
  );

// ==============================
// PETA
// ==============================

export const getMapData = (indicator = "APS", year, category) =>
  fetchAPI(
    `/map${buildQuery({ indicator, year, category })}`
  );

// ==============================
// PERBANDINGAN WILAYAH
// ==============================

export const compareRegions = (indicator, year, regions) => {
  const regionIds = Array.isArray(regions)
    ? regions.join(",")
    : regions;

  return fetchAPI(
    `/compare${buildQuery({
      indicator,
      year,
      regions: regionIds,
    })}`
  );
};

// ==============================
// ANALISIS & INSIGHT
// ==============================

export const getInsights = (indicator = "APS") =>
  fetchAPI(`/insights${buildQuery({ indicator })}`);