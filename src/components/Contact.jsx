import React, { useState } from 'react';

import contact from '../assets/images/hero/bg3.jpg';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [message, setMessage] = useState('');

  const submitForm = (event) => {
    event.preventDefault();

    if (name === '' && email === '' && text === '') {
      console.log('error');
    } else {
      console.log('success');
      setMessage('Thank you for contacting us, we will get back to you!!!');
    }
  };
  return (
    <section style={{ backgroundImage: `url(${contact})` }}>
      <div className="mx-auto container py-12 text-white">
        <h1 className="text-center text-3xl pb-12">Contact Us Now</h1>
        <form>
          <p className="text-primary-200 font-semibold text-lg">{message}</p>
          <div className="grid lg:grid-cols-2 gap-6 py-6">
            <input
              type="text"
              placeholder="Name"
              required
              onChange={(event) => setName(event.target.value)}
              className="w-full bg-gray-200 rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />

            <input
              type="text"
              placeholder="Email Address"
              required
              onChange={(event) => setEmail(event.target.value)}
              className="w-full bg-gray-200 rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <textarea
            placeholder="Message"
            required
            onChange={(event) => setText(event.target.value)}
            className="w-full bg-gray-200 rounded border border-gray-300 focus:border-primary-400 focus:ring-2 focus:ring-primary-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>

          <div className="flex justify-end my-5 px-1">
            <button
              onClick={submitForm}
              type="button"
              className="border-2 px-[16px] py-[8px] text-[20px] text-primary-200 border-primary-200"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
