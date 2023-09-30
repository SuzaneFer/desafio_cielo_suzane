import styled from 'styled-components';
import { MIN_MOBILE_WIDTH_PX } from '../../../utils/constants';

const HeaderStyled = styled.header`
  position: fixed;
  height: 50px;
  width: 100%;
  box-shadow: 5px 5px 20px rgba(37, 37, 39, 0.2);
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;

  body{
    margin: 0;
  }

  .header-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 1366px;
    padding-left: 40px;
    padding-right: 40px;
    
    .header-navigation {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 40px;

      .header-info-fidelidade {
        display: flex;
        align-items: center;
        gap: 20px;

        &-logo {
          cursor: pointer;
        }
      }

      .header-navigation-divider {
        width: 1px;
        height: 50px;
        background-color: green;
      }

      .header-navigation-item {
        display: flex;
        gap: 10px;
        text-decoration: none;
        padding: 0;
        height: 20px;
        align-items: center;

        svg {
          fill: gray;
        }
      }

      .text-points{
        font-weight: 400;
        color:black;
      }
    }


  }

  .header-image {
    display: flex;
    justify-content: center;
    align-items: center;
    &-logo {
      cursor: pointer;
    }
    .img-header{
      width: 80px;
      height: 30px;
    }
  }

  .popper-menu-desktop {
    z-index: 11;
    background-color: white;
    padding: 16px;
  }

  @media only screen and (max-width: ${MIN_MOBILE_WIDTH_PX}px) {
    padding: 0 8px;
    .header-content {
      padding: 0px;
      .header-navigation {
        gap: 16px;
        .header-info-fidelidade {
          gap: 8px;
          > p {
            color: black
          }
        }
        .header-navigation-divider {
          display: none;
        }

        .MuiDrawer-modal, .MuiBackdrop-root, .MuiDrawer-paper {
          height: calc(100% - 50px);
          margin-top: 50px;
        }
      }
    }
  }
`;

export const MenuContentStyled = styled.div`
  background: none;
  border: 1px solid black;
  box-shadow: 5px 5px 20px rgba(37, 37, 39, 0.2);
  border-radius: 10px;

  max-height: 90vh;
  overflow-y: auto;


  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 10px 10px red;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background: green;
    border-radius: 20px;
  }

  .menu-header-not-logged {
    border-radius: 10px 10px 0 0;
    background-color: white;

    &-return {
      display: flex;
      justify-content: flex-end;
      padding: 22px 20px 24px 0;
    }

    &-login {
      border-top: 1px solid red;
      padding: 20px;
      text-decoration: none;
      display: flex;
      align-items: center;

      > div {
        height: 20px;
      }

      > p {
        margin-left: 16px;
        color: black;
      }
    }
  }

  .menu-header {
    background-color: white;
    border-radius: 10px 10px 0 0;
    padding: 20px;

    &-name-return {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 5px;
    }

    &-name {
      text-align: left;
    }

    &-points {
      margin-bottom: 10px;
    }

    .menu-header-points{
      color:black;
    }

    .logout-button {
      border: 1px solid darkred;
      border-radius: 27px;
      width: 65px;
      height: 24px;

      > p {
        color: darkred;
      }

      &:hover {
        background-color: darkred;
        > p {
          color: white;
        }
      }
    }
  }

  .menu-items {
    display: flex;
    flex-direction: column;

    &-item {
      border-top: 1px solid red;
      display: flex;
      align-items: center;
      padding: 20px;
      text-decoration: none;
      background-color: white;

      > div {
        height: 20px;
      }

      &:last-child {
        border-radius: 0 0 10px 10px;
      }

      > p {
        color: black;
        margin-left: 16px;
      }

      svg {
        fill: black;
      }

      &:hover {
        background-color: orange;
        > p {
          color: white;
        }

        svg {
          fill: white;
        }
      }
    }
  }

  @media only screen and (max-width: ${MIN_MOBILE_WIDTH_PX}px) {
    border: none;
    border-radius: none;
    box-shadow: none;
    max-height: unset;
    .menu-items {
      &-item {
        &:last-child {
          border-radius: 0;
          border-bottom: 1px solid red;
        }
      }
    }
  }

`;

export default HeaderStyled;
