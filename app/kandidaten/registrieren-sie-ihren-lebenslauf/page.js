'use client'
import { useEffect, useState } from "react";
import { Container, Typography, Box, IconButton, Avatar } from '@mui/material'; 
import { CloudUpload, Delete } from '@mui/icons-material';
import { useDropzone } from 'react-dropzone';
import { useAppState } from "../../hooks/useAppState";
import de from "../../languaje/de";
import es from "../../languaje/es";
import en from "../../languaje/en";
import { useRouter } from "next/navigation";

const RegistrierenSieIhrenLebenslauf = () => {
  const { tipoIdioma } = useAppState();
  const navigate = useRouter();
  const [email, setEmail] = useState('');
  const [cv, setCv] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleClickHome = () => {
    navigate.push("/");
  };

  const handleDrop = async (acceptedFiles) => {
    const formData = new FormData();
    formData.append('file', acceptedFiles[0]);

    // Verifica el contenido del FormData
    for (const pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
        await fetch('/api/upload', {
            method: 'POST',
            body: formData,
        });

        setCv(acceptedFiles[0]);
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      email: email,
      nachricht: message,
      cv: cv ? true : false,
    };
  
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (response.ok) {
        alert('Correo enviado correctamente');
        setEmail('');
        setCv(null);
        setMessage('');
      } else {
        alert(data.error || 'Failed to send email.');
      }
    } catch (error) {
      alert('Error al enviar el correo');
    }
  };

  const handleRemoveCv = () => {
    setCv(null);
  };

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: {
      'application/pdf': ['.pdf'],
      'application/msword': ['.doc'],
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document': ['.docx']
    },
    multiple: false
  });

  const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_2000/${url}`;
  };

  const [data, setData] = useState(de.Kandidaten);

  useEffect(() => {
    if (tipoIdioma === 'de') {
      setData(de.Kandidaten);
    } else if (tipoIdioma === 'en') {
      setData(en.Kandidaten);
    } else {
      setData(es.Kandidaten);
    }
  }, [tipoIdioma]);

  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative">
        <img
          src={optimizedImageURL("v1720047881/tai02jjyhgvlyd7mtu8q.jpg")}
          alt="Registrieren Sie Ihren Lebenslauf"
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          loading="lazy"
        />
        <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
          <div className="w-full md:w-1/2 h-auto">
            <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
              {data.RegistrierenSieIhrenLebenslauf.title}
            </h2>
          </div>
        </div>
      </div>
      <Container maxWidth="md" className="pb-10">
        <p className="text-base text-gray-400 py-10">
          <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-bold">
            Sandra Roggero <span className="text-gray-500 font-medium text-xs">Beratung</span>
          </span>
          {' > '}
          {data.RegistrierenSieIhrenLebenslauf.title}
        </p>
        <p className="text-gray-700 text-start w-full pb-1 px-2">
          {data.RegistrierenSieIhrenLebenslauf.description}
        </p>
        <form onSubmit={handleSubmit} className="w-full maxlg mx-w--auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              {data.RegistrierenSieIhrenLebenslauf.email}
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              placeholder={data.RegistrierenSieIhrenLebenslauf.email}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <Box {...getRootProps()} p={2} border="2px dashed #ccc" borderRadius="5px" textAlign="center" className="hover:cursor-pointer">
              <input {...getInputProps()} />
              <CloudUpload style={{ fontSize: '2rem', color: '#ccc' }} />
              <p className="text-base mt-2">
                {data.RegistrierenSieIhrenLebenslauf.file1}
              </p>
              <p className="text-sm mt-2">
                {data.RegistrierenSieIhrenLebenslauf.file2}
              </p>
            </Box>
            {cv && (
              <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                <Avatar>
                  <CloudUpload />
                </Avatar>
                <Typography variant="body1" className="text-base">{cv.name}</Typography>
                <IconButton onClick={handleRemoveCv}>
                  <Delete />
                </IconButton>
              </Box>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              {data.RegistrierenSieIhrenLebenslauf.message}
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              placeholder={data.RegistrierenSieIhrenLebenslauf.message2}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <div className="flex items-center justify-start">
            <button
              type="submit"
              variant="contained"
              color="primary"
              className="w-1/3 py-2 bg-bg_favorite_3 hover:bg-bg_favorite_4 text-white font-bold rounded transition duration-200"
            >
              {data.RegistrierenSieIhrenLebenslauf.senden}
            </button>
          </div>
        </form>
      </Container>
    </>
  );
}

export default RegistrierenSieIhrenLebenslauf;
