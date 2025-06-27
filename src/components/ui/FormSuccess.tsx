import { CheckCircle } from "lucide-react";

interface Props {
  message: string;
}

export default function FormSuccess({ message }: Props) {
  return (
    <div className="flex items-center gap-3 p-3 rounded-lg bg-green-50 text-green-800 shadow-md">
      <CheckCircle className="h-5 w-5" />
      <p className="text-sm">{message}</p>
    </div>
  );
}
