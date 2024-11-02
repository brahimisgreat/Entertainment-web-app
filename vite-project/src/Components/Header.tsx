import logo from '../assets/assets/logo.svg'
import bookmark from '../assets/assets/icon-nav-bookmark.svg'
import home from '../assets/assets/icon-nav-home.svg'
import movies from '../assets/assets/icon-nav-movies.svg'
import tv from '../assets/assets/icon-nav-tv-series.svg'
import { Link } from 'react-router-dom'


export const Header = () => {
  return (
    <header>
        <nav>
    <img src={logo}/>
            <div>

    <Link><img src={bookmark}/></Link>
    <Link> <img src={home}/></Link>
    <Link><img src={movies}/></Link>
    <Link><img src={tv}/></Link>
            </div>
        </nav>
    </header>
  )
}
