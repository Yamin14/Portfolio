
import {Link} from 'react-router-dom';

interface Props {
  title: string,
  image: string,
  index: number
}

const Project = ({title, image, index}: Props) => {

  //image and title of project
    return (
      <div className='border-2 border-white rounded p-2'>
          <Link to={`/projects/${index}`}>

            <div className='flex flex-col justify-center'>
              <img src={image} className='h-40'/>
              <h1 className='font-medium text-center mt-2'>{title}</h1>
            </div>

          </Link>
      </div>
    )
  }
  
  export default Project;