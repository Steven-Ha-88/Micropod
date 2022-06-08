import * as React from "react"
import Layout from "../components/Layout"
import { StaticImage } from "gatsby-plugin-image"
import Seo from "../components/SEO"
import SimpleBanner from "../components/SimpleBanner/SimpleBanner"
import ImageTextModule from "../components/ImageTextModule/ImageTextModule"

const About = () => {
  return (
    <>
      <Seo title="About" />
      <Layout>
        <SimpleBanner title="Our Story">
          <StaticImage
            className="banner__image"
            src="https://imgur.com/MovVn4B.jpg"
            alt="bubble tea"
          />
        </SimpleBanner>
        <ImageTextModule
          title="About The Little Oobae Corner"
          image="https://imgur.com/NAPTcYV.jpg"
          about
          content="TLorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

          “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
          The purpose of lorem ipsum is to create a natural looking block of text (sentence, paragraph, page, etc.) that doesn't distract from the layout. A practice not without controversy, laying out pages with meaningless filler text can be very useful when the focus is meant to be on design, not content.
          
          The passage experienced a surge in popularity during the 1960s when Letraset used it on their dry-transfer sheets, and again during the 90s as desktop publishers bundled the text with their software. Today it's seen all around the web; on templates, websites, and stock designs. Use our generator to get your own, or read on for the authoritative history of lorem ipsum."
        />

        {/* <AboutStyles>
          <div class="container container__tight">
            <div style={{ color: "black" }}>
              <p>
                I was born in the heart of North London at a very early age (I
                only jest). I’ve been surrounded by music all my life whether it
                be blasting out of cars, on the back of buses or from my dad’s
                DIY music studio. I always loved being able to express
                creativity and I discovered music as a creative outlet when my
                father (Jazz Guitarist & Saxophonist) began teaching me the
                guitar.
              </p>
              <p>
                I was however, eventually swept away from music by the world of
                video games (^_^) But, once in secondary school, I joined the
                internal music specialist school through which I had to learn an
                orchestral instrument. At the ignorant age of about 12, I chose
                what I thought was the shiniest, easiest transition from the
                recorder (which I was learning in primary school) : the flute. I
                quickly discovered the deceptively innocent looking flute, was
                exceedingly distinct from the recorder and a beast in its own
                right. This simultaneously helped me re-discover my drive and
                love for music. I continued to study the flute for several years
                before achieving an ABRSM Grade 6.
              </p>
              <p>
                Through my love for video games, I also discovered the computing
                course. This initially led to a tough internal battle between
                computing and music as a career. But, at roughly age 14, I
                acquired a taste for rock and metal records and began paying
                particular attention to the drum kit. Consequently, I became
                very attentive when passing the drum room in school. Eventually,
                my curiosity bewitched me and I went inside after seeing someone
                in my year group practicing. This was my first drum
                lesson...and… I suddenly couldn’t get enough of it. I became a
                drum kit junkie to the point that tutors had to ask me to leave
                as I would spend hours on the kit after school.
              </p>
              <p>
                Months later, after attaining some fluency on the kit, I joined
                the school band and began learning rock and funk records,
                performing at school concerts and events. This led to me sitting
                in on my father's lower profile gigs. My passion and love for it
                began to grow faster than the mercury in a thermometer stirring
                a slush puppy. Hence, I started taking formal lessons from Neil
                Findlay, drummer for ‘The Curse of Lono’.
              </p>
              <p>
                In sixth form, I discovered the music technology course. This
                bridged the gap between my two passions and wholly solidified my
                choice of music at university. This also summoned a wormhole
                into a new dimension, a new virtue spawned from the innovatory
                music and technologically infused ingenious piece of software
                known as a digital audio workstation. This introduced me to
                production, engineering, recording, mixing and so on...
              </p>
              <p>
                Once at the Academy of Contemporary music, I began learning
                under Darren Beckett, New York jazz drummer who has worked with
                ‘The Killers’ and George Colligan. Later, I was also taught by
                George Cook, contemporary session drummer who has worked with
                the likes of Eminem and ‘The Japanese House’. I eventually also
                studied under Matt Hector, drummer for Iggy pop and
                ‘Razorlight’. These beasts, amongst others, were all big
                inspirations to my playing and each added a new dimension to my
                drumming. They also helped to spark deep interest in genres such
                as Jazz/ Latin, Hip Hop, Motown, Blues and much more.
              </p>
              <p>
                Concurrently, I began playing with Keny Charles in a
                Jazz/Funk/Soul band. Keny has worked with and supported the
                likes of George Benson and Lionel Richie. This was an important
                time in my development as within this band I worked with Derrick
                Mcintyre, former Jamiroquai bassist which greatly aided in
                improving my feel and musicality. Shortly after I began playing
                in a Jazz quartet with my dad called Jazzetude at venues across
                London such as the Jazz Cafe. A year later I joined The Days
                Run, an indie rock band and played on and mixed down 3 singles
                as well as toured with them across London and the UK. I met
                FRNDS as CMPNY around the same time and did some production work
                with them. Between this, I met Andy Metcalfe, bassist for
                Squeeze & ‘the soft boys’ who had also worked with Jools
                Holland. We played predominantly in a Gypsy Jazz band called
                ‘The Garcons’, across London. Throughout all this I’ve still
                been composing / doing production work and I always set aside
                downtime for my slightly unhealthy video game obsession.
              </p>
            </div>
          </div>
        </AboutStyles> */}
      </Layout>
    </>
  )
}

export default About
