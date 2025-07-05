import { Card } from "@/components/ui/card";
import { LeadForm } from "@/models/LeadForm";
import { useState } from "react";
import FormHeader from "./form/FormHeader";
import FormSubmission from "./form/FormSubmission";
import { LeadFormErrors } from "@/models/LeadFormErrors";

const LeadsFormSection = ({
  defaultFormData,
}: {
  defaultFormData: LeadForm;
}) => {
  const [formData, setFormData] = useState<LeadForm>(defaultFormData);
  const [formErrors, setFormErrors] = useState<LeadFormErrors>({});

  return (
    <section
      id="leads-form"
      className="py-16 sm:py-20 px-4 bg-gradient-to-b from-emerald-50 to-green-100"
    >
      <div className="container mx-auto max-w-2xl">
        <FormHeader />
        <Card className="p-6 sm:p-8 shadow-xl bg-white/95 border-2 border-emerald-200 animate-scale-in mx-4">
          <FormSubmission
            formData={formData}
            setFormData={setFormData}
            defaultFormData={defaultFormData}
            formErrors={formErrors}
            setFormErrors={setFormErrors}
          />
        </Card>
      </div>
    </section>
  );
};

export default LeadsFormSection;
