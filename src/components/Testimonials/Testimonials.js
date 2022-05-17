import { TestimonialStyles } from "./TestimonialStyles"
import styled from "styled-components"
import { Carousel } from "3d-react-carousal"
import * as React from "react"

const CardStyles = styled.label`
  width: 100%;
  max-height: 600px;
  back img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 30px;
  }
`

const CarouselCard = styled(Carousel)`
  box-shadow: 0px 0px 0px 0px;
`

const Card = ({ image }) => {
  return (
    <CardStyles className="card">
      <img src={image} alt="song" />
    </CardStyles>
  )
}

let slides = [
  <Card image="https://images.unsplash.com/photo-1525362081669-2b476bb628c3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHByb2R1Y2VyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" />,
  <Card image="https://images.unsplash.com/photo-1577660097552-ef733c1399c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGRydW1tZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />,
  <Card image="https://images.unsplash.com/photo-1587973628603-557fca231c5f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGRydW1tZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />,
  <Card image="https://images.unsplash.com/photo-1626407072301-748bffdf56fe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGRydW1tZXJ8ZW58MHwxfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60" />,
  <Card image="https://images.unsplash.com/flagged/photo-1572482826473-39c90e0f1536?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fHByb2R1Y2VyfGVufDB8MXwwfHw%3D&auto=format&fit=crop&w=500&q=60" />,
]

const callback = function (index) {
  console.log("callback", index)
}

const Testimonials = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "80vh",
      }}
    >
      <h2 style={{ textAlign: "center" }}>Testimonials</h2>
      <CarouselCard
        slides={slides}
        autoplay={false}
        interval={1000}
        onSlideChange={callback}
        style={{ boxShadow: "none" }}
      />
    </div>
  )
}

export default Testimonials
