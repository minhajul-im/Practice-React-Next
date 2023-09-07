import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
/**
 * @param {any} req
 * @param {any} res
 * @returns {json}
 */

export const GET = async (req, _res) => {
  const { searchParams } = new URL(req.url);

  const getEmailFromParams = searchParams.get("email");

  try {
    const TransporterEmail = nodemailer.createTransport({
      host: "mail.teamrabbil.com",
      port: 25,
      secure: false,
      auth: {
        user: "info@teamrabbil.com",
        pass: "~sR4[bhaC[Qs",
      },
      tls: { rejectUnauthorized: false },
    });

    const emailTemplate = {
      form: "info@teamrabbil.com",
      to: getEmailFromParams,
      subject: "Testing Purpose Email",
      text: "Heyooo! How's it going?",
      html: <h3>https://www.minhajul.com/</h3>,
    };

    TransporterEmail.sendMail(emailTemplate);
    return NextResponse.json(
      {
        message: "Successfully, Your Email Sent!",
      },
      { status: 200 }
    );
  } catch (e) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }
};
