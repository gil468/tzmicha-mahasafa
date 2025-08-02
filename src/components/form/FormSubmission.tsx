import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { LeadForm } from "@/models/LeadForm";
import { validateFormData } from "@/services/FormValidation";
import { CheckIcon, XIcon } from "lucide-react";
import { FormEvent, useState } from "react";
import FormInput from "./FormInput";
import { LeadFormErrors } from "@/models/LeadFormErrors";

interface FormSubmissionProps {
  formData: LeadForm;
  setFormData: (data: LeadForm) => void;
  defaultFormData: LeadForm;
  formErrors: LeadFormErrors;
  setFormErrors: (errors: LeadFormErrors) => void;
}

const FormSubmission = ({
  formData,
  setFormData,
  defaultFormData,
  formErrors,
  setFormErrors,
}: FormSubmissionProps) => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handlePhoneChange = (value: string) => {
    const cleanedValue = value.replace(/[^\d]/g, "");
    setFormData({ ...formData, phone: cleanedValue });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const { errors, isValid } = validateFormData(formData);
    setFormErrors(errors);
    if (!isValid) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/submit-form.php", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          full_name: formData.name,
          phone_number: formData.phone,
          email: formData.email,
          description: formData.message,
        }),
      });

      if (response.ok) {
        toast({
          title: "תודה על הפנייה!",
          description: (
            <div className="flex items-center gap-2 text-right">
              <CheckIcon className="w-5 h-5 text-green-600" />
              <span>ניצור איתך קשר בקרוב לתיאום פגישת הייעוץ</span>
            </div>
          ),
          className: "bg-green-50 border-green-200 text-green-800 text-right",
          duration: 3000,
        });
        setFormData(defaultFormData);
        setFormErrors({});
      } else {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.log(error);
      toast({
        title: "שגיאה בשליחת הטופס",
        description: (
          <div className="flex items-center gap-2 text-right">
            <XIcon className="w-5 h-5 text-red-200" />
            <span>אירעה שגיאה בשליחת הטופס. אנא נסו שוב מאוחר יותר.</span>
          </div>
        ),
        variant: "destructive",
        className: "text-right",
        duration: 3000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <FormInput
        label="שם מלא *"
        type="text"
        value={formData.name}
        onChange={(value) => setFormData({ ...formData, name: value })}
        error={formErrors.name}
        placeholder="שמכם המלא"
        required
      />
      <div className="grid sm:grid-cols-2 gap-4">
        <FormInput
          label="טלפון *"
          type="tel"
          value={formData.phone}
          onChange={handlePhoneChange}
          error={formErrors.phone}
          placeholder="0501234567"
          required
          maxLength={10}
        />
        <FormInput
          label="דוא״ל *"
          type="email"
          value={formData.email}
          onChange={(value) => setFormData({ ...formData, email: value })}
          error={formErrors.email}
          placeholder="example@email.com"
          required
        />
      </div>
      <FormInput
        label="ספרו לנו על המצב שלכם *"
        type="text"
        value={formData.message}
        onChange={(value) => setFormData({ ...formData, message: value })}
        error={formErrors.message}
        placeholder="למשל: חובות, קשיים בחיסכון, בעיות תקציב..."
        required
        isTextarea
      />
      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full bg-amber-500 hover:bg-amber-600 text-white py-3 sm:py-4 text-base sm:text-lg rounded-full shadow-lg hover:shadow-xl transition-all hover-scale"
      >
        {isSubmitting ? "שולח..." : "שליחת פנייה"}
      </Button>
    </form>
  );
};

export default FormSubmission;
