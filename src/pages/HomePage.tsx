
import Quote from '../components/Quote';
import Footer from '../components/Footer';
import { NavLink } from 'react-router-dom';
import Logo from '../assets/yaminLogoCircle.png';

const HomePage = () => {
  return (
    <>
      <Quote />

      <section>

          {/* Intro */}
          <div className='mt-4 flex justify-center items-center'>
            <img src={Logo} className='w-20 text-center lg:w-40' />
            <h1 className='text-center font-serif text-2xl ml-2 lg:ml-4 lg:text-4xl'>Welcome to Kazmi Developers!</h1>
          </div>
        
          {/* Skills Heading */}
          <div className='flex flex-col items-center m-2 mt-4'>
            <h1 className='text-center text-2xl font-serif lg:text-3xl'>Skills</h1>
            <div className='text-center border-b-2 border-blue-500 rounded-3xl w-10'></div>
          </div>

          {/* Skills */}
          <div className='flex justify-center lg:text-xl'>
            <ul>
              <li>HTML5 + CSS3</li>
              <li>JavaScript + jQuery</li>
              <li>React + Redux</li>
              <li>Bootstrap + TailwindCSS</li>
            </ul>
          </div>

          {/* Projects Link */}
          <div className='text-center mt-5 p-2 text-xl border-b-2 border-t-2 border-white lg:mt-8'>
            <NavLink to='/projects' className='text-blue-200 underline lg:text-2xl'>View Projects</NavLink>
          </div>  

          </section>

      <Footer />
    </>
  );
}

export default HomePage;