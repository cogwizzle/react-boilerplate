import * as React from 'react'
import classnames from 'classnames'
import './menu_overlay.css'

interface MenuOverlayProps {
  isOpen: boolean;
  onClick?: (event: any) => void;
}

const MenuOverlay: React.FunctionComponent<MenuOverlayProps> = ({
  isOpen,
  onClick,
}) => (
  <div className={classnames({
    menu_overlay: isOpen,
    'menu_overlay--hidden': !isOpen,
  })} onClick={onClick} />
)


export default MenuOverlay
export { MenuOverlayProps }

