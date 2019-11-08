/*
npm install
npm install react-simple-chatbot --save,npm node-fetch
npm start

service :
dialogflow  : 180 requests per minute*
dialogflowgateway : 1000 messages per month for free
responsivevoice : if the system require speech-to-text(use google chrome)

ref : https://lucasbassetti.com.br/react-simple-chatbot/#/docs/chatbot
*/
import Main from './Main';
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import ChatBot, { Loading } from 'react-simple-chatbot'



const welcome_msg = "SIIT สวัสดีค่ะ สามารถสอบถามเกี่ยวกับประวัติความเป็นมา หลักสูตรหรือเกี่ยวกับAdmission ได้เลยค่ะ"

 /* Google service */
// const appid = 'chatbot-tuopen-yeebca' // <- Google Cloud Project ID
const session = 'dialogflow-cli' // <- Session ID
const lang = 'th' // <- Language
const endpoint = `https://siit-tu-jfkumd.gateway.dialogflow.cloud.ushakov.co` // <- endpoint

// all available props
const theme = {
  background: '#f5f8fb',
  fontFamily: 'Helvetica Neue',
  headerBgColor: '#630680',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#630680',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

class TuChatbot extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      result: '',
      trigger: false,
      nextPath:'',
      redirect: false,
    };

    this.triggetNext = this.triggetNext.bind(this);
  }

  componentWillMount() {
    const self = this;
    const { steps } = this.props;
    const search = steps.search.value;
    console.log(steps.search.value)
    if(search==="History"){
     // window.location.replace('/history');
        

        this.setState({
          redirect: true,
          nextPath:'/history'
        })
    }
    
    if(search==="Fact"){

      this.setState({
        redirect: true,
        nextPath:'/fact'
      })
      
    }
    if(search==="Curriculum" ){

      this.setState({
        redirect: true,
        nextPath:'/curriculum'
      })
      
    }
    if(search==="Campus"){

      this.setState({
        redirect: true,
        nextPath:'/mapdirection'
      })
      
    }

    if(search==="Admission" ){
      this.setState({
        redirect: true,
        nextPath:'/admission'
      })
    }
    
    else{

    }

   

    const endpoints = encodeURI('https://dbpedia.org');
    const querys = encodeURI(`
      select * where {
      ?x rdfs:label "${search}"@en .
      ?x rdfs:comment ?comment .
      FILTER (lang(?comment) = 'en')
      } LIMIT 100
    `);

    const queryUrls = `https://dbpedia.org/sparql/?default-graph-uri=${endpoints}&query=${querys}&format=json`;
 
    const fetch = require('node-fetch')

    const xhr = new XMLHttpRequest();

    xhr.addEventListener('readystatechange', readyStateChange);


    function readyStateChange() {
console.log(steps.search.value)

      if (this.readyState === 4) {
  
        // Build a request
        var request = {
          session: session,
          queryInput: {
            text: {
              text: steps.search.value,
              languageCode: lang
            }
          }
        }
        // Talk to endpoint and return the results 
        fetch(endpoint, { method: 'POST', body: JSON.stringify(request), headers: { 'Content-Type': 'application/json' } })
          .then(res => res.json())
          .then(res => {
            var messages = res.queryResult.fulfillmentMessages
            for (var m in messages) {
              // Display Dialogflow/Webhook Messages 
              if (messages[m].text) {
                self.setState({ loading: false, result: messages[m].text.text[0] });
                let speaking = setTimeout(window.responsiveVoice.speak(messages[m].text.text[0], "Thai Female", {rate: 1.0}));


                self.triggetNext()
              } else {
                self.setState({ loading: false, result: 'ระบบอินเทอร์เน็ตขัดข้อง' });
                let speaking = setTimeout(window.responsiveVoice.speak("ระบบอินเทอร์เน็ตขัดข้อง", "Thai Female", {rate: 1.0}));
              }
            }

          })
      }
    }

    xhr.open('GET', queryUrls);
    xhr.send();
  }

  triggetNext() {
    this.setState({ trigger: true }, () => {
      this.props.triggerNextStep();
    });
  }
  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to={this.state.nextPath} />
    }
  }
  render() {
    const {loading, result } = this.state;

    return (
      <div className="TuChatbot">
         {this.renderRedirect()}
        {loading ? <Loading /> : result}
      </div>
    );
  }
}



TuChatbot.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

TuChatbot.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

var steps=[
  {
    id: '1',
    message: welcome_msg,
    trigger: 'search',
  },
  {
    id: 'search',
    user: true,
    trigger: '3',
  },
  {
    id: '3',
    component: <TuChatbot />,
    waitAction: true,
    asMessage: true,
    trigger: 'search',
  },
];
const ChatbotApp = () => (
  <ThemeProvider theme={theme}>
    <ChatBot
        headerTitle="SIIT Chatbot"
        //speechSynthesis={{ enable: true, lang: 'th'}} for window browser only
        recognitionEnable={true}
        recognitionLang='th'
        recognitionPlaceholder = 'TU กำลังฟังอยู่นะคะ'
        placeholder = 'เริ่มต้นการพิมพ์ได้เลยค่ะ'
        steps={steps} 
        userAvatar= 'logo192.png'
        botAvatar='logo192.png'
    />;
 </ThemeProvider>
);

export default ChatbotApp;