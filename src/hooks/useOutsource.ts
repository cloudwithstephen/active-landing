import { useState } from 'react';
import { OutsourceProjectFormData } from '../constants/validators/Outsource.validator';

export default function useOutsource(data: OutsourceProjectFormData) {
  const formUrl = `https://docs.google.com/forms/u/0/d/e/1FAIpQLSejO-0lgGeqzUgB2GqdT6l8fZYJwE8uzkbQ55zaYv-aUDw_4A/formResponse`;

  const [loading, setLoading] = useState(false);

  const handleSubmit = async () => {
    setLoading(true);
    const params = new URLSearchParams();

    // Append single-value fields directly
    params.append('entry.862771815', data.name);
    params.append('entry.672132728', data.telephoneNumber);
    params.append('entry.1903578400', data.email);
    // params.append('entry.2026184121', data.projectName);
    // params.append('entry.1090555749', String(data.projectBudgetMin));
    // params.append('entry.1959699782', String(data.projectBudgetMax));
    params.append('entry.2040870261', data.projectDescription);

    if (data.projectDate) {
      // Parse the projectDate into a Date object
      const projectDate = new Date(data.projectDate);

      // Use Intl.DateTimeFormat to format the date components
      const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(
        projectDate
      );
      const month = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(
        projectDate
      );
      const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(
        projectDate
      );

      // Append the formatted date components
      params.append('entry.553132009_year', year);
      params.append('entry.553132009_month', month);
      params.append('entry.553132009_day', day);
    }

    try {
      await fetch(formUrl, {
        method: 'POST',
        mode: 'no-cors',
        body: params,
      });

      // console.log(res.status);

      // console.log('Form submitted successfully');
    } catch (error) {
      console.log(error);

      console.error('Error submitting form', error);
      // Handle error
    } finally {
      setLoading(false);
    }
  };

  return { handleSubmit, loading };
}
