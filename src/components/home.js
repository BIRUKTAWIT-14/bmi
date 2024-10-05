import React, { useState } from 'react';

const HOME = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState('');

  const calculateBMI = (event) => {
    event.preventDefault();
    setError('');

    const weightValue = parseFloat(weight);
    const heightValue = parseFloat(height);

    if (!weightValue || !heightValue || heightValue <= 0) {
      setError('Please enter valid weight and height values.');
      return;
    }

    const bmiValue = weightValue / (heightValue * heightValue);
    setBmi(bmiValue.toFixed(2));
  };

  const styles = {
    container: {
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      textAlign: 'center',
      backgroundColor: '#fff',
      borderRadius: '8px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    },
    heading: {
      color: '#333',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      display: 'block',
      marginBottom: '5px',
      color: '#555',
    },
    input: {
      width: 'calc(100% - 20px)',
      padding: '10px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      transition: 'border-color 0.3s',
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 15px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      transition: 'background-color 0.3s',
    },
    error: {
      color: 'red',
    },
    result: {
      marginTop: '20px',
      backgroundColor: '#f8f9fa',
      border: '1px solid #ccc',
      borderRadius: '4px',
      padding: '15px',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>BMI Calculator</h1>
      <form onSubmit={calculateBMI}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Weight (kg):
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>
            Height (m):
            <input
              type="number"
              step="0.01"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
              style={styles.input}
            />
          </label>
        </div>
        <button type="submit" style={styles.button}>Calculate BMI</button>
      </form>
      {error && <p style={styles.error}>{error}</p>}
      {bmi && (
        <div style={styles.result}>
          <h2>Your BMI: {bmi}</h2>
          <p>
            {bmi < 18.5
              ? 'You are underweight.'
              : bmi < 24.9
              ? 'You have a normal weight.'
              : bmi < 29.9
              ? 'You are overweight.'
              : 'You are obese.'}
          </p>
        </div>
      )}
    </div>
  );
};

export default HOME;
