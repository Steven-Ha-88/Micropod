import styled from "styled-components"

export const BannerModuleStyles = styled.section`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrap;
  @media (max-width: 1024px) {
    height: unset;
    flex-flow: column;
  }

  .banner__image {
    // background: url("https://imgur.com/t0UzL8g.jpg");
    // flex-grow: 1;
    // flex-basis: 50%;
    width: 50%;
    height: 100%;
    // background-size: cover;
    // background-repeat: no-repeat;
    @media (max-width: 1024px) {
      width: 100%;
      height: unset;
    }
  }

  .banner__description {
    width: 50%;
    display: flex;
    justify-content: center;
    background-color: white;
    @media (max-width: 1024px) {
      width: 100%;
      height: 600px;
    }

    .content {
      // flex-grow: 1;
      // flex-basis: 50%;
      display: flex;
      flex-flow: column;
      justify-content: center;
      text-align: center;
      padding: 0 20px;
      position: relative;
      @media (max-width: 480px) {
        justify-content: unset;
      }

      .title {
        font-size: 70px;
        font-weight: 900;
        color: #5c5c5c;
        padding: 20px 0px;
        line-height: 75px;

        @media (max-width: 480px) {
          font-size: 60px;
        }
      }

      .text {
        max-width: 75%;
        margin: 30px auto 0;
        font-size: 25px;
      }

      .line {
        width: 1px;
        height: 120px;
        background-color: #b7c1f6;
        position: absolute;
        bottom: -17px;
        left: 50%;
        transform-origin: 0 0;
        @media (max-width: 640px) {
          position: relative;
          bottom: 0;
          margin: 30px 0 -30px;
        }
      }
    }
  }
`
