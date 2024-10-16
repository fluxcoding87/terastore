import { Loader2 } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="size-full flex items-center justify-center">
      <Loader2 className="size-10 animate-spin" />
    </div>
  );
};

export default LoadingPage;
