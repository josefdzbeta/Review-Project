import nodemailer from "nodemailer";

const emailRegistro = async (datos) =>{
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
        subject: 'Verifica tu cuenta en APV',
        text: 'Verifica tu cuenta en APV',
        html: `<p> Hola ${nombre}, comprueba tu cuenta en APV. </p>
            <p> 
                Tu cuenta ya está lista, haz click en el siguiente enlace para finalizar el proceso de verificación:
                <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Verificar Cuenta</a>
            </p>

            <p> Si no creaste esta cuenta, puedes ignorar este mensaje </p>
        `
    });

    console.log("mensaje enviado: %s", info.messageId);
}

export default emailRegistro