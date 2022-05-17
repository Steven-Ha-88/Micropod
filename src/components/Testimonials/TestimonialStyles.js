import styled from "styled-components"

export const TestimonialStyles = styled.div`
  width: 100%;
  height: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 30px 10px;
  font-family: "DM Sans", sans-serif;
  transition: background 0.4s ease-in;
  background-color: #c394f8;

  #slider {
    position: relative;
    width: 50%;
    height: 32vw;
    margin: 150px auto;
    font-family: "Helvetica Neue", sans-serif;
    perspective: 1400px;
    transform-style: preserve-3d;
  }

  input[type="radio"] {
    position: relative;
    top: 108%;
    left: 50%;
    width: 18px;
    height: 18px;
    margin: 0 15px 0 0;
    opacity: 0.4;
    transform: translateX(-83px);
    cursor: pointer;
  }

  input[type="radio"]:nth-child(5) {
    margin-right: 0px;
  }

  input[type="radio"]:checked {
    opacity: 1;
  }

  #slider label,
  #slider label img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    color: white;
    font-size: 70px;
    font-weight: bold;
    border-radius: 3px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: transform 400ms ease;
  }

  /* Slider Functionality */

  /* Active Slide */
  #s1:checked ~ #slide1,
  #s2:checked ~ #slide2,
  #s3:checked ~ #slide3,
  #s4:checked ~ #slide4,
  #s5:checked ~ #slide5 {
    box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
    transform: translate3d(0%, 0, 0px);
  }

  /* Next Slide */
  #s1:checked ~ #slide2,
  #s2:checked ~ #slide3,
  #s3:checked ~ #slide4,
  #s4:checked ~ #slide5,
  #s5:checked ~ #slide1 {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translate3d(20%, 0, -100px);
  }

  /* Next to Next Slide */
  #s1:checked ~ #slide3,
  #s2:checked ~ #slide4,
  #s3:checked ~ #slide5,
  #s4:checked ~ #slide1,
  #s5:checked ~ #slide2 {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transform: translate3d(40%, 0, -250px);
  }

  /* Previous to Previous Slide */
  #s1:checked ~ #slide4,
  #s2:checked ~ #slide5,
  #s3:checked ~ #slide1,
  #s4:checked ~ #slide2,
  #s5:checked ~ #slide3 {
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
    transform: translate3d(-40%, 0, -250px);
  }

  /* Previous Slide */
  #s1:checked ~ #slide5,
  #s2:checked ~ #slide1,
  #s3:checked ~ #slide2,
  #s4:checked ~ #slide3,
  #s5:checked ~ #slide4 {
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
    transform: translate3d(-20%, 0, -100px);
  }
`
// input[type="radio"] {
//   display: none;
// }

// .card {
//   position: absolute;
//   width: 60%;
//   height: 100%;
//   left: 0;
//   right: 0;
//   margin: auto;
//   transition: transform 0.4s ease;
//   cursor: pointer;
// }

// .container {
//   width: 100%;
//   max-width: 800px;
//   max-height: 600px;
//   height: 100%;
//   transform-style: preserve-3d;
//   display: flex;
//   justify-content: center;
//   flex-direction: column;
//   align-items: center;
// }

// .cards {
//   position: relative;
//   width: 100%;
//   height: 100%;
//   margin-bottom: 20px;
// }

// img {
//   width: 100%;
//   height: 100%;
//   border-radius: 10px;
//   object-fit: cover;
// }

// #item-1:checked ~ .cards #test-3,
// #item-2:checked ~ .cards #test-1,
// #item-3:checked ~ .cards #test-2 {
//   transform: translatex(-40%) scale(0.8);
//   opacity: 0.4;
//   z-index: 0;
// }

// #item-1:checked ~ .cards #test-2,
// #item-2:checked ~ .cards #test-3,
// #item-3:checked ~ .cards #test-1 {
//   transform: translatex(40%) scale(0.8);
//   opacity: 0.4;
//   z-index: 0;
// }

// #item-1:checked ~ .cards #test-1,
// #item-2:checked ~ .cards #test-2,
// #item-3:checked ~ .cards #test-3 {
//   transform: translatex(0) scale(1);
//   opacity: 1;
//   z-index: 1;

//   img {
//     box-shadow: 0px 0px 5px 0px rgba(81, 81, 81, 0.47);
//   }
// }
