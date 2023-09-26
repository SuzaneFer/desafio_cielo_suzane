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

  const getNavBarItems = () => (
    <>
      <Device deviceType={DEVICE_TYPES.desktop}>
        {headerItems.map((header) => (
          <a key={header.icon} href={header.url} className="header-navigation-item" data-cy={header.name}>
            icone
            <p className="font-button-3">{header.name}</p>
          </a>
        ))}
      </Device>
        <Device deviceType={DEVICE_TYPES.mobile}>
          {headerItemsLoggedMobile.filter((header) => header.isMobile).map((header) => (
            <a key={header.icon} href={header.url} className="header-navigation-item">
              icone
            </a>
          ))}
        </Device>
    </>
  );


  const MenuContent = () => (
    <MenuContentStyled>
      <div>
        <Device deviceType={DEVICE_TYPES.mobile}>
          <div>
            arrow
          </div>
        </Device>
      </div>
      <div className="menu-items">
        {menuItems.map((menuItem) => {
          return (
            <a key={menuItem.icon} href={menuItem.url} className="menu-items-item" data-cy={menuItem.name}>
              icone
              <p className="font-button-1">{menuItem.name}</p>
            </a>
          );
        })}
      </div>
    </MenuContentStyled>
  );

  const getNavBarMenu = () => (
    <button type="button" onClick={toggleMenu} className="header-navigation-item">
      icone
      <Device deviceType={DEVICE_TYPES.desktop}>
        <p className="font-button-3" data-cy="menu">Menu</p>
      </Device>
    </button>
  );

  
  const renderMenu = () => (
    <>
      <Device deviceType={DEVICE_TYPES.mobile}>
        <Drawer disablePortal anchor="right" open={Boolean(menuAnchorEl)} onClose={() => setMenuAnchorEl(null)}>
          <MenuContent />
          <p>TESTE</p>
        </Drawer>
      </Device>
      <Device deviceType={DEVICE_TYPES.desktop}>
        <Popover
          anchorEl={menuAnchorEl}
          open={Boolean(menuAnchorEl)}
          onClose={() => setMenuAnchorEl(null)}
          transitionDuration={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          PaperProps={{
            style: {
              background: 'none', borderRadius: 'unset', boxShadow: 'unset', marginTop: '15px',
            },
          }}
        >
          <MenuContent />
          <p>TESTE TESTE</p>
        </Popover>
      </Device>
    </>
  );

  return (
    <>
      <HeaderStyled>
        <div className="header-content">
          <div className="header-image">
              IMAGEM
          </div>
          <div className="header-navigation">
            <Device deviceType={DEVICE_TYPES.desktop}>
              <div className="header-navigation-divider" />
            </Device>
            {getNavBarItems()}
            {getNavBarMenu()}
            {renderMenu()}
          </div>
        </div>
      </HeaderStyled>
      <div style={{ width: '100%', height: '50px' }} />
    </>
  );
};

export default Header;
