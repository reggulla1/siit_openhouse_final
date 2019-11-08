import React from 'react'
import styled from 'styled-components'

const Admission = styled.div`
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
      <Admission>
        <ImgContainer>
          <img src={process.env.PUBLIC_URL + '/images/siit_logo.png'} alt="DEVAHOY LOGO" width="150" height="150"  />
        </ImgContainer>
        <Info>
          <h1 className="title">Sirindhorn International Institute of Technology</h1>
          <ButtonContainer>
            <button class="button is-danger is-rounded is-large buttonWidth"><a href="https://www.siit.tu.ac.th/admission.php?sid=17&ssid=69" target="_blank">Admission Schedule</a></button>
          </ButtonContainer>
          <ButtonContainer>
            <button class="button is-success is-rounded is-large buttonWidth "><a href="https://www.siit.tu.ac.th/admission.php?sid=17&ssid=70" target="_blank">Scholarship Program</a></button>
          </ButtonContainer>
          <ButtonContainer>
            <button class="button is-warning is-rounded is-large buttonWidth"><a href="https://graduateadmissions.siit.tu.ac.th/" target="_blank">Online Application</a></button>      
          </ButtonContainer>
        </Info>
        
      </Admission>
    </section>
  </div>

  
)