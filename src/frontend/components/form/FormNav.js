import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import './form.css';

function FormNav() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const validateForm = () => {
    const errors = {};

    if (!name) {
      errors.name = 'Name is required';
    }

    if (!email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Email is invalid';
    }

    if (!message) {
      errors.message = 'Message is required';
    }

    setErrors(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const isValid = validateForm();

    if (isValid) {
      setSubmitted(true);
      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <div className="form-container">
      <h3>Contact Us</h3>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formName">
          <Form.Label className="form-label">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={handleNameChange}
            isInvalid={!!errors.name}
          />
          <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formEmail">
          <Form.Label className="form-label">Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            isInvalid={!!errors.email}
          />
          <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formMessage">
          <Form.Label className="form-label">Message</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter your message"
            value={message}
            onChange={handleMessageChange}
            isInvalid={!!errors.message}
          />
          <Form.Control.Feedback type="invalid">{errors.message}</Form.Control.Feedback>
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>

      {submitted && <div className="success-message">Form submitted successfully!</div>}
    </div>
  );
}

export default FormNav;
