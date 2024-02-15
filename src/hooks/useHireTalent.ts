import { useState } from 'react';
import { HireTalentFormData } from '../constants/validators/HireTalent.validator';

export default function useHireTalent(data: HireTalentFormData) {
  const formUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSfh_XX4k-6F-FsOCt3MIxOUB4qcH96yoDaJ0aaMOghlH2DrYA/formResponse`;

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const params = new URLSearchParams();

    // Append single-value fields directly
    params.append('entry.862771815', data.name);
    params.append('entry.1903578400', data.email);
    params.append('entry.874383580', data.telephoneNumber);
    params.append('entry.1152582678', data.companyName);
    params.append('entry.583046088', String(data.projectBudgetMin));
    params.append('entry.2016911606', String(data.projectBudgetMax));
    params.append('entry.2040870261', data.jobDescription);

    // For multi-value fields like `role` and `technologyStack`, append each selected value separately
    data.role.forEach((role) => {
      params.append('entry.1078004677', role);
    });

    data.technologyStack.forEach((tech) => {
      params.append('entry.126694725', tech);
    });

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });
      // Assume success
      console.log('Form submitted successfully');
      // Handle success (e.g., show a message, redirect, etc.)
    } catch (error) {
      console.error('Error submitting form', error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
}
