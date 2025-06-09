import { NextRequest, NextResponse } from 'next/server';
// Removed @emailjs/nodejs import. Using EmailJS REST API instead.

// You need to set these in your .env.local file
const EMAILJS_SERVICE_ID = 'service_i2cwkie';
const EMAILJS_TEMPLATE_ID = 'template_p8vvbah';
const EMAILJS_PUBLIC_KEY = 'W8J3-poq3U0DZ1Vzw';

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();
    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: 'Missing required fields.' }, { status: 400 });
    }

    // Send email using EmailJS REST API
    const emailjsRes = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        service_id: EMAILJS_SERVICE_ID,
        template_id: EMAILJS_TEMPLATE_ID,
        user_id: EMAILJS_PUBLIC_KEY,
        template_params: {
          from_name: name,
          from_email: email,
          subject,
          message,
          to_email: 'officialbhuppiiydv@gmail.com',
        },
      }),
    });

    let resultText;
    try {
      resultText = await emailjsRes.text();
      console.log('EmailJS response:', resultText);
    } catch  {
      resultText = 'No response body';
    }

    if (emailjsRes.ok) {
      return NextResponse.json({ success: true });
    } else {
      // Try to parse error for more details
      let errorMessage = 'Failed to send message.';
      try {
        const errorJson = JSON.parse(resultText);
        if (errorJson && errorJson.error) errorMessage = errorJson.error;
      } catch {}
      return NextResponse.json({ error: errorMessage, details: resultText }, { status: 500 });
    }
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
