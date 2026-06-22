import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Saare fields required hain." },
        { status: 400 }
      );
    }

    // 1️⃣ MongoDB mein save karo
    await connectDB();
    await Contact.create({ name, email, message });

    // 2️⃣ Gmail pe email bhejo (optional — fail hone pe bhi success return hoga)
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
        to: process.env.GMAIL_USER,
        subject: `📬 New message from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 520px; margin: auto; padding: 24px; border: 1px solid #e5e7eb; border-radius: 12px;">
            <h2 style="color: #30051a; margin-bottom: 4px;">New Contact Form Submission</h2>
            <p style="color: #6f6270; font-size: 13px; margin-top: 0;">From your portfolio website</p>
            <hr style="border-color: #f3e8ee; margin: 16px 0;" />
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Message:</strong></p>
            <p style="background: #fdf2f8; padding: 12px 16px; border-radius: 8px; color: #171016;">${message}</p>
            <hr style="border-color: #f3e8ee; margin: 16px 0;" />
            <p style="font-size: 12px; color: #9ca3af;">Siddharth Chaurasiya Portfolio · ${new Date().toLocaleString("en-IN")}</p>
          </div>
        `,
      });
    } catch (emailError) {
      console.warn("Email send failed (MongoDB save succeeded):", emailError);
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { error: "Kuch galat ho gaya. Dobara try karo." },
      { status: 500 }
    );
  }
}
