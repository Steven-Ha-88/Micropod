import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import ImageTextModule from "../components/ImageTextModule/ImageTextModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"

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
          content="Tea is the flow of time, Tea is a wordless conversation. Tea is a fountain of inspiration, transforming each day into a leisurely journey of taste. It craves contemplation. It’s worth savouring."
        />
        <BasicTextModule
          title="Our Journey"
          content="Kelvin is a professional freelance musician & producer based in London.
          He has years of experience working live and in the studio with a range of
          artists, producers & bands in a variety of different styles."
        />
        <ImageTextModule
          title="Menu"
          content="Tea is the flow of time, Tea is a wordless conversation. Tea is a fountain of inspiration, transforming each day into a leisurely journey of taste. It craves contemplation. It’s worth savouring."
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
      </Layout>
    </>
  )
}

export default Index
