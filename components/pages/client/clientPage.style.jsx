import styled from "styled-components";

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
    width: fit-content;
    height: fit-content;
    display: flex;
    justify-content: center;
    flex-direction: row;
    padding: 40px;
    background-color: white;
    z-index: 1;
    margin: 130px auto auto;
    box-shadow: rgba(37, 37, 39, 0.2) 5px 5px 20px;
    border-radius: 10px;
    gap: 20px;
  }
`

export default ClientPageStyle;