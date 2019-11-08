import React from 'react'
import styled from 'styled-components'

const Curriculum = styled.div`
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

export default () => (
  <div className="has-text-centered">
    <section class="hero is-dark">
      <Curriculum>
        <ImgContainer>
          <img src={process.env.PUBLIC_URL + '/images/siit_logo.png'} alt="DEVAHOY LOGO" width="150" height="150"  />
        </ImgContainer>
        <Info>
          <h1 className="title">Curriculum</h1>
          <h2 className="page-title2">SIIT offers international programs leading to Bachelor of Engineering (B.Eng.) and Bachelor of Science (B.Sc.) in the following fields:</h2>
          <p>Chemical Engineering</p>
          <p>Civil Engineering </p>
          <p>Computer Engineering</p>
          <p>Digital Engineering </p>
          <p>Electrical Engineering </p>
          <p>Engineering Management </p>
          <p>Industrial Engineering and Logistics Systems </p>
          <p>Management Technology </p>
          <p>Mechanical Engineering </p>
        </Info>
       
        <ButtonContainer>
          <button class="button is-warning is-rounded generalButton"><a href="https://www.siit.tu.ac.th/upload_images/Catalog2019/2019.09.26-Undergraduate%20Catalog2019.pdf" target="_blank">Full Catalog</a></button>
        </ButtonContainer>
        
      </Curriculum>
    </section>
  </div>
)
