import React, { useEffect, useState } from 'react';

function App() {
  const [message, setMessage] = useState('Loading...');

  useEffect(() => {
    fetch('http://localhost:5000')
      .then(response => response.text())
      .then(data => setMessage(data))
      .catch(error => {
        console.error('Error fetching data from API:', error);
        setMessage('Error fetching data');
      });
  }, []);

  return (
    <div>
      <h1>Hello, World from React!</h1>
      <p>Message from Python API: {message}</p>
    </div>
  );
}

export default App;
