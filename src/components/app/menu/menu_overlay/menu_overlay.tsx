import * as React from 'react'
import classnames from 'classnames'
import './menu_overlay.css'

export interface MenuOverlayProps {
  isOpen: boolean;
  onClick?: (event: any) => void;
}

const MenuOverlay: React.FunctionComponent<MenuOverlayProps> = ({
  isOpen,
  onClick,
}) => (
  /* eslint-disable-next-line */
  <div role="button" className={classnames({
    /* eslint-disable-next-line @typescript-eslint/camelcase */
    menu_overlay: isOpen,
    'menu_overlay--hidden': !isOpen,
  })} onClick={onClick}
  />
)


export default MenuOverlay

