import { createGlobalStyle } from "styled-components"
import fontBold1 from "./../../fonts2/brandon-bold.eot"
import fontBold2 from "./../../fonts2/brandon-bold.woff"
import fontBold3 from "./../../fonts2/brandon-bold.woff2"
import fontBold4 from "./../../fonts2/brandon-bold.svg"
import fontBold5 from "./../../fonts2/brandon-bold.ttf"
import fontBold6 from "./../../fonts/Brandon_blk_it.otf"

import fontreg1 from "./../../fonts2/brandon-reg.eot"
import fontreg2 from "./../../fonts2/brandon-reg.woff"
import fontreg3 from "./../../fonts2/brandon-reg.woff2"
import fontreg4 from "./../../fonts2/brandon-reg.svg"
import fontreg5 from "./../../fonts2/brandon-reg.ttf"
import fontreg6 from "./../../fonts/Brandon_reg.otf"

import dinnextboldttf from "./../../fonts/DINNextW1G-Bold.ttf"
import dinnextboldwoff from "./../../fonts/DINNextW1G-Bold.woff"
import dinnextboldwoff2 from "./../../fonts/DINNextW1G-Bold.woff2"
import dinnextregttf from "./../../fonts/DINNextW1G-Regular.ttf"
import dinnextregwoff from "./../../fonts/DINNextW1G-Regular.woff"
import dinnextregwoff2 from "./../../fonts/DINNextW1G-Regular.woff2"

export const GlobalStyle = createGlobalStyle`
:root {  
  --bannerTitle: 34px;
  --borderSpacing: 30px;
  --menuWidth: 100vw;
  --blockquote: 20px;
  --background: #ffffff00;
  --primary: #ffc400;
  --bodyColor: white;
  --inActive: #555;
  --letterSpacing: -0.075rem;
  --boxShadow: 0px 15px 22px 3px rgba(0, 0, 0, 0.55);
  --textShadow: 0px 0px 5px rgba(0, 0, 0, 1);
  --p: 14px;
  --h2: 20px;
  --h3: 19px;
  --h4: 18px;
  --h5: 17px;
  --h6: 16px;
  --gap: 40px;
  --sectionMargin: 60px;
  @media(min-width:375px) {
    --bannerTitle: 36px;    
    --h2: 22px;
    --h3: 21px;
    --h4: 20px;
    --h5: 19px;
    --h6: 18px;
    --sectionMargin: 80px;
  }
  @media(min-width:414px) {
    --bannerTitle: 40px;    
    --h2: 27px;
    --h3: 25px;
    --h4: 23px;
    --h5: 21px;
    --h6: 20px;
  }
  @media(min-width:768px) {
    --bannerTitle: 46px;    
    --blockquote: 26px;
    --p: 15px;
    --h2: 30px;
    --h3: 28px;
    --h4: 26px;
    --h5: 24px;
    --h6: 22px;
    --sectionMargin: 100px;
  }
  @media(min-width:1024px) {
    --borderSpacing: 75px;
    --p: 16px;
    --h2: 36px;
    --h3: 32px;
    --h4: 29px;
    --h5: 27px;
    --h6: 25px;
    --sectionMargin: 180px;
  }
  @media(min-width:1200px) {
    --p: 17px;
  }
}
* {
    box-sizing: border-box;
    scroll-behavior: smooth;
}  

@font-face {
  font-family: 'DIN-Next-Bold';
  src: url('${dinnextboldwoff2}') format('woff2'),
      url('${dinnextboldwoff}') format('woff'),
      url('${dinnextboldttf}') format('truetype');
  font-weight: bold;
  font-style: normal;
  font-display: swap;
}

@font-face {
  font-family: 'DIN-Next-Reg';
  src: url('${dinnextregwoff2}') format('woff2'),
      url('${dinnextregwoff}') format('woff'),
      url('${dinnextregttf}') format('truetype');
  font-weight: normal;
  font-style: normal;
  font-display: swap;
}



body {
  font-family: 'DIN-Next-Reg';

    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: var(--background);
    color: #7e7474;
    overflow-x: hidden;
    font-size: var(--p);
}




h1,
h2 {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    line-height: 1.25em;
    font-weight: 700;
    letter-spacing: var(--letterSpacing);
    @media(min-width: 1200px) {
        margin-bottom: 1.5rem;
    }
}
h3,
h4,
h5,
h6 {
  margin-top: 0.5rem;
  margin-bottom: 1rem;
}
h1 {
    font-size:48px;
    font-family: "DIN-Next-Bold", sans-serif;
    letter-spacing: -4px;

}
h2 {
    font-size: var(--h2);
}
h3 {
  font-size: var(--h3);
}
h4 {
  font-size: var(--h4);
}
h5 {
  font-size: var(--h5);
}
h6 {
  font-size: var(--h6);
}
p {
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--bodyColor);
}
b,
strong {
  font-weight: 700;
}
i {
  font-style: italic;
}
.underline {
  text-decoration: underline;
  text-underline-position: under;
  text-decoration-color: rgba(175, 194, 203, 0.25);
  text-decoration-thickness: 0.125rem;
}
hr,
ol,
ul,
blockquote {
  margin-top: calc(var(--sectionMargin) / 2);
  margin-bottom: calc(var(--sectionMargin) / 2);
}
hr {
  border: none; 
  height: 2px;
  background-color: #333;
}
a {
  color: var(--primary);
  transition: color 0.3s ease;
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: none;
  }
}
blockquote {
  font-size: var(--blockquote);
  font-family: 'Times New Roman', Times, serif;
  font-style: italic;
  margin-left: 0;
  border-left: 2px solid var(--primary);
  padding-left: var(--gap);
}
.container {
  margin-left: auto;
  margin-right: auto;
  // &__tight {
  //   max-width: 1400px;
  // }
  &__scroll {
    overflow-x: scroll;
    display: flex;
    scroll-snap-type: x mandatory;
    &::-webkit-scrollbar {
      width: 14px;
      height: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background: var(--primary);
      border-radius: 0px;
    }
    &::-webkit-scrollbar-thumb:hover {
      background: var(--primary);
    }
    &::-webkit-scrollbar-track {
      background: #000;
      border-radius: 0px;
    }
    @media (min-width: 1200px) {
      overflow-x: visible;
    }
  }
}
.section {
    // margin-top: var(--sectionMargin);
    // margin-bottom: var(--sectionMargin);
    // padding: 0 50px;
    &.section__padding {
        padding-top: var(--sectionMargin);
        padding-bottom: var(--sectionMargin);
    }
}
.intro__area {
  margin-bottom: calc(var(--gap) * 2);
  max-width: 700px;
  h2 {
    display: inline-block;
    border-bottom: 2px solid rgba(255,255,255,0.15);
  }
}
.learn__more {
  margin-top: calc(var(--gap) * 2);
}
.feed {
  display: flex;
  flex-wrap: wrap;
  gap: var(--gap);
  margin-left: auto;
  margin-right: auto;
  max-width: 1400px;
  >* {
    flex: 0 0 100%;
    @media(min-width:414px) {
      flex-basis: calc(50% - (calc(var(--gap) / 2)));
    }
    @media(min-width:1024px) {
      flex-basis: calc(33.333% - 27px);
    }
  }
}
.contentimg {
  margin-top: var(--gap);
  margin-bottom: var(--gap);
}
.contentdescription {
  color: var(--bodyColor);
  font-style: italic;
  font-size: 0.813rem;
  text-align: center;
  margin-top: calc(var(--gap) / 2);
}
`
