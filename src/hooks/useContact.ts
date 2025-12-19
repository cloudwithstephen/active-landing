import { useState } from "react";
import emailjs from "@emailjs/browser";
import { ContactFormData } from "../constants/validators/Contact.validator";

export default function useContact() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (data: ContactFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // EmailJS configuration - these should be set as environment variables
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || "";
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "";
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "";

    if (!serviceId || !templateId || !publicKey) {
      const missing = [];
      if (!serviceId) missing.push("REACT_APP_EMAILJS_SERVICE_ID");
      if (!templateId) missing.push("REACT_APP_EMAILJS_TEMPLATE_ID");
      if (!publicKey) missing.push("REACT_APP_EMAILJS_PUBLIC_KEY");

      setError(
        `EmailJS configuration is missing: ${missing.join(
          ", "
        )}. Please check your .env file and restart the development server.`
      );
      setLoading(false);
      return;
    }

    // Initialize EmailJS with public key (only once, but safe to call multiple times)
    emailjs.init({
      publicKey: publicKey,
    });

    // Prepare template parameters
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      phone: data.telephoneNumber,
      subject: data.subject,
      message: data.message,
      to_name: "Active Technologies", // Your company name
    };

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        templateParams
      );

      if (response.status === 200 || response.text === "OK") {
        setSuccess(true);
      } else {
        throw new Error(`Failed to send email: ${response.text}`);
      }
    } catch (error: any) {
      console.error("Error sending email:", error);

      // Provide more specific error messages
      if (error?.text) {
        setError(`Failed to send message: ${error.text}`);
      } else if (error?.message) {
        setError(`Failed to send message: ${error.message}`);
      } else {
        setError(
          "Failed to send message. Please check your EmailJS configuration and try again."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading, error, success };
}
