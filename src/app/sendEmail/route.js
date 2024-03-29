import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    let transport = await createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const ContentBookEmail = `
    <h1>${body.Name} quiere reservar ${body.ServiceName}</h1>
    <p>Email del cliente: ${body.Email}</p>
    <p>Numero del cliente: ${body.Phone}</p>
    ${body.Information ? `
    <br />
    <h2>Comentarios</h2>  
    <p>${body.Information}</p>`: ''
  }
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

const ContentContactUsEmail = `
    <h1>${body.Name}</h1>
    <p>Email del cliente: ${body.Email}</p>
    <br />
    <p>${body.Message}</p>
`;

    await transport.sendMail(
      {
        from: {
          name:body.Name,
          address: process.env.EMAIL_USER
        },
        to: process.env.EMAIL_USER,
        subject: body.ContactUs ? body.Subject : body.ServiceName,
        html: body.ContactUs ? ContentContactUsEmail : ContentBookEmail
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

