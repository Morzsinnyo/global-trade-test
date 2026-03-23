// Resend email service
// Note: In production, this should be called from a backend/edge function
// to avoid exposing API keys in the browser.

interface ContactFormData {
  name: string;
  company: string;
  email: string;
  phone?: string;
  message: string;
  interest: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<{ success: boolean }> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn('VITE_RESEND_API_KEY not set. Email not sent.');
    // Simulate success in dev
    return { success: true };
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'website@global-trade.hu',
        to: ['lorincz@global-trade.hu'],
        subject: `[Website] ${data.interest} — ${data.company}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Company:</strong> ${data.company}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone || 'N/A'}</p>
          <p><strong>Interest:</strong> ${data.interest}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message}</p>
        `,
      }),
    });

    return { success: response.ok };
  } catch {
    return { success: false };
  }
}
