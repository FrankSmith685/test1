import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

// Ruta de la carpeta donde se guardan los archivos
const uploadsDir = path.resolve('uploads');

export async function POST(req) {
  try {
    // Verificar si existen archivos en la carpeta
    const files = fs.readdirSync(uploadsDir);
    const { 
      email, 
      vorname,
      nachname,
      telefon,
      firma,
      stadt,
      position,
      nachricht,
      akzeptiereKommerzielleInfos,
      akzeptiereDatenschutz,
      cv
    } = await req.json(); 

    
      if (!files || files.length === 0 && cv === true) {
        return new Response(
          JSON.stringify({ error: 'No hay archivos en la carpeta uploads' }),
          { status: 400 }
        );
      }
  
      // Encontrar el archivo más reciente
      const latestFile = cv && files
        .map((file) => ({
          file,
          time: fs.statSync(path.join(uploadsDir, file)).mtime.getTime(),
        }))
        .sort((a, b) => b.time - a.time)[0];
  
      const latestFilePath = cv ? path.join(uploadsDir, latestFile.file) : null;
  
    
    // Configura el transportador de Nodemailer
    const transporter = nodemailer.createTransport({
      host: 'smtp.strato.com',
      port: 587,
      secure: false,
      auth: {
        user: 'kontakt@roggero-beratung.de',
        pass: 'RoggB2024#net',
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    // Construir el mensaje
    const mailOptions = {
      from: 'kontakt@roggero-beratung.de',
      to: 'kontakt@roggero-beratung.de',
      subject: 'Último archivo subido',
      html: `
        <h1>Nuevo mensaje de contacto</h1>
        <p><strong>Vorname:</strong> ${vorname}</p>
        <p><strong>Nachname:</strong> ${nachname}</p>
        <p><strong>Telefon:</strong> ${telefon}</p>
        <p><strong>Firma:</strong> ${firma}</p>
        <p><strong>Stadt:</strong> ${stadt}</p>
        <p><strong>Position:</strong> ${position}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Nachricht:</strong> ${nachricht}</p>
        <p><strong>Akzeptiere Kommerzielle Infos:</strong> ${akzeptiereKommerzielleInfos}</p>
        <p><strong>Akzeptiere Datenschutz:</strong> ${akzeptiereDatenschutz}</p>
        <p>Archivo adjunto: ${cv ? latestFile.file : 'No tiene archivo adjunto'}</p>
      `,
      attachments: cv && [
        {
          filename: latestFile.file,
          path: latestFilePath,
        },
      ],
    };

    // Enviar correo
    const info = await transporter.sendMail(mailOptions);
    console.log('Correo enviado: %s', info.messageId);

    // Eliminar archivo después de enviarlo
    if(latestFilePath){
      fs.unlink(latestFilePath, (err) => {
        if (err) console.error('Error al eliminar el archivo:', err);
      });
    }

    return new Response(
      JSON.stringify({ message: 'Correo enviado exitosamente' }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'No se pudo procesar la solicitud' }),
      { status: 500 }
    );
  }
}
