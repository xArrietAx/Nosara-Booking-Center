import { NextResponse } from "next/server";
import { createTransport } from "nodemailer";
import emailTypes from "@/config/emailTypes.json";

export async function POST(req) {

  try {

    const body = await req.json();

    const startDate = new Date(body.startDate);
    const endDate = new Date(body.endDate);
 
    const options = { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit', 
      timeZoneName: 'short' 
    };

    const startDateFormatted = startDate.toLocaleString('es-ES', options);
    const endDateFormatted = endDate.toLocaleString('es-ES', options);

    body.startDate = startDateFormatted
    body.endDate = endDateFormatted

    delete body.isTourOrHouse 

    if (body.endDate === "Invalid Date" || body.startDate === "Invalid Date") {
      delete body.startDate
      delete body.endDate
    }

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
    <h1>${body.name} quiere reservar ${body.service || ""}</h1>
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

    const ContentContactUsEmail = `
    <h1>${body.name}</h1>
    <h2>${body.subject}</h2>
    <p>Email del cliente: ${body.email}</p>
    <br />
    <p>${body.message}</p>
    `;

    const PublishHouse = `
    <h1>Alguien quiere publicar una casa</h1>
    <p>Email del cliente: ${body.email}</p>
    `;

    function EmailHtml(body) {
      switch (body.type) {
        case emailTypes.Contact: return ContentContactUsEmail 

        case emailTypes.Book: return ContentBookEmail

        case emailTypes.PublishHouse: return PublishHouse

        default: ""
      }
    }

    await transport.sendMail(
      {
        from: {
          name:body.Name,
          address: process.env.EMAIL_USER
        },
        to: process.env.EMAIL_USER,
        subject: body.subject ? body.subject : body.service,
        html: EmailHtml(body)
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