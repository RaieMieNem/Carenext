import nodemailer from "nodemailer";
import { env } from "../env";

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASS,
  },
});



export async function sendEmail({
  to,
  subject,
  text,
}: {
  to: string;
  subject: string;
  text: string;
}) {
  const urlMatch = text.match(/\(?(https?:\/\/[^\s)]+)/); // On extrait l'URL du message
  const resetLink = urlMatch ? urlMatch[1] : "#";

  await transporter.sendMail({
    from: env.EMAIL_FROM,
    to,
    subject,
    html: `
    <div style="font-family: Arial, sans-serif; background-color: #f4f4f4; padding: 30px;">
      <div style="max-width: 600px; margin: auto; background-color: #ffffff; border-radius: 8px; padding: 30px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <h2 style="color: #333333;">Réinitialisation de votre mot de passe</h2>
        <p style="color: #555555; font-size: 16px;">
          Bonjour,
        </p>
        <p style="color: #555555; font-size: 16px;">
          Vous avez demandé à réinitialiser votre mot de passe CareInvest. Veuillez cliquer sur le lien ci-dessous ou le copier dans votre navigateur pour continuer :
        </p>
        <p style="color: #333333; font-size: 16px; font-weight: bold;">
        <div style="text-align: center; margin: 20px 0;">
          <a href="${resetLink}" style="background-color: rgba(24,24,27); color: white; padding: 10px 12px; border-radius: 5px; text-decoration: none; font-weight: bold;">
            Réinitialiser le mot de passe
          </a>
        </div>

        </p>
        <p style="color: #555555; font-size: 16px;">
          Si vous n'êtes pas à l'origine de cette demande, vous pouvez ignorer cet e-mail en toute sécurité.
        </p>
        <p style="color: #555555; font-size: 16px;">
          Merci,<br />
          L’équipe de support CareInvest
        </p>
      </div>
    </div>
  `  
  });
}
