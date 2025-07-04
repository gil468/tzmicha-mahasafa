import { LeadForm } from "@/models/LeadForm";

export function validateFormData(formData: LeadForm) {
  const errors = new LeadForm();

  if (!formData.name.trim()) {
    errors.name = "שם מלא הוא שדה חובה";
  } else if (formData.name.trim().length < 2) {
    errors.name = "שם מלא חייב להכיל לפחות 2 תווים";
  }

  if (!formData.phone.trim()) {
    errors.phone = "מספר טלפון הוא שדה חובה";
  } else {
    const numericPhone = formData.phone.replace(/\D/g, "");
    if (numericPhone.length < 9 || numericPhone.length > 10) {
      errors.phone = "מספר טלפון חייב להכיל 9-10 ספרות";
    } else if (!/^\d{9,10}$/.test(numericPhone)) {
      errors.phone = "מספר טלפון יכול להכיל ספרות בלבד";
    }
  }

  if (!formData.email.trim()) {
    errors.email = "כתובת דוא״ל היא שדה חובה";
  } else {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(formData.email)) {
      errors.email = "כתובת דוא״ל לא תקינה";
    }
  }

  if (!formData.message.trim()) {
    errors.message = "תיאור המצב הוא שדה חובה";
  } else if (formData.message.trim().length < 10) {
    errors.message = "אנא ספרו לנו יותר על המצב שלכם (לפחות 10 תווים)";
  }

  const isValid = !Object.values(errors).some((error) => error);
  return { errors, isValid };
}
