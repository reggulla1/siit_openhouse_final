import React from 'react'
import styled from 'styled-components'

const Map = styled.div`
  padding: 5%;
`

const ImgContainer = styled.div`
  margin-bottom: 2em;
`

const Info = styled.div`
`

const ButtonContainer = styled.div`
  margin-top: 1em;
  width: 100%;
`

const Text = styled.p`
  font-size: 2em;
`

export default () => (
  <div className="has-text-centered">
    <section class="hero is-dark">
      <Map>
        <ImgContainer>
          <img src={process.env.PUBLIC_URL + '/images/siit_logo.png'} alt="DEVAHOY LOGO" width="150" height="150"  />
        </ImgContainer>
        <Info>
          <Text className="title">Sirindhorn International Institute of Technology</Text>
          <Text className="title3">Rangsit Campus</Text>
          <ButtonContainer>
            <button class="button is-danger is-rounded is-large generalButton"><a href="https://www.google.co.th/maps/place/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%A3+%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C/@14.0690077,100.6042421,17z/data=!4m5!3m4!1s0x30e27f8adde458f3:0x536c67b40b52eabe!8m2!3d14.068891!4d100.6074577" target="_blank">Google Map</a></button>
          </ButtonContainer>
          <Text className="title3">Bangkadi Campus</Text>
          <ButtonContainer>
            <button class="button is-success is-rounded is-large generalButton"><a href="https://www.google.co.th/maps/place/%E0%B8%AA%E0%B8%96%E0%B8%B2%E0%B8%9A%E0%B8%B1%E0%B8%99%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5%E0%B8%99%E0%B8%B2%E0%B8%99%E0%B8%B2%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4%E0%B8%AA%E0%B8%B4%E0%B8%A3%E0%B8%B4%E0%B8%99%E0%B8%98%E0%B8%A3+%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%A8%E0%B8%B9%E0%B8%99%E0%B8%A2%E0%B9%8C%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%81%E0%B8%B0%E0%B8%94%E0%B8%B5/@13.9814782,100.5505503,17z/data=!4m12!1m6!3m5!1s0x30e2816a2d2900dd:0x77e1bc6244496808!2z4Liq4LiW4Liy4Lia4Lix4LiZ4LmA4LiX4LiE4LmC4LiZ4LmC4Lil4Lii4Li14LiZ4Liy4LiZ4Liy4LiK4Liy4LiV4Li04Liq4Li04Lij4Li04LiZ4LiY4LijIOC4oeC4q-C4suC4p-C4tOC4l-C4ouC4suC4peC4seC4ouC4mOC4o-C4o-C4oeC4qOC4suC4quC4leC4o-C5jCDguKjguLnguJnguKLguYzguJrguLLguIfguIHguLDguJTguLU!8m2!3d13.9802792!4d100.5549585!3m4!1s0x30e2816a2d2900dd:0x77e1bc6244496808!8m2!3d13.9802792!4d100.5549585" target="_blank">Google Map</a></button>
          </ButtonContainer>
        </Info>
      </Map>
    </section>
  </div>

  
)
