import styled from 'styled-components';
import { Link } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const FooterContainer = styled.div`
  background-color: rgb(184 184 184 / 48%);
  color: #2A446B;
  padding: 20px 0;
  text-align: center;
`;

export const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const LinkedInIconStyled = styled(LinkedInIcon)`
  font-size: 2rem;
  vertical-align: middle;
  margin-right: 8px;
`;

export const LinkedInLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const Photo = styled.img`
  width: 100px;
  border-radius: 50%;
  margin: 20px auto;
  display: block;
`;

export default null;