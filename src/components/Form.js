import React, { useState } from 'react';
import './Form.css'; // Make sure to import your CSS file

function App() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First Name is required';
    if (!formData.lastName) newErrors.lastName = 'Last Name is required';
    if (!formData.email) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        newErrors.email = 'Email is invalid';
      }
  
    if (!formData.password) {
        newErrors.password = 'Password is required';
      } else if (formData.password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form is valid, handle form submission (e.g., send data to server)
      console.log('Form data submitted:', formData);
    }
  };

  return (
    <div className="container">
      <div className="brand-title">Welcome!</div>
      <form action="#" id="form" className="form" onSubmit={handleSubmit}>
        <div className="inputs">
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            placeholder="Eswar"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}

          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Kanakaraj"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          {errors.lastName && <p className="error">{errors.lastName}</p>}

          <label htmlFor="email">EMAIL</label>
          <input
            type="email"
            placeholder="example@test.com"
            id="email"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="password">PASSWORD</label>
          <input
            type="password"
            placeholder="Min 6 characters long"
            id="password"
            value={formData.password}
            onChange={handleChange}
          />
          {errors.password && <p className="error">{errors.password}</p>}

          <button className="glow-on-hover" type="submit">
            Sign Up
          </button>
        </div>
      </form>
      <div id="founder" align="end">
        Designed by <span>Eswar</span>
      </div>
    </div>
  );
}

export default App;
