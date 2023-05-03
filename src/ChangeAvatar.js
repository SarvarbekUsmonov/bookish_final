import React, { useState } from 'react';
import Navbar from './components/Navbar';

const ChangeAvatar = () => {
  const [url, setUrl] = useState('');
  const [message, setMessage] = useState('');

  const handleChange = (event) => {
    setUrl(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!url) {
      setMessage('Please enter a URL for the image.');
      return;
    }

    try {
      const response = await fetch('http://localhost:4000/update/avatar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ newAvatar: url }),
        credentials: 'include',
      });

      if (response.ok) {
        setMessage('Avatar updated successfully.');
      } else {
        setMessage('Error updating avatar.');
      }
    } catch (error) {
      setMessage('Error updating avatar.');
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <form onSubmit={handleSubmit} className="text-center">
          <h1 className="mb-3">Change Avatar</h1>
          <input
            type="url"
            className="form-control"
            placeholder="Enter image URL"
            value={url}
            onChange={handleChange}
          />
          <button type="submit" className="btn btn-primary mt-3">
            Update Avatar
          </button>
        </form>
        {message && (
          <div className="alert alert-info mt-3" role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default ChangeAvatar;