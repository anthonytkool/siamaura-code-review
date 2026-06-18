import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const {
    tourTitle,
    tourSlug,
    fullName,
    email,
    whatsapp,
    country,
    preferredDate,
    guests,
    hotel,
    specialRequests,
  } = await req.json();

  try {
    // Send to Siam Aura
    await resend.emails.send({
      from: 'Siam Aura <contact@siamaura.org>',
      to: 'anthonytcool@hotmail.com',
      subject: `New Booking Request: ${tourTitle}`,
      html: `
        <h2>New Tour Booking Request</h2>
        <p><strong>Tour:</strong> ${tourTitle} (${tourSlug})</p>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>WhatsApp:</strong> ${whatsapp}</p>
        <p><strong>Country:</strong> ${country}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate}</p>
        <p><strong>Number of Guests:</strong> ${guests}</p>
        <p><strong>Hotel:</strong> ${hotel || 'N/A'}</p>
        <p><strong>Special Requests:</strong> ${specialRequests || 'N/A'}</p>
      `,
    });

    // Send confirmation to customer
    await resend.emails.send({
      from: 'Siam Aura <contact@siamaura.org>',
      to: email,
      subject: `Thank you for your booking request — ${tourTitle}`,
      html: `
        <h2>Thank you, ${fullName}!</h2>
        <p>We've received your booking request for <strong>${tourTitle}</strong> on <strong>${preferredDate}</strong> for <strong>${guests}</strong> guest(s).</p>
        <p>Anthony will personally review your request and contact you within 24 hours to confirm availability and arrange payment.</p>
        <p>Feel free to reach out directly:</p>
        <p>WhatsApp: +66 65 634 6595 | LINE: @tcoolofficial</p>
        <br/>
        <p>Best regards,<br/>Anthony — Siam Aura</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
