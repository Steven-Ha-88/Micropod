import styled from "styled-components"

export const ImageTextStyles = styled.div`
  width: 100vw;
  margin: 20px 0;

  .container {
    width: 100%;
    display: flex;
    flex-flow: ${(props) => (props.about ? "row-reverse" : "row")};
    padding: 100px 100px;
    background-color: ${(props) => (props.menu ? "row-reverse" : "row")};
    justify-content: center;

    @media (max-width: 830px) {
      flex-flow: ${(props) => (props.about ? "column" : "column-reverse")};
      margin: 0;
      align-items: center;
      padding: 0px;
    }
  }

  .text {
    width: 100%;
    align-self: center;
    @media (max-width: 750px) {
      padding: 35px;
    }

    .title {
      font-weight: 700;
      color: #5c5c5c;
      line-height: 75px;
      margin-bottom: 0px;
    }
    .line {
      width: 80px;
      height: 3px;
      background-color: rgb(92 92 92);
    }
    .content {
      max-width: 70%;
      margin: 30px auto 0;
      font-size: 20px;
      @media (max-width: 750px) {
        max-width: 100%;
      }
    }
  }

  .image {
    width: 70%;
    @media (max-width: 750px) {
      width: 100%;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`
