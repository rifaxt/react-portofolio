// AboutMe.js
import React from 'react';
import './Aboutme.css';
import img from './img/p.jpg'; // Ganti dengan path gambar latar belakang

const AboutMe = () => {
  return (
    <section className="about-me">

    <div class="container">
        <img src={img} alt="Logo" class="logo" />
        <div class="text">
            <h2>Hallo Everyone</h2>
            <h5>Nama  : Siti Musrifah</h5>
            <h5>TTL   : Jember, 17 Juni 2006</h5>
            <h5>Alamat: Tanggul Wetan - CBB </h5>
            <h5>Saya adalah salah satu siswa SMK Negeri 6 Jember.
                yang mengampu jurusan Rekayasa Perangkat Lunak.
            </h5>
        </div>
    </div>

   <div className='content'>
    <div className='p'>
    <h2>Education Me</h2></div>
    <div className='c'>
        <div className='c-1'>SD
        <h4>SDN TANGGUL WETAN 02</h4>
        <p>2013-2019</p>
        </div>
       
        <div className='c-2'>SMP
        <h4>SMPN 03 TANGGUL</h4>
        <p>2019-2021</p>
        </div>

        <div className='c-3'>SMK
        <h4>SMKN 6 JEMBER</h4>
        <p>2021-2024</p>
        </div>
    </div>
   </div>
      
    </section>
  );
};

export default AboutMe;
