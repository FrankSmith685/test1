'use client'
import React, { useEffect, useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { useDropzone } from 'react-dropzone';
import {
  Box,
  Typography,
  Avatar,
  IconButton
} from '@mui/material';
import { CloudUpload, Delete } from '@mui/icons-material';
import de from '../languaje/de';
import { useAppState } from '../hooks/useAppState';
import es from '../languaje/es';
import en from '../languaje/en';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

const Kontakt = () => {
  const navigate = useRouter();

  const [formType, setFormType] = useState('firma');
  const [formValues, setFormValues] = useState({
    vorname: '',
    nachname: '',
    telefon: '',
    firma: '',
    stadt: '',
    position: '',
    email: '',
    nachricht: '',
    akzeptiereKommerzielleInfos: false,
    akzeptiereDatenschutz: false,
    cv: null
  });

  const [alertMessage, setAlertMessage] = useState(null);
const [alertType, setAlertType] = useState('success'); // 'success' or 'error'


  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormValues(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
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

        setFormValues(prev => ({
          ...prev,
          cv: acceptedFiles[0]
        }));
    } catch (error) {
        console.error('Error en la solicitud:', error);
    }
};

  const handleRemoveCv = () => {
    setFormValues(prev => ({
      ...prev,
      cv: null
    }));
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    vorname: formValues.vorname,
    nachname: formValues.nachname,
    telefon: formValues.telefon,
    firma: formValues.firma,
    stadt: formValues.stadt,
    position: formValues.position,
    email: formValues.email,
    nachricht: formValues.nachricht,
    akzeptiereKommerzielleInfos: formValues.akzeptiereKommerzielleInfos,
    akzeptiereDatenschutz: formValues.akzeptiereDatenschutz,
    cv: formValues.cv ? true : false,
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
        setFormValues(prev => ({
          ...prev,
          vorname: '',
          nachname: '',
          telefon: '',
          firma: '',
          stadt: '',
          position: '',
          email: '',
          nachricht: '',
          akzeptiereKommerzielleInfos: false,
          akzeptiereDatenschutz: false,
          cv: null
        }));
    } else {
      alert(data.error || 'Failed to send email.');
    }
  } catch (error) {
    // alert('Failed to send email.');
    console.log(error);
  }
};

  const { getRootProps, getInputProps } = useDropzone({
    onDrop: handleDrop,
    accept: ".pdf,.doc,.docx"
  });

  const handleClickHome = () => {
    navigate.push("/");
};

const optimizedImageURL = (url) => {
    const cloudinaryBaseURL = 'https://res.cloudinary.com/dievolijo/image/upload/';
    return `${cloudinaryBaseURL}c_scale,w_2000/${url}`;
};



const [data,setData] = useState(de.Kontakt);
const {tipoIdioma} = useAppState();

