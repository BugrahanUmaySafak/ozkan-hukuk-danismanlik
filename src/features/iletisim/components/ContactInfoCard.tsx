import type React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { LucideIcon } from "lucide-react";

interface Props {
  title: string;
  icon: LucideIcon;
  children: React.ReactNode;
  variant?: "default" | "compact";
  iconColor?: string;
}

export default function ContactInfoCard({
  title,
  icon: Icon,
  children,
  iconColor = "text-blue-500",
}: Props) {
  const iconClass = `${iconColor} w-6 h-6 mr-3`;
  const titleClass = "flex items-center text-lg font-semibold text-slate-800";

  return (
    <Card className="transition-transform duration-200 ease-in-out hover:shadow-lg hover:scale-[1.02] hover:bg-slate-50">
      <CardHeader className="pt-4 pb-2">
        <CardTitle className={titleClass}>
          <Icon className={iconClass} />
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="text-sm text-slate-600 pb-4">
        {children}
      </CardContent>
    </Card>
  );
}
