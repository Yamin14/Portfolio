
import { useNavigate } from "react-router-dom"

interface Props {
    prev: string
}

const BackButton = ({prev}: Props) => {

    const nav = useNavigate();

    const handleBack = () => {
        nav(prev, {replace: false});
    }

  return (
    <button onClick={handleBack} className="m-5 mb-2 p-2 rounded bg-blue-600 text-white w-20 md:w-22 md:text-xl lg:w-24 lg:text-2xl">Back</button>
  )
}

export default BackButton