import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useCreateInquiry } from "@/hooks/use-inquiries";
import { Loader2, Send } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Phone number must be at least 10 digits").optional(),
  subject: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type FormData = z.infer<typeof formSchema>;

export function ContactForm({ className }: { className?: string }) {
  const { mutate, isPending } = useCreateInquiry();
  
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    }
  });

  const onSubmit = (data: FormData) => {
    mutate(data, {
      onSuccess: () => reset()
    });
  };

  return (
    <div className={cn("bg-white rounded-2xl p-7 shadow-xl border border-gray-100", className)}>
      <h3 className="text-2xl font-heading font-bold text-gray-900 mb-2">Send us a Message</h3>
      <p className="text-gray-500 mb-8">Fill out the form below and our team will get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Full Name</label>
            <input
              {...register("name")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
              placeholder="Name"
            />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email Address</label>
            <input
              {...register("email")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
              placeholder="Email"
            />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Phone Number</label>
            <input
              {...register("phone")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all"
              placeholder="+91 98765 43210"
            />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Subject</label>
            <select
              {...register("subject")}
              className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all bg-white"
            >
              <option value="">Select a topic...</option>
              <option value="General Inquiry">General Inquiry</option>
              <option value="IPTV Solutions">IPTV Solutions</option>
              <option value="Security Systems">Security Systems</option>
              <option value="Support">Technical Support</option>
            </select>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Message</label>
          <textarea
            {...register("message")}
            rows={4}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition-all resize-none"
            placeholder="Tell us about your project requirements..."
          />
          {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
        </div>

        <button
          type="submit"
          disabled={isPending}
          className="w-full py-4 rounded-lg bg-primary text-white font-bold text-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:bg-primary/90 hover:-translate-y-0.5 active:translate-y-0 disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2"
        >
          {isPending ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" /> Sending...
            </>
          ) : (
            <>
              Send Message <Send className="w-5 h-5" />
            </>
          )}
        </button>
      </form>
    </div>
  );
}
