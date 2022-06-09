import styled from "styled-components"

export const SimpleBannerStyles = styled.section`
  height: 60vh;
  position: relative;
  padding: var(--gap) var(--borderSpacing);

  .container {
    height: 100%;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
  }

  .banner__image,
  .gradient {
    position: absolute;
    top: -223px;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }

  .banner__content {
    position: relative;
    z-index: 2;
    height: 20vh;
    width: 100%;

    @media (min-width: 768px) {
      width: 66vw;
    }

    h1 {
      font-size: 60px;
      font-weight: 700;
      color: white;
      line-height: 75px;
      font-family: "brandon_bold", sans-serif;
      text-shadow: var(--textShadow);
    }
  }
`
