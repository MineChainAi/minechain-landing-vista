
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod"; // Changed import syntax to fix the resolution issue
import { useToast } from "@/hooks/use-toast";
import { Send, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, { message: "Name is required" }),
  email: z.string().email({ message: "Valid email is required" }),
  phone: z.string().optional(),
  message: z.string().min(10, { message: "Please provide some details about your requirements" }),
});

type FormValues = z.infer<typeof formSchema>;

interface PropertyRequestDialogProps {
  isOpen: boolean;
  onClose: () => void;
  propertyTitle: string;
}

export const PropertyRequestDialog = ({
  isOpen,
  onClose,
  propertyTitle,
}: PropertyRequestDialogProps) => {
  const { toast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: `I would like more information about "${propertyTitle}".`,
    },
  });

  const onSubmit = async (data: FormValues) => {
    try {
      // In a real application, this would send data to a backend API
      console.log("Form submitted to dm@minechain.ai:", data);
      
      // Log the destination email address
      console.log("Sending request to: dm@minechain.ai");
      
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      toast({
        title: "Request sent successfully",
        description: "We'll be in touch with you shortly regarding this property.",
      });
      
      reset();
      onClose();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error submitting request",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[500px] bg-[#0F172A] border border-[#1E293B] text-white">
        <DialogHeader>
          <DialogTitle className="text-xl font-semibold text-white">
            Request Property Information
          </DialogTitle>
          <DialogDescription className="text-mine-silver">
            Complete the form below to receive detailed information about {propertyTitle}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-white">
              Name
            </label>
            <Input
              id="name"
              {...register("name")}
              className="bg-[#1E293B] border-[#2D3B4F] text-white"
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-white">
              Email
            </label>
            <Input
              id="email"
              type="email"
              {...register("email")}
              className="bg-[#1E293B] border-[#2D3B4F] text-white"
              placeholder="your@email.com"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-white">
              Phone (optional)
            </label>
            <Input
              id="phone"
              type="tel"
              {...register("phone")}
              className="bg-[#1E293B] border-[#2D3B4F] text-white"
              placeholder="Your phone number"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium text-white">
              Message
            </label>
            <Textarea
              id="message"
              {...register("message")}
              className="h-24 bg-[#1E293B] border-[#2D3B4F] text-white"
              placeholder="Tell us about your specific requirements or questions"
            />
            {errors.message && (
              <p className="text-xs text-red-500">{errors.message.message}</p>
            )}
          </div>
          
          <DialogFooter className="mt-6">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="border-[#2D3B4F] text-white hover:bg-[#1E293B]"
            >
              <X className="mr-2 h-4 w-4" /> Cancel
            </Button>
            <Button 
              type="submit"
              disabled={isSubmitting}
              className="bg-[#0EA5E9] hover:bg-[#0EA5E9]/90 text-white"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="mr-2 h-4 w-4" /> Submit Request
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
