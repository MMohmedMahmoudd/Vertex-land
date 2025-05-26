
import { Button } from "@/components/ui/button";
import { Phone } from "lucide-react";

export const FloatingActionButton = () => {
  return (
    <Button 
      size="icon"
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
    >
      <Phone className="w-6 h-6" />
    </Button>
  );
};
