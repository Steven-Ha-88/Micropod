import React from "react"
import styled from "styled-components"

const GradientBackground = styled.div`
  position: relative;
  height: 700px;
  width: 100%;
  overflow: hidden;
  .line {
    width: 60px;
    height: 3px;
    background-color: white;
    margin: 0px 0px 30px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgb(255, 153, 151);
    background: linear-gradient(
      90deg,
      rgba(255, 153, 151, 1) 0%,
      rgba(255, 200, 200, 1) 49%,
      rgba(255, 198, 198, 0.5746673669467788) 67%,
      rgba(235, 235, 235, 0) 100%
    );

    z-index: 1;
  }

  @media (max-width: 768px) {
    &::before {
      background: rgb(255, 153, 151);
      background: linear-gradient(
        180deg,
        rgba(255, 153, 151, 1) 0%,
        rgba(255, 200, 200, 1) 49%,
        rgba(255, 198, 198, 0.5746673669467788) 67%,
        rgba(235, 235, 235, 0) 100%
      );
    }
  }
`

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 2;
  @media (max-width: 768px) {
    align-items: flex-start;
  }
`

const TextContent = styled.div`
  padding: 0px 100px;
  color: #fff; /* Text color */
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
    padding: 35px;
  }
`

const Header = styled.h2`
  font-size: 2em;
  margin-bottom: 10px;
`

const ResponsiveBackgroundImage = ({ imageUrl, header, text }) => {
  return (
    <GradientBackground>
      <ImageOverlay>
        <TextContent>
          <h1 style={{ marginBottom: "0px" }}>{header}</h1>
          <div className="line"></div>
          {text}
        </TextContent>
      </ImageOverlay>
      <img
        src={imageUrl}
        alt="Background"
        style={{ width: "100%", height: "100%", objectFit: "cover", zIndex: 0 }}
      />
    </GradientBackground>
  )
}

export default ResponsiveBackgroundImage
