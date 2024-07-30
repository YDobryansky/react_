// src/Greeting.jsx
import React from 'react';

const Greeting = ({ firstName, lastName, birthDate }) => {
  // Function to calculate age based on birthDate
  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    let age = today.getFullYear() - birthDateObj.getFullYear();
    const monthDifference = today.getMonth() - birthDateObj.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDateObj.getDate())) {
      age--;
    }
    return age;
  };

  const age = calculateAge(birthDate);

  return (
    <div className="greeting">
      My name is {firstName} {lastName}. I am {age} years old
    </div>
  );
};

export default Greeting;


