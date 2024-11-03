import logo from '../../assets/assets/logo.svg'
import bookmark from '../../assets/assets/icon-nav-bookmark.svg'
import home from '../../assets/assets/icon-nav-home.svg'
import movies from '../../assets/assets/icon-nav-movies.svg'
import tv from '../../assets/assets/icon-nav-tv-series.svg'
import { Link } from 'react-router-dom'
import  avatar from '../../assets/assets/image-avatar.png'


export const Navbar = () => {
  return (
    
        <nav className="w-full flex h-14 justify-center bg-4 ">
        <div className="flex  items-center justify-between w-11/12">
        <img  src={logo} />

        <div className="flex flex-row gap-4 items-center">
          <Link to="/"><img src={bookmark} /></Link>
          <Link to="/"><img src={home} /></Link>
          <Link to="/"><img src={movies} /></Link>
          <Link to="/"><img src={tv} /></Link>
        </div>

        <img className="w-6 h-6" src={avatar} />
        </div>
      </nav>
    
  )
}
