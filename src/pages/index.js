import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import ImageTextModule from "../components/ImageTextModule/ImageTextModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import Location from "./../components/Location/location.js"
import Instagram from "./../components/Instagram/Instagram"
import ResponsiveBackgroundImage from "./../components/ResponsiveBackgroundImage/ResponsiveBackgroundImage"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule />
        <ImageTextModule
          title="Tea is Life"
          image="https://imgur.com/ZGxFL5Z.jpg"
          content="Tea is wealth itself, because there is nothing that cannot be lost,no problem that will not disappear, no burden that will not float away, between the first sip and the last."
        />
        <ResponsiveBackgroundImage
          imageUrl="https://imgur.com/ZGxFL5Z.jpg"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
          header="MicroPod Pod Systems Coming Soon!"
        />
        <BasicTextModule
          title="Our Latest Collection"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        />

        <Location />
        <Instagram />
      </Layout>
    </>
  )
}

export default Index
{
  /* <BannerModule />
        <ImageTextModule
          title="Tea is Life"
          image="https://i.imgur.com/coFbKOd.jpg"
          content="Tea is wealth itself, because there is nothing that cannot be lost,no problem that will not disappear, no burden that will not float away, between the first sip and the last."
        />
        {/* <BasicTextModule
          title="Our Journey"
          content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis  aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
        /> */
}
// <ImageTextModule
//   title="Oobae-by baby!"
//   image="https://imgur.com/YDlsHeO.jpg"
//   menu
//   content="The Little Oobae Corner serves traditional fruit tea and tapioca pearl bubble tea, Halo Halo and Ubbe desserts. You can’t buy happiness. But you can buy milk tea. And that’s the same thing. Stressed is desserts spelled backwards. So have a dessert!"
// /> */}
