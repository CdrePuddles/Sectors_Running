import React, { useState, createContext, useContext } from "react";
import "./Contact.css"
import { useAuth } from "./AuthContext";


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
      });
      const [success, setSuccess] = useState(false);
    
      const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form Data:", formData);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      };
    
      return (
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your email"
              required
            />
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your message"
              required
            />
            <button type="submit">Submit</button>
          </form>
          {success && <p>Thank you! Your message has been sent.</p>}
        </div>
      );
    };
    
  

export default Contact;