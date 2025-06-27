import { memo } from "react";
import type { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
}

const ServiceCard = memo(function ServiceCard({
  title,
  description,
  icon: Icon,
}: ServiceCardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
          <Icon className="h-6 w-6 text-blue-600" />
        </div>
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p className="text-gray-600">{description}</p>
    </div>
  );
});

export default ServiceCard;
