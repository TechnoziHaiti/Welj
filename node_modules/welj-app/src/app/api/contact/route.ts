import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import path from 'path';

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json();

    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'Veuillez remplir tous les champs obligatoires.' },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT) || 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // 1. Email à l'administrateur (Welj)
    const adminMailPromise = transporter.sendMail({
      from: `"${firstName} ${lastName}" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `Nouveau Message (Contact Welj) : ${subject || 'Sans Sujet'}`,
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(process.cwd(), 'public', 'logo.png'),
          cid: 'weljlogo'
        }
      ],
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="background-color: #f4f6f8; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="background-color: #ffffff; padding: 25px 30px; text-align: center; border-bottom: 2px solid #f4f6f8;">
              <img src="cid:weljlogo" alt="WELJ Express Services" style="max-width: 130px; height: auto;" />
            </div>
            
            <!-- Body -->
            <div style="padding: 40px 35px;">
              <h2 style="color: #022f4b; font-size: 20px; margin-top: 0; margin-bottom: 25px;">Nouveau message via le formulaire</h2>
              
              <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; margin-bottom: 25px;">
                <p style="margin: 0 0 10px 0; font-size: 15px; color: #4a5568;"><strong>De :</strong> ${firstName} ${lastName} (<a href="mailto:${email}" style="color: #e12229;">${email}</a>)</p>
                <p style="margin: 0; font-size: 15px; color: #4a5568;"><strong>Sujet :</strong> ${subject || 'Non spécifié'}</p>
              </div>
              
              <div style="padding: 15px 20px; margin-bottom: 30px;">
                <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #2d3748; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    });

    // 2. Auto-réponse au client
    const clientMailPromise = transporter.sendMail({
      from: `"Welj Express Services" <${process.env.EMAIL_FROM}>`,
      to: email,
      subject: "Confirmation de réception - Welj",
      text: "Nous tenons à vous informer que nous avons bien reçu votre message.\n\nVous aurez notre réaction dans un bref délai. Notre équipe fait tout son possible pour traiter votre demande rapidement.\n\nMerci de votre confiance en Welj.",
      attachments: [
        {
          filename: 'logo.png',
          path: path.join(process.cwd(), 'public', 'logo.png'),
          cid: 'weljlogo'
        }
      ],
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
        </head>
        <body style="background-color: #f4f6f8; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; margin: 0; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05);">
            
            <!-- Header -->
            <div style="background-color: #ffffff; padding: 25px 30px; text-align: center; border-bottom: 2px solid #f4f6f8;">
              <img src="cid:weljlogo" alt="WELJ Express Services" style="max-width: 130px; height: auto;" />
            </div>
            
            <!-- Body -->
            <div style="padding: 45px 35px;">
              <h2 style="color: #022f4b; font-size: 22px; margin-top: 0; margin-bottom: 25px;">Bonjour ${firstName},</h2>
              
              <p style="font-size: 16px; line-height: 1.6; color: #4a5568; margin-bottom: 20px;">
                Nous tenons à vous informer que <strong>nous avons bien reçu votre message</strong>.
              </p>
              
              <div style="background-color: #f8fafc; padding: 20px 25px; margin: 30px 0; border-radius: 8px;">
                <p style="margin: 0; font-size: 15.5px; line-height: 1.6; color: #2d3748; font-style: italic;">
                  "Vous aurez notre réaction dans un bref délai. Notre équipe fait tout son possible pour traiter votre demande rapidement."
                </p>
              </div>
              
              <p style="font-size: 16px; line-height: 1.6; color: #4a5568; margin-top: 30px; margin-bottom: 0;">
                Merci de votre confiance en <strong>Welj</strong>.<br/>
                <span style="color: #a0aec0; font-size: 14px; margin-top: 5px; display: inline-block;">L'équipe support</span>
              </p>
            </div>
            
            <!-- Footer -->
            <div style="background-color: #fafafa; padding: 25px 35px; border-top: 1px solid #eaeaea; text-align: center;">
              <p style="font-size: 12px; font-weight: bold; color: #718096; margin: 0;">
                &copy; ${new Date().getFullYear()} Welj Express Services. Tous droits réservés.
              </p>
            </div>
            
          </div>
        </body>
        </html>
      `,
    });

    // Exécuter les deux envois en parallèle de manière robuste
    const [adminResult, clientResult] = await Promise.allSettled([adminMailPromise, clientMailPromise]);

    if (adminResult.status === 'rejected') {
      console.error('Erreur critique : Impossible d\'envoyer l\'email à l\'administrateur', adminResult.reason);
      throw new Error('Erreur lors de l\'envoi à l\'administrateur');
    }

    if (clientResult.status === 'rejected') {
      console.error('Avertissement : L\'email de confirmation au client n\'a pas pu être envoyé', clientResult.reason);
      // On ne jette pas d'erreur ici pour que le client voie quand même que son message a été transmis à l'admin
    }

    return NextResponse.json(
      { message: 'Messages traités avec succès' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { error: 'Erreur serveur lors de l\'envoi du message.' },
      { status: 500 }
    );
  }
}
