import React from 'react'
import styled from 'styled-components'

const History = styled.div`
  padding: 5%;
`

const ImgContainer = styled.div`
  margin-bottom: 2em;
`

const Info = styled.div`
`

export default () => (
  <div className="has-text-centered">
    <section class="hero is-dark">
      <History>
      <ImgContainer>
        <img src={process.env.PUBLIC_URL + '/images/siit_logo.png'} alt="DEVAHOY LOGO" width="150" height="150"  />
      </ImgContainer>
      <Info>
        <h1 className="title">SIIT History</h1>
        <h2 className="page-title">A cooperation agreement among Keidanren, FTI, and Thammasat University was reached in 1992 to establish bachelor’s degree programs in engineering at Thammasat University with initial funds provided by Keidanren and FTI. After two years of successful operation, the “International Institute of Technology (IIT)” was founded on September 16, 1994. Her Royal Highness Princess Maha Chakri Sirindhorn graciously presided over the Cornerstone Laying Ceremony of a new building at the Rangsit Center of Thammasat University. His Majesty King Bhumibol Adulyadej of Thailand graciously granted the Institute a new name, “Sirindhorn International Institute of Technology (SIIT),” on June 28, 1996.</h2>
      </Info>
      </History>
    </section>
  </div>
  
)


