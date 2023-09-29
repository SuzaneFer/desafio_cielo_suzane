import styled from 'styled-components';
import { MIN_MOBILE_WIDTH_PX } from '../../../utils/constants';

const TabsMenuStyle = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 150px;
  width: fit-content;
  margin: auto;
  margin-bottom: 24px;

  .tab-button {
    font-family: 'Montserrat', 'sans-serif';
    font-size: 18px;
    line-height: 22px;
    text-transform: uppercase;

    &.selected {
      font-weight: 700;
      color: #2A446B;

      .tab-button-line {
        height: 4px;
        width: 100%;
        border-radius: 4px;
        background-color: #2A446B;
      }
    }

    &.notSelected {
      font-weight: 400;
      color: gray;

      .tab-button-content-icon {
        fill: gray
      }
    }

    .tab-button-content-icon {
      width: 20px;
      height: 20px;
    }

    .tab-button-content {
      display: flex;
      justify-content: center;
      align-items: center;

      .tab-button-content-text {
        margin: 10px 0 10px 10px;
      }
    }
  }

  @media only screen and (max-width: ${MIN_MOBILE_WIDTH_PX}px) {
    margin: auto;
    width: fit-content;
    grid-gap: 10px;

    .tab-button {
      width: 150px;
      border-radius: 21px;
      text-transform: capitalize;
      font-weight: 700;
      font-size: 12px;
      line-height: 15px;

      &.selected {
        background-color: #2A446B;
        color: white;

        .tab-button-content-icon {
          fill: white;
        }
      }

      &.notSelected {
        font-weight: 700;
        background-color: none;
        color: #2A446B;
        border: 1px solid #2A446B;

        .tab-button-content-icon {
          fill: #2A446B;
        }
      }

      .tab-button-content {
        .tab-button-content-text {
          margin: 9px 0 9px 7px;
        }
      }
    }
  }
`;

export default TabsMenuStyle;
