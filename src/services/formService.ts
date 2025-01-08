import { FormData } from '../types/form';
import { API_CONFIG } from '../config/api';

export async function submitForm(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(`${API_CONFIG.BASE_URL}${API_CONFIG.ENDPOINTS.CONTACT}`, {
      method: 'POST',
      headers: API_CONFIG.HEADERS,
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || 'Failed to submit form');
    }

    return {
      success: true,
      message: 'Thank you for your submission! We will contact you shortly.',
    };
  } catch (error) {
    console.error('Form submission error:', error);
    return {
      success: false,
      message: error instanceof Error ? error.message : 'An unexpected error occurred',
    };
  }
}