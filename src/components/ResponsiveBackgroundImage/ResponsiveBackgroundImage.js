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
    background: rgb(61, 61, 61);
    background: linear-gradient(
      97deg,
      rgba(61, 61, 61, 1) 0%,
      rgba(163, 163, 163, 1) 36%,
      rgba(177, 176, 176, 0.6334908963585435) 55%,
      rgba(210, 247, 92, 0) 100%
    );
    z-index: 1;
  }

  @media (max-width: 768px) {
    &::before {
      background: rgb(61,61,61);
background: linear-gradient(180deg, rgba(61,61,61,1) 0%, rgba(163,163,163,1) 36%, rgba(177,176,176,0.6334908963585435) 55%, rgba(210,247,92,0) 100%);
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
  padding: 20px;
  color: #fff; /* Text color */
  width: 50%;
  @media (max-width: 768px) {
    width: 100%;
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
