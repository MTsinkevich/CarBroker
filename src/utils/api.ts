import { FormData } from '../types/form';

const API_ENDPOINT = 'https://pebx3dfmnk.execute-api.us-east-2.amazonaws.com/';

export async function submitConsultationForm(formData: FormData): Promise<{ success: boolean; message: string }> {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form');
    }

    const data = await response.json();
    return { success: true, message: 'Thank you for your submission! We will contact you shortly.' };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { 
      success: false, 
      message: 'There was an error submitting your request. Please try again or contact us directly.' 
    };
  }
}