useEffect(()=>{
    if(tipoIdioma==='de'){
        setData(de.Kontakt);
    }else if(tipoIdioma==='en'){
        setData(en.Kontakt);
    }else{
        setData(es.Kontakt);
    }
},[tipoIdioma]);


  return (
    <>
      <div className="w-full h-screen bg-bg_favorite_1 relative">
        <img 
        src={optimizedImageURL("v1720048164/r5phhfvrwr57yofnqlsu.jpg")} 
        alt="NOT FOUND" 
        className="absolute top-0 left-0 w-full h-full object-cover z-0" 
        />
        <div className="bg-bg_favorite_1 flex flex-col justify-center items-center md:items-end h-full z-20 relative space-y-4 p-4 pt-32 sm:pt-48 md:pt-64 sm:p-6 md:p-8">
          <div className="w-full md:w-1/2 h-auto">
              <h2 className="text-white font-bold text-2xl sm:text-4xl  md:text-5xl font-bell text-center md:text-end px-2">
                {data.title} 
              </h2>
          </div>
        </div>
      </div>
      <div className="container mx-auto w-11/12 md:w-3/5 pb-10">
        <p className="text-base text-gray-400 py-10">
            <span onClick={handleClickHome} className="hover:cursor-pointer text-gray-800 font-bold">
                Sandra Roggero <span className="text-gray-500 font-medium text-xs">Beratung</span>
            </span>
            {' > '}
            {data.title}
        </p>
        <div className="flex justify-center py-4">
            <button
                onClick={() => setFormType('firma')}
                className={`px-4 py-2 font-bold ${formType === 'firma' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'} rounded-l`}
            >
                {data.option1} 
            </button>
            <button
                onClick={() => setFormType('bewerber')}
                className={`px-4 py-2 font-bold ${formType === 'bewerber' ? 'bg-gray-800 text-white' : 'bg-gray-200 text-gray-700'} rounded-r`}
            >
                {data.option2} 
            </button>
        </div>
        <div className="w-full maxlg mx-w--auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 ">
            <form onSubmit={handleSubmit} className="grid grid-cols-2  gap-4 ">
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="vorname">{data.nombre}</label>
                    <input
                        type="text"
                        id="vorname"
                        name="vorname"
                        value={formValues.vorname}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="nachname">{data.apellido}</label>
                    <input
                        type="text"
                        id="nachname"
                        name="nachname"
                        value={formValues.nachname}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="w-full col-span-2 sm:col-span-1">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="telefon">{data.telefono}</label>
                    <input
                        type="tel"
                        id="telefon"
                        name="telefon"
                        value={formValues.telefon}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                {formType === 'firma' && (
                    <>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="firma">{data.empresa}</label>
                            <input
                                type="text"
                                id="firma"
                                name="firma"
                                value={formValues.firma}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="stadt">{data.stadt}</label>
                            <input
                                type="text"
                                id="stadt"
                                name="stadt"
                                value={formValues.stadt}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                        <div className="w-full col-span-2 sm:col-span-1">
                            <label className="block mb-2 text-sm text-gray-600" htmlFor="position">{data.position}</label>
                            <input
                                type="text"
                                id="position"
                                name="position"
                                value={formValues.position}
                                onChange={handleChange}
                                required
                                className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                            />
                        </div>
                    </>
                )}
                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="email">{data.email}</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formValues.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    />
                </div>
                <div className="col-span-2">
                    <label className="block mb-2 text-sm text-gray-600" htmlFor="nachricht">{data.mensaje}</label>
                    <textarea
                        id="nachricht"
                        name="nachricht"
                        value={formValues.nachricht}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-3 py-2 border rounded-md focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200"
                    ></textarea>
                </div>
                {
                  formType === 'bewerber' && (
                    <div className="col-span-2 ">
                      <Box {...getRootProps()} p={2} border="2px dashed #ccc" borderRadius="5px" textAlign="center" className="hover:cursor-pointer">
                          <input {...getInputProps()} />
                          <CloudUpload style={{ fontSize: '2rem', color: '#ccc' }} />
                              <p className="text-base mt-2">
                                {data.archivo1}
                              </p>
                              <p className="text-sm mt-2">
                                {data.archivo2}
                              </p>
                      </Box>
                      {formValues.cv && (
                          <Box display="flex" alignItems="center" justifyContent="space-between" mt={2}>
                              <Avatar>
                                  <CloudUpload />
                              </Avatar>
                              <Typography variant="body1" className="text-base">{formValues.cv.name}</Typography>
                              <IconButton onClick={handleRemoveCv}>
                                  <Delete />
                              </IconButton>
                          </Box>
                      )}
                    </div>
                  )
                }
                <div className="col-span-2">
                    {formType === 'firma' && (
                        <label className="flex items-center text-gray-700">
                            <input
                                type="checkbox"
                                name="akzeptiereKommerzielleInfos"
                                checked={formValues.akzeptiereKommerzielleInfos}
                                onChange={handleChange}
                                className="form-checkbox h-4 w-4 mr-2"
                            />
                            {data.firma1}
                            <Link href={data.firma2Link} className="font-normal text-gray-to-blue-600">{data.firma2}</Link>
                            
                        </label>
                    )}
                    <label className="flex items-center text-gray-700">
                        <input
                            type="checkbox"
                            name="akzeptiereDatenschutz"
                            checked={formValues.akzeptiereDatenschutz}
                            onChange={handleChange}
                            required
                            className="form-checkbox h-4 w-4 mr-2"
                        />
                        {formType === 'firma' ? (
                                <>
                                {data.firma4}
                                    <Link href={data.firma5Link} className="font-normal ml-1 text-gray-to-blue-600">{data.firma5}</Link>.
                                </>
                            ) : (
                                <>
                                    {data.firma6}
                                    <Link href={data.firma5Link} className="font-normal ml-1 text-gray-to-blue-600">{data.firma7}</Link> 
                                </>
                        )}
                    </label>
                </div>
                <div className="col-span-2">
                    <button
                        type="submit"
                        className="w-full md:w-1/3 py-2 bg-gray-800 text-white font-bold rounded transition duration-200 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-50"
                    >
                        {data.senden}
                    </button>
                </div>
            </form>
        </div>
      </div>
      {alertMessage && (
        <div className={`alert ${alertType === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} p-4 mb-4 rounded`}>
            {alertMessage}
        </div>
        )}

    </>
  );
};

export default Kontakt;