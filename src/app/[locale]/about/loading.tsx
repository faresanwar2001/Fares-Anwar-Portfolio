import { Loader2 } from "lucide-react";

export default function loading() {
  return (
    <div className="flex h-screen justify-center items-center">
      <h1 className="flex items-center">
        {/* Loader */}
        <Loader2 className="animate-spin text-2xl dark:text-white mr-2"/>
        Loading...
      </h1>
    </div>
  );
}
