import { useForm } from '../hooks/useForm';
import FormInput from '../components/forms/FormInput';
import FormCheckbox from '../components/forms/FormCheckbox';
import Alert from '../components/Alert';

export default function Consultation() {
  const {
    formData,
    isSubmitting,
    error,
    success,
    handleInputChange,
    handleCheckboxChange,
    handleSubmit,
  } = useForm();

  const vehicles = [
    { brand: 'Volvo', models: ['XC90', 'XC60', 'XC40', 'S60'] },
    { brand: 'Volkswagen', models: ['Atlas Sport', 'Tiguan', 'Jetta'] },
    { brand: 'Mitsubishi', models: ['Outlander', 'Eclipse Cross', 'Outlander Sport'] }
  ];

  return (
    <div className="pt-32">
      <section className="bg-white/80 backdrop-blur-sm py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <h1 className="text-4xl font-light text-center mb-8">Schedule a Consultation</h1>
          <p className="text-slate-600 text-center mb-12">
            Let us help you find your perfect vehicle. Fill out the form below and our concierge team will contact you shortly.
          </p>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <FormInput
                label="First Name"
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleInputChange}
                required
              />
              <FormInput
                label="Last Name"
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="space-y-6 mb-8">
              <FormInput
                label="Phone Number"
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={handleInputChange}
                required
              />
              <FormInput
                label="Email Address"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Preferred Method of Contact*
                </label>
                <div className="space-y-3">
                  <FormCheckbox
                    label="Phone Call"
                    checked={formData.preferredContact.includes('call')}
                    onChange={() => handleCheckboxChange('call')}
                  />
                  <FormCheckbox
                    label="Text Message"
                    checked={formData.preferredContact.includes('text')}
                    onChange={() => handleCheckboxChange('text')}
                  />
                  <FormCheckbox
                    label="Email"
                    checked={formData.preferredContact.includes('email')}
                    onChange={() => handleCheckboxChange('email')}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="vehicleOfInterest" className="block text-sm font-medium text-slate-700 mb-3">
                  Vehicle of Interest*
                </label>
                <select
                  id="vehicleOfInterest"
                  name="vehicleOfInterest"
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
                  value={formData.vehicleOfInterest}
                  onChange={handleInputChange}
                >
                  <option value="">Select a vehicle</option>
                  {vehicles.map((brand) => (
                    <optgroup key={brand.brand} label={brand.brand}>
                      {brand.models.map((model) => (
                        <option key={`${brand.brand}-${model}`} value={`${brand.brand} ${model}`}>
                          {brand.brand} {model}
                        </option>
                      ))}
                    </optgroup>
                  ))}
                </select>
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-slate-800 text-white py-3 rounded-full transition-colors ${
                isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-slate-700'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit Request'}
            </button>
          </form>
        </div>
      </section>

      {(error || success) && (
        <Alert
          type={success ? 'success' : 'error'}
          message={success ? 'Thank you for your submission! We will contact you shortly.' : error}
          onClose={() => {}}
        />
      )}
    </div>
  );
}