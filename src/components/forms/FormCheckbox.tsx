interface FormCheckboxProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function FormCheckbox({ label, checked, onChange }: FormCheckboxProps) {
  return (
    <label className="flex items-center">
      <input
        type="checkbox"
        className="rounded border-slate-300 text-slate-800 focus:ring-slate-500"
        checked={checked}
        onChange={onChange}
      />
      <span className="ml-2 text-slate-600">{label}</span>
    </label>
  );
}