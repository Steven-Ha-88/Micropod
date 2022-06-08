import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import ImageTextModule from "../components/ImageTextModule/ImageTextModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import Location from "./../components/Location/location.js"
import Instagram from "./../components/Instagram/Instagram"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Kelvin Carmichael"
          subTitle="Drummer and Producer"
        />
        <ImageTextModule
          title="Tea is Life"
          image="https://i.imgur.com/coFbKOd.jpg"
          content="Tea is the flow of time, Tea is a wordless conversation. Tea is a fountain of inspiration, transforming each day into a leisurely journey of taste. It craves contemplation. It’s worth savouring."
        />
        <BasicTextModule
          title="Our Journey"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <ImageTextModule
          title="Oobae-by baby!"
          image="https://imgur.com/YDlsHeO.jpg"
          menu
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />
        <Location />
        <Instagram />
      </Layout>
    </>
  )
}

export default Index
