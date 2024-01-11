import React from 'react';
import './Footer.css';

const EducationFooter = () => {
  const educationHistory = [
    {
      degree: '',
      school: 'Universitas Contoh',
      year: '2010 - 2014',
    },
    {
      degree: 'Magister Teknik Informatika',
      school: 'Universitas Lain',
      year: '2015 - 2017',
    },
    // Tambahkan riwayat pendidikan lainnya sesuai kebutuhan
  ];

  return (
    <footer className="education-footer">
      <h3></h3>
      <ul>
        {educationHistory.map((education, index) => (
          <li key={index}>
            <strong>{education.degree}</strong> - {education.school} ({education.year})
          </li>
        ))}
      </ul>
    </footer>
  );
};

export default EducationFooter;
