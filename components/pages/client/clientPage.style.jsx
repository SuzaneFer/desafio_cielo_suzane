import styled from "styled-components";
import { MIN_MOBILE_WIDTH_PX } from "../../../utils/constants";

const ClientPageStyle = styled.div`
  background: rgb(248, 246, 247);
  display: flex;
  flex-flow: column;
  width: 100%;
  height: calc(100% - 50px);
  justify-content: start;
  align-items: start;
  overflow: hidden auto;
  scroll-behavior: smooth;
  position: relative;

  .header-client{
    display: flex;
    justify-content: center;
    height: fit-content;
    position: absolute;
    width: 100%;
    background: rgb(184 184 184 / 48%);

    img{
      margin-bottom: 24px;
    }
  }

  .card-client{
    width: 80%;
    height: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 40px;
    background-color: white;
    z-index: 1;
    margin: 130px auto auto;
    box-shadow: rgba(37, 37, 39, 0.2) 5px 5px 20px;
    border-radius: 10px;
  }

  .card-info{
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  @media only screen and (max-width: ${MIN_MOBILE_WIDTH_PX}px) {
    .card-client{
      flex-direction: column;
      margin: 100px auto auto;
    }
    img{
      width: 380px;
    }
  }
`

export default ClientPageStyle;