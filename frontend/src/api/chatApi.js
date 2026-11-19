// API client for the GST Sutra chat backend.
// Reads the base URL from VITE_API_URL (default: http://localhost:8080).
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:8080';

export async function askQuestion(question) {
  const response = await fetch(`${API_URL}/api/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ question }),
  });

  if (!response.ok) {
    let message = `Request failed with status ${response.status}`;
    try {
      const body = await response.json();
      message = body.message || body.error || message;
    } catch (_err) {
      // Ignore parse errors; use the status-based message above.
    }
    const error = new Error(message);
    error.status = response.status;
    throw error;
  }

  return response.json();
}

// Lightweight reachability check for the status dot. Any HTTP response (even
// a 405 for GET on the POST-only endpoint) means the backend is reachable;
// only a network/CORS failure counts as offline.
export async function checkBackend() {
  try {
    await fetch(`${API_URL}/api/chat`, { method: 'GET' });
    return true;
  } catch (_err) {
    return false;
  }
}
