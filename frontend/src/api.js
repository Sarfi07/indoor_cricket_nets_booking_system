const BASE = "/api";

export const apiFetch = async (path, { method = "GET", body, token } = {}) => {
  const headers = { "Content-Type": "application/json" };
  if (token) headers["Authorization"] = `Bearer ${token}`;

  const res = await fetch(`${BASE}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined
  });

  let payload = {};
  try {
    payload = await res.json();
  } catch (e) {
    // no json body
  }

  if (!res.ok) {
    const message = payload?.message || `Request failed: ${res.status}`;
    const err = new Error(message);
    err.status = res.status;
    err.payload = payload;
    throw err;
  }

  return payload;
};
