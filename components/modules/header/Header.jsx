import HeaderStyled from './headerStyle.style';

const Header = () => {

  return (
    <>
      <HeaderStyled>
        <div className="header-content">
          <div className="header-image">
            <img src="src/assets/logo_desafio.png" className='img-header'/>
          </div>
        </div>
      </HeaderStyled>
      <div style={{ width: '100%', height: '50px' }} />
    </>
  );
};

export default Header;
