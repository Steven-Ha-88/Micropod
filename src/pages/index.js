import * as React from "react"
import Layout from "../components/Layout"
import Seo from "../components/SEO"
import BannerModule from "../components/BannerModule/BannerModule"
import BasicTextModule from "../components/BasicTextModule/BasicTextModule"
import PerksModule from "../components/PerksModule/PerksModule"
import Perk from "../components/PerksModule/Perk"
import Testimonials from "../components/Testimonials/Testimonials"

const Index = () => {
  return (
    <>
      <Seo title="Home" />
      <Layout>
        <BannerModule
          title="Kelvin Carmichael"
          subTitle="Drummer and Producer"
        />
        <BasicTextModule
          title="About Me"
          content="Kelvin is a professional freelance musician & producer based in London.
          He has years of experience working live and in the studio with a range of
          artists, producers & bands in a variety of different styles."
        />
        <PerksModule>
          <Perk title="The Title" content="The content" />
        </PerksModule>
        <Testimonials />
      </Layout>
    </>
  )
}

export default Index
