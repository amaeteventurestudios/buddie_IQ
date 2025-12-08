import { LucideIcon } from "lucide-react";

interface FeatureIconProps {
  icon: LucideIcon;
  label: string;
}

const FeatureIcon = ({ icon: Icon, label }: FeatureIconProps) => {
  return (
    <div className="flex flex-col items-center gap-3 animate-fade-in">
      <div className="w-20 h-20 flex items-center justify-center">
        <Icon className="w-16 h-16 stroke-[1.5]" />
      </div>
      <span className="heading-subtitle text-sm md:text-base tracking-wide uppercase">
        {label}
      </span>
    </div>
  );
};

export default FeatureIcon;
