import { NextResponse } from 'next/server';
import multer from 'multer';
import { promisify } from 'util';
import { resolve } from 'path';
import { mkdir } from 'fs/promises';
import fs from 'fs';

// Configura Multer para guardar archivos en `public/uploads`
const uploadDir = resolve('./uploads');
const storage = multer.diskStorage({
  destination: async (req, file, cb) => {
    await mkdir(uploadDir, { recursive: true }); // Crea la carpeta si no existe
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});
const upload = multer({ storage });

// Convertir Multer middleware a Promesa para usar en Route Handlers
const uploadMiddleware = promisify(upload.single('file'));

export async function POST(request) {
  try {
    // Usa Multer para manejar la subida de archivos
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No se envió ningún archivo' }, { status: 400 });
    }

    const buffer = await file.arrayBuffer();
    const filename = `${Date.now()}-${file.name}`;
    const filepath = resolve(uploadDir, filename);

    await mkdir(uploadDir, { recursive: true });
    await fs.promises.writeFile(filepath, Buffer.from(buffer));

    return NextResponse.json({
      message: 'Archivo subido con éxito',
      filepath: `/uploads/${filename}`,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Error al subir el archivo' }, { status: 500 });
  }
}

