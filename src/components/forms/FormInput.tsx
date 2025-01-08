interface FormInputProps {
  label: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

export default function FormInput({
  label,
  id,
  type,
  value,
  onChange,
  required = false,
}: FormInputProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-2">
        {label}{required && '*'}
      </label>
      <input
        type={type}
        id={id}
        name={id}
        required={required}
        className="w-full px-4 py-2 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-500"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}