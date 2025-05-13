# EmailJS Setup Guide

This guide will help you configure EmailJS for your portfolio contact form.

## Step 1: Create an EmailJS account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. The free plan allows sending 200 emails per month, which should be sufficient for a portfolio

## Step 2: Add an email service

1. In the EmailJS dashboard, go to "Email Services"
2. Click on "Add New Service"
3. Select your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. After connecting, you'll receive a **Service ID** - note it down

## Step 3: Create an email template

1. In the EmailJS dashboard, go to "Email Templates"
2. Click on "Create New Template"
3. Give your template a name (e.g., "Contact Form")
4. Use the example template HTML available in `docs/emailjs-template-example.html`
5. Make sure the template parameters match those in the code:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{subject}}` - Message subject
   - `{{message}}` - Message content
6. Save the template and note down the **Template ID**

## Step 4: Get your public key

1. In the EmailJS dashboard, go to "Account"
2. In the "API Keys" section, you'll find your **Public Key**
3. Note down this key

## Step 5: Configure your credentials in the code

1. Open the file `src/pages/ContactPage.tsx`
2. Replace the following variables with the values you noted down:
   ```javascript
   const EMAILJS_SERVICE_ID = "your_service_id"; // Replace with your Service ID
   const EMAILJS_TEMPLATE_ID = "your_template_id"; // Replace with your Template ID
   const EMAILJS_PUBLIC_KEY = "your_public_key"; // Replace with your Public Key
   ```

3. (Optional) If you prefer using environment variables:
   - Create a `.env.local` file in the project root
   - Add your credentials:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```
   - Uncomment the lines in the ContactPage.tsx file:
   ```javascript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   ```

## Step 6: Test the form

1. Run your application
2. Go to the contact page
3. Fill out the form and click "Send"
4. Check if you received the email in your account

## Troubleshooting

If email sending is not working:

1. Verify that the credentials are correct
2. Check the browser console for errors
3. Make sure that EmailJS is working correctly in your account

For more information, check the [official EmailJS documentation](https://www.emailjs.com/docs/). 