import { useState } from "react";
import emailjs from "@emailjs/browser";
import { emailjsConfig } from "../config/emailjs.config";
import { HireTalentFormData } from "../constants/validators/HireTalent.validator";

export default function useHireTalent() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const submitHireTalent = async (formData: HireTalentFormData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    // EmailJS configuration from config file
    const serviceId = emailjsConfig.hireTalent.serviceId;
    const templateId = emailjsConfig.hireTalent.templateId;
    const publicKey = emailjsConfig.publicKey;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "service_6ysezz3" ||
      templateId === "template_nx7qdy9" ||
      publicKey === "KpvImFqFHX2bAaQDk"
    ) {
      setError(
        "EmailJS is not configured. Please update the EmailJS credentials in src/config/emailjs.config.ts"
      );
      setLoading(false);
      return;
    }

    // Initialize EmailJS with public key
    emailjs.init({
      publicKey: publicKey,
    });

    try {
      const response = await emailjs.send(serviceId, templateId, {
        name: formData.name,
        email: formData.email,
        telephoneNumber: formData.telephoneNumber,
        companyName: formData.companyName,
        jobDescription: formData.jobDescription,
      });

      if (response.status === 200 || response.text === "OK") {
        setSuccess(true);
      } else {
        throw new Error(`Failed to send email: ${response.text}`);
      }
    } catch (error: any) {
      console.error("EmailJS error:", error);

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

  return { submitHireTalent, loading, error, success };
}
