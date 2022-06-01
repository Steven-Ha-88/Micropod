import styled from "styled-components"

export const ImageTextStyles = styled.div`
  width: 100vw;
  margin: 20px 0;

  .container {
    width: 100%;
    display: flex;
    flex-flow: row;
    padding: 100px 200px;
    background-color: white;
    justify-content: center;

    @media (max-width: 830px) {
      flex-flow: column-reverse;
      margin: 0;
      align-items: center;
      padding: 0px;
    }
  }

  .text {
    width: 100%;
    align-self: center;
    .title {
      font-size: 60px;
      font-weight: 700;
      color: #5c5c5c;
      line-height: 75px;
      font-family: "Brandon Grotesque Bold", sans-serif;
    }
    .line {
      width: 80px;
      height: 1px;
      background-color: #b4b4b4;
      margin: 50px 0;
    }
    .content {
      max-width: 75%;
      margin: 30px auto 0;
      font-size: 25px;
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