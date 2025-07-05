import { LeadForm } from "@/models/leadForm";

export function validateFormData(formData: LeadForm) {
  const errors = new LeadForm();

  // Name validation
  if (!formData.name.trim()) {
    errors.name = "שם מלא הוא שדה חובה";
  } else if (formData.name.trim().length < 2) {
    errors.name = "שם מלא חייב להכיל לפחות 2 תווים";
  } else if (formData.name.trim().length > 50) {
    errors.name = "שם מלא חייב להכיל עד 50 תווים";
  }

  // Phone validation - only numeric, 9-10 digits
  if (!formData.phone.trim()) {
    errors.phone = "מספר טלפון הוא שדה חובה";
  } else {
    const numericPhone = formData.phone.replace(/\D/g, "");
    if (numericPhone.length < 9 || numericPhone.length > 10) {
      errors.phone = "מספר טלפון חייב להכיל 9-10 ספרות";
    } else if (!/^0\d{8,9}$/.test(numericPhone)) {
      errors.phone = "מספר טלפון חייב להתחיל ב-0 ולהכיל 9-10 ספרות";
    }
  }

  // Email validation with stricter regex
  if (!formData.email.trim()) {
    errors.email = "כתובת דוא״ל היא שדה חובה";
  } else {
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    if (!emailRegex.test(formData.email.trim())) {
      errors.email = "כתובת דוא״ל לא תקינה";
    } else if (formData.email.length > 254) {
      errors.email = "כתובת דוא״ל ארוכה מדי";
    }
  }

  // Message validation
  if (!formData.message.trim()) {
    errors.message = "תיאור המצב הוא שדה חובה";
  } else if (formData.message.trim().length < 10) {
    errors.message = "אנא ספרו לנו יותר על המצב שלכם (לפחות 10 תווים)";
  } else if (formData.message.trim().length > 1000) {
    errors.message = "התיאור ארוך מדי (עד 1000 תווים)";
  }

  const isValid = !Object.values(errors).some((error) => error);
  return { errors, isValid };
}
