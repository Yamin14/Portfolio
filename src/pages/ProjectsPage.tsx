
import BackButton from '../components/BackButton';
import Projects from '../components/Projects';
import { NavLink } from 'react-router-dom';

const ProjectsPage = () => {
  return (
    <>
      <BackButton prev='/' />
      <Projects />
    </>
  )
}

export default ProjectsPage