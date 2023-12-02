import styled from "styled-components"

export const LocationStyles = styled.section`
  margin: 0px 0px 0px 0px;
  text-align: center;
  padding: 0 0 0 0;
  width: 100vw;

  .address {
    display: flex;
    width: 100%;
    flex-flow: row wrap;
    justify-content: center;
    padding: 20px;

    div:nth-child(1) {
      display: flex;
      flex-flow: column;
      justify-content: center;

      @media screen and (max-width: 480px) {
        width: 100%;
        align-items: center;
      }
    }

    h2 {
      color: #5c5c5c;
      margin-bottom: 8px;
      text-align: center;
    }
    p {
      text-align: center;
      font-size: 1.5rem;
      margin: 0px;
    }

    .opening-hours {
      h6 {
        color: #5c5c5c;
      }
      p {
        font-size: 1rem;
        text-align: center;
      }
    }

    .map {
      width: 40%;
      height: 50vh;
      margin: 40px;

      @media (max-width: 480px) {
        width: 100%;
        height: 200px;
        margin: 20px 10px;
      }

      iframe {
        border: 0;
        width: 100%;
        height: 100%;
        border-radius: 30px;
      }
    }
  }

  .text {
    width: 100%;
    padding: 50px 0;
    background-color: #b7c1f6;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;

    @media (max-width: 720px) {
      height: unset;
    }

    .title {
      font-weight: 700;
      color: #5c5c5c;
      line-height: 75px;
    }

    .line {
      width: 80px;
      height: 1px;
      background-color: #ffc401;
      margin: 30px auto;
    }

    .content {
      max-width: 75%;
      margin: 0 auto 0;
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
