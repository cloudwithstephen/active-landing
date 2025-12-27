/**
 * EmailJS Configuration
 *
 * To set up EmailJS:
 * 1. Go to https://www.emailjs.com/ and create an account
 * 2. Create an email service (Gmail, Outlook, etc.)
 * 3. Create email templates for each form
 * 4. Get your Public Key from the Integration page
 * 5. Update the values below with your EmailJS credentials
 */

export const emailjsConfig = {
  // Your EmailJS Public Key (found in EmailJS Dashboard > Account > API Keys)
  publicKey: "KpvImFqFHX2bAaQDk",

  // Contact Form Configuration
  contact: {
    serviceId: "YOUR_SERVICE_ID_HERE",
    templateId: "YOUR_TEMPLATE_ID_HERE",
  },

  // Hire Talent Form Configuration
  hireTalent: {
    serviceId: "service_6ysezz3",
    templateId: "template_nx7qdy9",
  },
};

/**
 * Template Parameters Reference:
 *
 * Contact Form expects these template parameters:
 * - from_name: Sender's name
 * - from_email: Sender's email
 * - phone: Sender's phone number
 * - subject: Email subject
 * - message: Email message
 * - to_name: Recipient name (default: "Active Technologies")
 *
 * Hire Talent Form expects these template parameters:
 * - name: Applicant's name
 * - email: Applicant's email
 * - telephoneNumber: Applicant's phone number
 * - companyName: Company name
 * - jobDescription: Job description
 */
