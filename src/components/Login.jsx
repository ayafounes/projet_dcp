import React, { useState } from 'react';
import { Button } from 'react-bootstrap'; // Import Button from react-bootstrap

const App = () => {
  const [showLogin, setShowLogin] = useState(false); // State to control login form visibility

  // Function to handle "Contact" button click
  const handleContactClick = () => {
    setShowLogin(true); // Show login form when the button is clicked
  };

  return (
    <div>
      {/* Button to trigger login form display */}
      <Button type="button" className="custom-button" onClick={handleContactClick}>Contact</Button>

      {/* Conditional rendering of the login form */}
      {showLogin && <Login />}
    </div>
  );
};

const Login = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    // Basic validation
    if (!fullName || !email || !password) {
      setError('Please fill in all fields');
      return;
    }

    // Submit the login details (e.g., send to a backend or local validation)
    console.log('Full Name:', fullName);
    console.log('Email:', email);
    console.log('Password:', password);

    // Clear the form after submission (optional)
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className="login-container" style={{ maxWidth: '400px', margin: '0 auto', padding: '20px' }}>
      <h2 style={{ textAlign: 'center' }}>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="fullName">Full Name: </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          />
        </div>
        {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
        <button type="submit" style={{ width: '100%', padding: '10px', backgroundColor: 'rgb(246, 109, 59)', color: 'white', border: 'none', fontSize: '16px' }}>Login</button>
      </form>
    </div>
  );
};

export default App;
