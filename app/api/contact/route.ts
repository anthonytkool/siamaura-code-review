import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { firstName, lastName, email, phone, subject, message } =
    await req.json();

  try {
    // Send to Siam Aura
    await resend.emails.send({
      from: 'Siam Aura <contact@siamaura.org>',
      to: 'anthonytcool@hotmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: 'Siam Aura <contact@siamaura.org>',
      to: email,
      subject: 'Thank you for contacting Siam Aura',
      html: `
        <h2>Thank you for contacting us, ${firstName}!</h2>
        <p>We have received your message and will get back to you within 24 hours.</p>
        <p>LINE: @tcoolofficial | WhatsApp: +66 65 634 6595</p>
        <br/>
        <p>Best regards,<br/>Siam Aura Team</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
