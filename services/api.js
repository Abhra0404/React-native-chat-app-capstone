
const API_URL =
  process.env.EXPO_PUBLIC_API_URL || "http://10.7.12.102:9876";

// Send a request to the Chatty backend
export async function apiRequest(endpoint, method, data, token) {
  const headers = {
    "Content-Type": "application/json",
  };

  // Add the JWT token when a protected route needs it
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_URL}${endpoint}`, {
    method: method,
    headers: headers,
    body: data ? JSON.stringify(data) : undefined,
  });

  const result = await response.json();

  if (!response.ok) {
    const error = new Error(result.message || "Something went wrong");
    error.status = response.status;
    throw error;
  }

  return result;
}
