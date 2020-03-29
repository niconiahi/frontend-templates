// lib
import { axivios, ENDPOINTS } from 'lib/api';

export const login = (username, password) =>
  fetch(ENDPOINTS.login(), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, password }),
  })
    .then((res) => res.json())
    .catch((error) => console.error(error));
