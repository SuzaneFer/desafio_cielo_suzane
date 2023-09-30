

import styled from "styled-components";
import { MIN_MOBILE_WIDTH_PX } from "../../../utils/constants";

const CardInfoStyle = styled.div`
  width: 30%;
  border: 1px solid rgba(224, 224, 224, 1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  padding: 20px;

  span{
    padding: 12px 0px;
    color: black;
  }

  @media only screen and (max-width: ${MIN_MOBILE_WIDTH_PX}px) {
    width: 86%;
  }
`

export default CardInfoStyle;