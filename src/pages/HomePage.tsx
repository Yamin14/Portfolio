
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/yaminLogoCircle.jpg';

const HomePage = () => {
  return (
    <>
      <Quote />

      <section>

          {/* Intro */}
          <div className='mt-4 flex justify-center items-center'>
            <img src={Logo} className='w-20 text-center' />
            <h1 className='text-center font-serif text-2xl ml-4'>Welcome to Kazmi Developers!</h1>
          </div>
        
          {/* Skills Heading */}
          <div className='flex flex-col items-center m-2 mt-4'>
            <h1 className='text-center text-2xl font-serif'>Skills</h1>
            <div className='text-center border-b-2 border-blue-500 rounded-3xl w-10'></div>
          </div>

          {/* Skills */}
          <ul className='text-center'>
            <li>HTML5 + CSS3</li>
            <li>JavaScript + jQuery</li>
            <li>React + Redux</li>
            <li>Bootstrap + TailwindCSS</li>
          </ul>

          {/* Projects Link */}
          <div className='text-center mt-5 p-2 text-xl border-b-2 border-t-2 border-white'>
            <NavLink to='/projects' className='text-blue-200 underline'>View Projects</NavLink>
          </div>  

          </section>

      <Footer />
    </>
  );
}

export default HomePage;