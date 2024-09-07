import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    window.onscroll = () => {
      sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop-60;//why minus 60 of height of header through has fixed  position
        const height = section.offsetHeight;
        const id = section.getAttribute('id');
        if (top > offset && top < offset + height) {
          navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.href.includes(id)) {
              link.classList.add('active');
            }
          }
          )
        }
      })
    }
  },[])
  return (
    <>
    <nav className='flex justify-between p-4 bg-black text-white fixed top-0 right-0 left-0'>
      <h2>Logo</h2>
      <ul className='flex space-x-12 items-center'>
        <li><a href="#home" className='nav-link hover:text-blue-400'>Home</a></li>
        <li><a href="#about" className='nav-link hover:text-blue-400'>About</a></li>
        <li><a href="#reviews" className='nav-link hover:text-blue-400'>Reviews</a></li>
      </ul>
    </nav>
    <section id='home' className='h-screen bg-black text-white flex justify-center items-center text-3xl'>Home</section>
    <section id='about' className='h-screen bg-gray-900 text-white flex justify-center items-center text-3xl'>about</section>
    <section id='reviews' className='h-screen bg-black text-white flex justify-center items-center text-3xl'>reviews</section>
    </>
  );
}

export default App;
