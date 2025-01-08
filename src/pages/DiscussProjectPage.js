/* eslint-disable linebreak-style */
/* eslint-disable react/destructuring-assignment */
// /* eslint-disable react/jsx-filename-extension */
// import React, { useState, useEffect } from 'react';
// import { DiscussForm } from 'parts/DiscussForm';

// import Header from 'parts/Header';
// import Footer from 'parts/Footer';

// export const DiscussProjectPage = () => {
//   const [data, setData] = useState({
//     name: '',
//     company: '',
//     email: '',
//     phone: '',
//     projectIdea: '',
//   });

//   useEffect(() => {
//     window.scroll(0, 0);
//   }, []);

//   const onChange = (event) => {
//     setData((prevData) => ({
//       ...prevData,
//       [event.target.name]: event.target.value,
//     }));
//   };

//   const resetForm = () => {
//     setData({
//       name: '',
//       company: '',
//       email: '',
//       phone: '',
//       projectIdea: '',
//     });
//   };

//   return (
//     <>
//       <Header />
//       <DiscussForm data={data} onChange={onChange} resetForm={resetForm} />
//       <Footer />
//     </>
//   );
// };

/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as emailjs from '@emailjs/browser';
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from 'react-toastify';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'react-toastify/dist/ReactToastify.css';

import Header from 'parts/Header';
import Footer from 'parts/Footer';
import { Form } from 'elements/Form';
import Button from 'elements/Button';

export const ContactUsPage = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const onChange = (event) => {
    setData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  };

  const resetForm = () => {
    setData({
      name: '',
      email: '',
      message: '',
    });
  };

  const submitEmail = () => {
    const { name, email, message } = data;

    const templateParams = {
      from_name: `${name} ( ${email} )`,
      to_name: 'YourProjectTeam',
      message,
    };

    if (name && email && message) {
      emailjs
        .send(
          'service_h4gtndg',
          'template_a9tvs7a',
          templateParams,
          'user_csqIxzN5mKsl1yw4ffJzV'
        )
        .then(
          () => {
            toast.success('Thank you! We’ll get back to you soon.');
            resetForm();
          },
          (error) => {
            toast.error('Something went wrong. Please try again.');
          }
        );
    } else {
      toast.error('Please fill in all the fields.');
    }
  };

  return (
    <>
      <Header />
      <section className="flex flex-col container mx-auto mt-10 px-4 lg:px-0">
        <Fade direction="down" triggerOnce>
          <h1 className="text-5xl text-theme-blue text-center font-bold">
            Contact Us
          </h1>
        </Fade>

        <Fade direction="up" triggerOnce>
          <p className="font-light text-lg text-gray-500 text-center mb-8">
            Have any questions or suggestions about our project? Feel free to reach out using the form below.
          </p>
        </Fade>

        <Fade direction="up" triggerOnce>
          <div className="flex flex-col space-y-6 max-w-lg mx-auto">
            <Form
              id="name"
              name="name"
              type="text"
              value={data.name}
              placeholder="Your Name"
              className="px-4 py-2 border border-gray-300 rounded-md"
              onChange={onChange}
            />
            <Form
              id="email"
              name="email"
              type="email"
              value={data.email}
              placeholder="Your Email"
              className="px-4 py-2 border border-gray-300 rounded-md"
              onChange={onChange}
            />
            <Form
              id="message"
              name="message"
              type="textarea"
              value={data.message}
              placeholder="Your Message"
              className="px-4 py-2 border border-gray-300 rounded-md h-32"
              onChange={onChange}
            />
            <Button
              className="text-xl w-full px-6 py-3 bg-theme-purple text-white rounded-md hover:bg-purple-700 transition duration-200 focus:outline-none"
              type="button"
              onClick={submitEmail}
            >
              Submit
            </Button>
          </div>
        </Fade>
        <ToastContainer />
      </section>
      <Footer />
    </>
  );
};