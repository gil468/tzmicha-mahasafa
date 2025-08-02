import { LeadForm } from "@/models/LeadForm";
import isEmail from "validator/lib/isEmail";
// const validator = require("validator");

export function validateFormData(formData: LeadForm) {
  const errors = new LeadForm();
  const nameInput = formData.name.trim();
  const phoneInput = formData.phone;
  const emailInput = formData.email.trim();
  const messageInput = formData.message.trim();

  // Name validation
  if (!nameInput) {
    errors.name = "שם מלא הוא שדה חובה";
  } else if (nameInput.length < 2) {
    errors.name = "שם מלא חייב להכיל לפחות 2 תווים";
  } else if (nameInput.length > 50) {
    errors.name = "שם מלא חייב להכיל עד 50 תווים";
  }

  // Phone validation - only numeric, 9-10 digits
  if (!phoneInput.trim()) {
    errors.phone = "מספר טלפון הוא שדה חובה";
  } else {
    const numericPhone = phoneInput.replace(/\D/g, "");
    if (numericPhone.length < 9 || numericPhone.length > 10) {
      errors.phone = "מספר טלפון חייב להכיל 9-10 ספרות";
    } else if (!/^0\d{8,9}$/.test(numericPhone)) {
      errors.phone = "מספר טלפון חייב להתחיל ב-0 ולהכיל 9-10 ספרות";
    }
  }

  // Email validation with stricter regex
  if (!emailInput) {
    errors.email = "כתובת דוא״ל היא שדה חובה";
  } else {
    if (!isEmail(emailInput)) {
      errors.email = "כתובת דוא״ל לא תקינה";
    } else if (formData.email.length > 254) {
      errors.email = "כתובת דוא״ל ארוכה מדי";
    }
  }

  // Message validation
  if (!messageInput) {
    errors.message = "תיאור המצב הוא שדה חובה";
  } else if (messageInput.length < 10) {
    errors.message = "אנא ספרו לנו יותר על המצב שלכם (לפחות 10 תווים)";
  } else if (messageInput.length > 1000) {
    errors.message = "התיאור ארוך מדי (עד 1000 תווים)";
  }

  const isValid = !Object.values(errors).some((error) => error);
  return { errors, isValid };
}
