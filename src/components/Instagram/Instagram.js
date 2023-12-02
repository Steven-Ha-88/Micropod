import React, { useEffect } from "react"
import styled from "styled-components"

const Title = styled.h1`
  margin-top: 50px;
  text-align: center;
  font-size: 60px;
  font-weight: 700;
  color: #5c5c5c;
  line-height: 75px;
  font-family: "DIN-Next-Bold", sans-serif;
`

const Instagram = () => {
  useEffect(() => {
    {
      ;(function (d, s, id) {
        var js
        if (d.getElementById(id)) {
          return
        }
        js = d.createElement(s)
        js.id = id
        js.src = "https://embedsocial.com/cdn/ht.js"
        d.getElementsByTagName("head")[0].appendChild(js)
      })(document, "script", "EmbedSocialHashtagScript")
    }
  }, [])

  const renderSocial = () => {
    return (
      <div
        className="embedsocial-hashtag"
        data-ref="7d1d431c5392ed08fd438ae3493f185fd48c3f62"
      >
        <a
          className="feed-powered-by-es feed-powered-by-es-slider"
          href="https://embedsocial.com/social-media-aggregator/"
          target="_blank"
          title="Widget by EmbedSocial"
        ></a>
      </div>
    )
  }

  return (
    <>
      <Title>
        <h1>Follow Us</h1>
        <span style={{ color: "var(--primary)" }}>.</span>
      </Title>
      {renderSocial()}
    </>
  )
}

export default Instagram
