import nodemailer from "nodemailer";

const emailResetPassword = async (datos) =>{
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
      });
    const {email, nombre, token} = datos;

    //Enviar email

    const info = await transporter.sendMail({
        from: 'APV - Administrador',
        to: email,
        subject: 'Reestablecer contraseña',
        text: 'Reestablecer contraseña',
        html: `<p> Hola ${nombre}, has solicitado reestablecer tu contraseña. </p>
            <p> 
                Haz click en el siguiente enlace para generar la nueva contraseña:
                <a href="${process.env.FRONTEND_URL}/reset-password/${token}">Reestablecer contraseña</a>
            </p>

            <p> Si no creaste esta cuenta, puedes ignorar este mensaje </p>
        `
    });

    console.log("mensaje enviado: %s", info.messageId);
}

export default emailResetPassword;