import { FormData } from '../types/form';
import { API_CONFIG } from '../config/api';
import { ApiError, getErrorMessage } from '../utils/errorHandling';

interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
}

class ApiClient {
  private async request<T>(
    endpoint: string,
    options: RequestInit
  ): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_CONFIG.BASE_URL}${endpoint}`, {
        ...options,
        headers: {
          ...API_CONFIG.HEADERS,
          ...options.headers,
        },
      });

      const data = await response.json();

      if (!response.ok) {
        throw new ApiError(
          data.message || 'Request failed',
          response.status,
          data
        );
      }

      return { success: true, data };
    } catch (error) {
      console.error('API Error:', error);
      return {
        success: false,
        error: getErrorMessage(error),
      };
    }
  }

  async submitConsultation(formData: FormData): Promise<ApiResponse<void>> {
    return this.request(API_CONFIG.ENDPOINTS.CONTACT, {
      method: 'POST',
      body: JSON.stringify({
        ...formData,
        timestamp: new Date().toISOString(),
      }),
    });
  }
}

export const apiClient = new ApiClient();