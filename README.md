# Active Landing

This repository contains the frontend for the Active Landing marketing site — a React + TypeScript single-page application built with Tailwind CSS.

**Tech stack:**

- React + TypeScript
- Tailwind CSS
- Vite / Create React App (project scaffold)

## Features

- Home / Marketing pages
- Hire talent and Outsource project forms
- Contact us form with EmailJS integration
- Team members pages and components
- Accessibility-minded components and smooth scrolling

## Getting started

Prerequisites:

- Node.js >= 18
- npm or yarn

### Environment Variables

The contact form requires EmailJS configuration. Create a `.env` file in the root directory with the following variables:

```env
REACT_APP_EMAILJS_SERVICE_ID=your_service_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key_here
```

**Setting up EmailJS:**

1. Sign up for a free account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an email service (Gmail, Outlook, etc.) in the EmailJS dashboard
3. Create an email template with the following variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{phone}}` - Sender's phone number
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
   - `{{to_name}}` - Recipient name (set to "Active Technologies")
4. Get your Public Key from the Integration page
5. Add the values to your `.env` file
6. Restart your development server after adding environment variables

## Environment / Deployment

Static hosting is supported. For many hosts (Netlify, Vercel, Surge), you can point to the output or configure the host to run

> landing-page@0.1.0 build
> react-scripts build

Creating an optimized production build... and serve the produced static files.

## Contributing

1. Fork the repo
2. Create a feature branch
3. Open a pull request with a clear description

## Notes

- If you want, I can run a quick check of to include exact npm scripts and tailor the README commands.

---

If you'd like a shorter or longer README, or one tailored for a specific host (Vercel, Netlify), tell me which and I will update it.
