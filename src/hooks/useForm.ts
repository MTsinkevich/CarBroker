import { useState, useCallback } from 'react';
import { FormData } from '../types/form';
import { validateForm } from '../utils/validation';

const initialFormData: FormData = {
  firstName: '',
  lastName: '',
  phone: '',
  email: '',
  preferredContact: [],
  vehicleOfInterest: '',
};

export function useForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleCheckboxChange = useCallback((value: string) => {
    setFormData((prev) => ({
      ...prev,
      preferredContact: prev.preferredContact.includes(value)
        ? prev.preferredContact.filter((item) => item !== value)
        : [...prev.preferredContact, value],
    }));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    setError(null);

    // Simulate form submission
    setTimeout(() => {
      setSuccess(true);
      setFormData(initialFormData);
      setIsSubmitting(false);
    }, 1000);
  };

  return {
    formData,
    isSubmitting,
    error,
    success,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
    setError,
    setSuccess,
  };
}