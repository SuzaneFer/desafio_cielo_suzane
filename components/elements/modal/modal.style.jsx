import styled from 'styled-components';

export const CardModalStyle = styled.div`
  height: fit-content;
  width: 100%;
  background: #FFFFFF;
  box-shadow: 5px 5px 20px 0px rgba(37, 37, 39, 0.20);
  border-radius: 8px;
  max-width: 500px;
  border: 2px solid white;

  input{
    padding: 4px;
  }

  img{
    width: 50%;
    height: 50%;
  }

  .MuiOutlinedInput-root{
    background: white;
  }
`;

export const FooterModalStyle = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  background: #206446;
  height: 40px;
  align-items: center;
  border-radius: 0 0 6px 6px;
  margin-top: 24px;
  gap: 36px;
`;

export const ButtonStyle = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
`

export const HeaderModalStyle = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px 20px 0 20px;
`

export default CardModalStyle;