import { renameProp } from "@/utils/renameProp";
import { createTransport } from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {

  try {

    const body = await req.json();

    renameProp(body, "pickUpFormated", "pick_up")
    renameProp(body, "dropOffFormated", "drop_off")
    renameProp(body, "pickUpLocation", "pick_up_location")
    renameProp(body, "dropOffLocation", "drop_off_location")
    
    let transport = await createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const rentalEmail = `
    <h1>${body.name} quiere reservar ${body.service}</h1>
    <p>Email del cliente: ${body.email}</p>
    <p>Numero del cliente: ${body.phone}</p>
    <br />
    <h2>Detalles de la reserva:</h2>
    <ul>
    ${Object.keys(body).map(key => {
      if (body[key]) {
        return `<li>${key}: ${body[key]}</li>`;
      } else {
        return '';
      }
    }).join('')}
  </ul>
    `;

    await transport.sendMail(
      {
        from: {
          name:body.Name,
          address: process.env.EMAIL_USER
        },
        to: process.env.EMAIL_USER,
        subject: `${body.name} quiere rentar ${body.service}`,
        html: rentalEmail
    })

      return NextResponse.json({
        message: "The email has been sent successfully!",
        body,
        status: 200,
      });

  } catch (error) {
    console.log(error);
    return NextResponse.json({ message:"Failed to send the email" }, { status:500 })
  }
}