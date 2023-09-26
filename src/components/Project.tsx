
import {Link} from 'react-router-dom';

interface Props {
  title: string,
  image: string,
  index: number
}

const Project = ({title, image, index}: Props) => {

  //image and title of project
    return (
      <div className='border border-gray-500'>
          <Link to={`/projects/${index}`}>

            <img src={image}/>
            <h1 className='font-medium text-center pb-2 mt-2'>{title}</h1>

          </Link>
      </div>
    )
  }
  
  export default Project;