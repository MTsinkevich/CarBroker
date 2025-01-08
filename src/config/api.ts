// API configuration
export const API_CONFIG = {
  BASE_URL: 'https://pebx3dfmnk.execute-api.us-east-2.amazonaws.com',
  ENDPOINTS: {
    CONTACT: '/prod/contact',
  },
  HEADERS: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
  },
} as const;