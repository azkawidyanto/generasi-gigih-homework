import { Link } from 'react-router-dom'
import { MdHome, MdLibraryMusic } from 'react-icons/md'
import style from './sidebar.css'

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <ul className={style.menu}>
        <Link to="/">
          <li className={style.item}>
            <MdHome /> Home
          </li>
        </Link>
        <Link to="/create-playlist">
          <li className={style.item}>
            <MdLibraryMusic /> Create Playlist
          </li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar
