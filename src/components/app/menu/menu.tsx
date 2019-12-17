import * as React from 'react'
import classnames from 'classnames'
import { Link } from 'react-router-dom'
import { MdMenu, MdKeyboardArrowLeft } from 'react-icons/md'
import MenuOverlay from './menu_overlay/menu_overlay'
import './menu.css'

const { useState } = React

const Menu: React.FunctionComponent<{}> = () => {
  // State
  const [isOpen, setIsOpen] = useState(false)

  // Effects


  const closeMenu = (event) => { setIsOpen(false) }
  return (
    <>
      <header className="menu">
        <h1 className="menu__title">
          MyApp
        </h1>
        <button
          aria-label="Open and close menu"
          className="menu__icon"
          onClick={(): void => setIsOpen(!isOpen)}
          type="button"
        >
          <MdMenu />
        </button>
        <ul className={classnames({
          /* eslint-disable-next-line @typescript-eslint/camelcase */
          menu__links: !isOpen,
          'menu__links--open': isOpen,
        })}
        >
          <li>
            <button type="button" onClick={closeMenu}>
              <MdKeyboardArrowLeft />
            </button>
          </li>
          <li>
            <Link onClick={closeMenu} to="/">Home</Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/about">About</Link>
          </li>
        </ul>
      </header>
      <MenuOverlay isOpen={isOpen} onClick={closeMenu} />
    </>
  )
}

export default Menu

