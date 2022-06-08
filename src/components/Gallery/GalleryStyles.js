import styled from "styled-components"

export const GalleryStyles = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0 100px;
  @media (max-width: 480px) {
    padding: 0px;
  }

  span {
    width: 282px;
    height: 422px;
    margin: 5px;
  }
`

export const Container = styled.div`
  text-align: center;
  padding: 175px 0;

  .instagram {
    width: 80vw;
    height: 2536px;
  }
  h1 {
    font-size: 60px;
    font-weight: 700;
    color: #5c5c5c;
    line-height: 75px;
    font-family: "Brandon Grotesque Bold", sans-serif;
  }
`
