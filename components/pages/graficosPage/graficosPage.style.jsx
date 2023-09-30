import styled from "styled-components";
import { MIN_MOBILE_WIDTH_PX } from "../../../utils/constants";

const GraficosPageStyle = styled.div`
  .tab-button-line {
    height: 2px;
    width: 50%;
    border-radius: 4px;
    background-color: #2A446B;
    text-align: center;
  }

  .content-grafico{
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-grafico{
    text-align: center;
    color: black;
    font-weight: 500;
    font-size: 20px;
  }

  @media only screen and (max-width: ${MIN_MOBILE_WIDTH_PX}px) {
    .title-grafico{
      font-size: 16px;
    }
  }
`

export default GraficosPageStyle;