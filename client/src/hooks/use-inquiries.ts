import { useMutation } from "@tanstack/react-query";
import { api } from "@shared/routes";
import { useToast } from "@/hooks/use-toast";
import type { InsertInquiry } from "@shared/schema";

export function useCreateInquiry() {
  const { toast } = useToast();
  
  return useMutation({
    mutationFn: async (data: InsertInquiry) => {
      // Validate data before sending if needed, but schema handles mostly
      const res = await fetch(api.inquiries.create.path, {
        method: api.inquiries.create.method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || "Failed to submit inquiry");
      }

      return api.inquiries.create.responses[201].parse(await res.json());
    },
    onSuccess: () => {
      toast({
        title: "Inquiry Sent Successfully",
        description: "Thank you for contacting us. We will get back to you shortly.",
        variant: "default", // Success style (default)
      });
    },
    onError: (error: Error) => {
      toast({
        title: "Submission Failed",
        description: error.message,
        variant: "destructive",
      });
    },
  });
}
