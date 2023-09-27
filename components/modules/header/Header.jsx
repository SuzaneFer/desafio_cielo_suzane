import { memo, useState } from 'react';
import { Drawer, Popover } from '@mui/material';
import HeaderStyled, { MenuContentStyled } from './HeaderStyle.style';
import Device from '../../elements/device/device';
import { DEVICE_TYPES } from '../../../utils/constants';


const Header = () => {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const toggleMenu = (event) => {
    if (menuAnchorEl) {
      setMenuAnchorEl(null);
    } else {
      setMenuAnchorEl(event.currentTarget);
    }
  };

  const getNavBarMenu = () => (
    <button type="button" onClick={toggleMenu} className="header-navigation-item">
      icone menu
      <Device deviceType={DEVICE_TYPES.desktop}>
        <p className="font-button-3" data-cy="menu">Menu</p>
      </Device>
    </button>
  );
  
  return (
    <>
      <HeaderStyled>
        <div className="header-content">
          <div className="header-image">
            <img src="src/assets/logo_desafio.png" className='img-header'/>
          </div>
          <div className="header-navigation">
            <Device deviceType={DEVICE_TYPES.desktop}>
              <div className="header-navigation-divider" />
            </Device>
            {getNavBarMenu()}
          </div>
        </div>
      </HeaderStyled>
      <div style={{ width: '100%', height: '50px' }} />
    </>
  );
};

export default Header;
