import nodemailer from "nodemailer";

export async function POST(req) {
  const { name, email, service, message } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: `"Ezysantz Contact" <${process.env.GMAIL_USER}>`,
      to: "umarfreelancerweb@gmail.com",
      subject: `New Contact: ${name} — ${service || "General Inquiry"}`,
      html: `
        <div style="font-family: sans-serif; max-width: 560px; margin: 0 auto; padding: 32px; background: #08080a; color: #f5f5f7; border-radius: 12px;">
          <h2 style="color: #c8ff00; margin-bottom: 24px;">New Message from Ezysantz Website</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr><td style="padding: 10px 0; color: #8a8a8f; width: 120px;">Name</td><td style="padding: 10px 0; color: #f5f5f7;">${name}</td></tr>
            <tr><td style="padding: 10px 0; color: #8a8a8f;">Email</td><td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #c8ff00;">${email}</a></td></tr>
            <tr><td style="padding: 10px 0; color: #8a8a8f;">Service</td><td style="padding: 10px 0; color: #f5f5f7;">${service || "Not specified"}</td></tr>
          </table>
          <hr style="border-color: #1f1f24; margin: 20px 0;" />
          <p style="color: #8a8a8f; margin-bottom: 8px;">Message:</p>
          <p style="color: #f5f5f7; line-height: 1.7; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    });

    return Response.json({ success: true });
  } catch (err) {
    console.error("Email error:", err);
    return Response.json({ success: false }, { status: 500 });
  }
}
