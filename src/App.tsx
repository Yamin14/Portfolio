
import {Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProjectPage from './pages/ProjectPage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';
import Footer from './components/Footer';

const App = () => {
 
  return (
    <main>
      
      <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/projects' element={<ProjectsPage />} />
          <Route path='/projects/:id' element={<ProjectPage />} />
          <Route path="/projects/error" element={<NotFoundPage />} />
          <Route path="/*" element={<NotFoundPage />} />
      </Routes>

      <Footer />
    </main>
  )
}

export default App
