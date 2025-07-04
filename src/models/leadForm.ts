export class LeadForm {
  name: string;
  phone: string;
  email: string;
  message: string;

  constructor(name = "", phone = "", email = "", message = "") {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.message = message;
  }
}
