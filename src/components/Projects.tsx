
import {nanoid} from '@reduxjs/toolkit';
import Project from './Project';
import {projectsInfo} from '../projectDetails/projects';

const Projects = () => {

    //projects
    const projects = projectsInfo.map((project, index) => {
        return (
            <div key={nanoid()}>
                <Project {...project} index={index} />
            </div>
        );
    })

  //return  
  return (
    <>
        <section className='m-2 mt-0'>

            <div className='flex flex-col items-center'>
                <h1 className='text-center text-2xl font-serif'>Projects</h1>
                <div className='text-center border-b-2 border-blue-500 rounded-3xl w-10 mb-4'></div>
            </div>

            <div className='grid grid-cols-2 gap-2 grow lg:gap-8'>
                {projects}
            </div>
        </section>

        {/* Empty Space */}
        <div className='my-4'>&nbsp;</div>
    </>
  )
}

export default Projects;