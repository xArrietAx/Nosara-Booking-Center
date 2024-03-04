import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req) {
  try {
    const { email, serviceName, name, subject = "Reserva de", service = "", phone = "none", list = false } = await req.json();

    let transport = await createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const ContentEmail = `
    <h1>${name}</h1>
    
    <br />

    <h2>${subject + " " + service}</h2>
    
    <p>${serviceName}</p>
  
    <br />
    
    <p>Email del cliente: ${email}</p>
    <p>Numero del cliente: ${phone}</p>
    
    `;

    await transport.sendMail(
      {
        from: {
          name:name,
          address: process.env.EMAIL_USER
        },
        to: process.env.EMAIL_USER,
        subject: subject || "",
        html: list ? list : ContentEmail ,
      })

      return NextResponse.json({
        message: "The email has been sent successfully!",
        status: 200,
      });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message:"Failed to send the email" }, { status:500 })
  }
}

