import { AlertCircle } from "lucide-react";

interface Props {
  message: string;
}

export default function FormInfo({ message }: Props) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-amber-50 text-amber-800 shadow-md">
      <AlertCircle className="h-5 w-5" />
      <p className="text-sm">{message}</p>
    </div>
  );
}
