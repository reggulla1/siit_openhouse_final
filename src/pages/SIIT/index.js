import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const ImgContainer = styled.div`
  width: 100%;
  height: 150px;
`;

const TitleContainer = styled.div`
  margin-top: 2em;
`

const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 5% 0;
`;


const FooterContainer = styled.div`
`

const Text = styled.p`
  font-size: 25px;
`
export default () => (
  <div className="has-text-centered">
    <section class="hero is-dark">
      <div className="fact">
        <ImgContainer>
          <img
            className="siitLogo"
            src={process.env.PUBLIC_URL + "/images/siit_logo.png"}
            alt="DEVAHOY LOGO"
          />
        </ImgContainer>
        <TitleContainer>
          <h1 className="title">
            Sirindhorn International Institute of Technology
          </h1>
        </TitleContainer>
        
        <ButtonContainer>
          <Link to="/Fact">
            <button
              class="button5"
              onClick={() =>
                window.responsiveVoice.speak(
                  "สถาบันเทคโนโลยีนานาชาติสิรินธร (เอสไอไอที) เป็นสถาบันการศึกษาด้านวิศวกรรมศาสตร์ เทคโนโลยี และการจัดการ สังกัดมหาวิทยาลัยธรรมศาสตร์[1] ปัจจุบันมีทั้งหมด 9 สาขาวิชา การเรียนการสอนทั้งหมดเป็นหลักสูตรนานาชาติใช้ภาษาอังกฤษเป็นสื่อ ผู้จบการศึกษารับปริญญาจากสภามหาวิทยาลัยธรรมศาสตร์",
                  "Thai Female",
                  { rate: 1.0 }
                )
              }
            >
              <i class="fas fa-university"></i>
              <Text>Fact</Text>
            </button>
          </Link>
          <Link to="/History">
            <button
              class="button5"
              onClick={() =>
                window.responsiveVoice.speak(
                  "ศาสตราจารย์ เกริกเกียรติ พิพัฒนเสรีธรรม อธิการบดีมธ.ในขณะนั้น กับ นายอานันท์ ปันยารชุน นายพารณ อิศรเสนา ณ อยุธยา และท่านผู้หญิงนิรมล สุริยสัตย์ ผู้นำของวงการอุตสาหกรรมในยุคนั้น จึงได้หารือและประสานงานจนได้ก่อตั้ง โครงการวิศวกรรมศาสตร์ภาคภาษาอังกฤษขึ้นในคณะวิศวกรรมศาสตร์ มหาวิทยาลัยธรรมศาสตร์ เมื่อปี  2535  ต่อมาได้รับความร่วมมือจาก สภาอุตสาหกรรมแห่งประเทศไทย และสมาพันธ์องค์กรเศรษฐกิจญี่ปุ่น จึงได้เปลี่ยนสถานะก่อตั้งเป็นสถาบันชื่อว่า สถาบันเทคโนโลยีนานาชาติ แห่งมหาวิทยาลัยธรรมศาสตร์ เมื่อวันที่ 16 กันยายน 2537 และต่อมาได้รับพระราชทานชื่อสถาบันจากพระบาทสมเด็จพระเจ้าอยู่หัวภูมิพลอดุลยเดช เมื่อวันที่ 28 มิถุนายน 2539 เป็น สถาบันเทคโนโลยีนานาชาติสิรินธร ตามพระนามสมเด็จพระเทพรัตนราชสุดาฯ สยามบรมราชกุมารี ดังเช่นทุกวันนี้",
                  "Thai Female",
                  { rate: 1.0 }
                )
              }
            >
              <i class="fas fa-history"></i>
              <Text>History</Text>
            </button>
          </Link>
          <Link to="/Curriculum">
            <button
              class="button5"
              onClick={() =>
                window.responsiveVoice.speak(
                  "ปัจจุบัน มีทั้งหมด 9 ภาควิชา ได้แก่ วิศวกรรมเคมี วิศวกรรมโยธา วิศวกรรมไฟฟ้า วิศวกรรมคอมพิวเตอร์ วิศวกรรมดิจิทัล วิศวกรรมเครื่องกล  วิศวกรรมอุตสาหการ เทคโนโลยีการจัดการ การจัดการวิศวกรรม",
                  "Thai Female",
                  { rate: 1.0 }
                )
              }
            >
              <i class="fas fa-book"></i>
              <Text>Curriculum</Text>
            </button>
          </Link>
          <Link to="/MapDirection">
            <button
              class="button5"
              onClick={() =>
                window.responsiveVoice.speak(
                  "ปัจจุบันเอสไอไอทีขยายการศึกษาเป็นสองวิทยาเขต ได้แก่ วิทยาเขตธรรมศาสตร์รังสิต และวิทยาเขตบางกะดี",
                  "Thai Female",
                  { rate: 1.0 }
                )
              }
            >
              <i class="fas fa-map-marker-alt"></i>
              <Text>Campus</Text>
            </button>
          </Link>
          <Link to="/Admission">
            <button
              class="button5"
              onClick={() =>
                window.responsiveVoice.speak(
                  "มีข้อมูลเกี่ยวกับ ตาราง admission ข้อมูลทุนการศึกษา และ การรับสมัครผ่านเว็บไซด์",
                  "Thai Female",
                  { rate: 1.0 }
                )
              }
            >
              <i class="fas fa-cogs"></i>
              <Text>Admission</Text>
            </button>
          </Link>
        </ButtonContainer>

        <FooterContainer>
          <h2 className="page-title"></h2>
          <p>Call: +66 2896 9009 Ext. 1002-1006</p>
          <p>E-mail: admission@siit.tu.ac.th</p>
        </FooterContainer>
      </div>
    </section>
  </div>
);
