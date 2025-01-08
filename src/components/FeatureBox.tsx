import { ReactNode } from 'react';

interface FeatureBoxProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureBox({ icon, title, description }: FeatureBoxProps) {
  return (
    <div className="text-center p-6">
      <div className="inline-block p-3 bg-slate-50 rounded-full mb-4">
        <span className="text-slate-800">
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-light text-slate-800 mb-2">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}