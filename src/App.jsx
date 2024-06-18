import React, { useState } from 'react';
import './index.css';

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    queryType: '',
    message: '',
    consent: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      alert(result.message);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center bg-green-100 h-screen gap-4">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 bg-white w-3/5 rounded-xl p-12 shadow-xl"
      >
        <h2 className="font-bold text-lg">Contact Us</h2>
        <div className="flex gap-4">
          <div className="flex flex-col w-1/2">
            <label htmlFor="firstName">First Name *</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="border-2 rounded-lg border-gray-400 p-2"
              required
            />
          </div>
          <div className="flex flex-col w-1/2">
            <label htmlFor="lastName">Last Name *</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="border-2 rounded-lg border-gray-400 p-2"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="email">E-mail Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border-2 rounded-lg border-gray-400 p-2"
            required
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="queryType">Query Type *</label>
          <div className="flex gap-4">
            <div className="border-2 rounded-lg border-gray-400 p-2 w-1/2">
              <input
                type="radio"
                name="queryType"
                value="General Enquiry"
                checked={formData.queryType === 'General Enquiry'}
                onChange={handleChange}
              />
              <span>General Enquiry</span>
            </div>
            <div className="border-2 rounded-lg border-gray-400 p-2 w-1/2">
              <input
                type="radio"
                name="queryType"
                value="Support Request"
                checked={formData.queryType === 'Support Request'}
                onChange={handleChange}
              />
              <span>Support Request</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <p>Message *</p>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className="border-2 rounded-lg border-gray-500 p-2 w-full"
          ></textarea>
        </div>
        <div className="flex gap-8">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleChange}
          />
          <p>I consent to being contacted by the team. *</p>
        </div>
        <button
          type="submit"
          className="text-white rounded-lg p-2 w-full bg-green-900 font-bold text-lg"
        >
          Submit
        </button>
      </form>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Erick-384😎</a>.
      </div>
    </div>
  );
}

export default App;
