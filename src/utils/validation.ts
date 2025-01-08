import { FormData } from '../types/form';

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s-]{10,}$/;
  return phoneRegex.test(phone);
}

export function validateName(name: string): boolean {
  return name.trim().length >= 2;
}

export function validateForm(data: FormData): string | null {
  if (!validateName(data.firstName)) return 'First name is required';
  if (!validateName(data.lastName)) return 'Last name is required';
  if (!validatePhone(data.phone)) return 'Please enter a valid phone number';
  if (!validateEmail(data.email)) return 'Please enter a valid email address';
  if (data.preferredContact.length === 0) return 'Please select at least one contact method';
  if (!data.vehicleOfInterest) return 'Please select a vehicle of interest';
  return null;
}