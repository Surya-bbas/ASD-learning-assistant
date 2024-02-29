"use client"
import { useState } from 'react';

import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput, TypingIndicator } from '@chatscope/chat-ui-kit-react';
import  OpenAI  from "openai"

const API_KEY = process.env.NEXT_PUBLIC_SECRET_KEY;

// "Explain things like you would to a 10 year old learning how to code."
const systemMessage = { //  Explain things like you're talking to a software professional with 5 years of experience.
  "role": "system",
    "content": "i want you to generate a story that is easy to understand and should be engaging. The story is for children under the age of 15 and with autism. The story should be in 3 parts with each new part starting with '-$'. The story should be in such a way that it is easy to visualize. There should be a fun fact for each part. The story should generated in 3 parts. It should be easy to visualize. Use simple words and it should not be complicated. Based on the give topic it should be generated. The story should be less than 300 words. Add a fun fact for each part. The word limit is strictly 300. dont go beyond it. "
}

const story = () => {

  const [messages, setMessages] = useState([
    {
      message: "Hello, I'm your learning assistant! what shall we learn today?!",
      sentTime: "just now",
      sender: "ChatGPT"
    }
  ]);

  const [isTyping, setIsTyping] = useState(false);
  // const [newMessageParts, setNewMessageParts] = useState([])

  const handleSend = async (message) => {
    const newMessage = {
      message,
      direction: 'outgoing',
      sender: "user"
    };

    const newMessages = [...messages, newMessage];
    
    setMessages(newMessages);

    // Initial system message to determine ChatGPT functionality
    // How it responds, how it talks, etc.
    setIsTyping(true);
    await processMessageToChatGPT(newMessages);
    

  };

  async function processMessageToChatGPT(chatMessages) { // messages is an array of messages
    // Format messages for chatGPT API
    // API is expecting objects in format of { role: "user" or "assistant", "content": "message here"}
    // So we need to reformat

    let apiMessages = chatMessages.map((messageObject) => {
      let role = "";
      if (messageObject.sender === "ChatGPT") {
        role = "assistant";
      } else {
        role = "user";
      }
      return { role: role, content: messageObject.message}
    });


    // Get the request body set up with the model we plan to use
    // and the messages which we formatted above. We add a system message in the front to'
    // determine how we want chatGPT to act. 
    const apiRequestBody = {
      "model": "gpt-3.5-turbo",
      "messages": [
        systemMessage,  // The system message DEFINES the logic of our chatGPT
        ...apiMessages // The messages from our chat with ChatGPT
      ]
    }

    await fetch("https://api.openai.com/v1/chat/completions", 
    {
      method: "POST",
      headers: {
        "Authorization": "Bearer " + API_KEY,
        "Content-Type": "application/json"
      },
      body: JSON.stringify(apiRequestBody)
    }).then((data) => {
      return data.json();
    }).then((data) => {
      console.log(data);
      setMessages([...chatMessages, {
        message: data.choices[0].message.content,
        sender: "ChatGPT"
      }]);      
      let newMessagePartss = splitText(data.choices[0].message.content)
      newMessagePartss.map((part,i) => {
        console.log("ethu parts",part)
        console.log("ethu index",i)

        if (i === 0){
          console.log("chumma")
        }
        else{
          generateImage(part)
        }
      })
      

      // console.log(newMessageParts);
      

      setIsTyping(false);
    });
  }

  // dalle
  const [userPrompt,setUserPrompt] = useState("snoop dogg in mars")
  const [imgUrl,setImgUrl] = useState([])

  //let dallePromt = "lol"

  const openai = new OpenAI({
    apiKey : process.env.NEXT_PUBLIC_SECRET_KEY_DALLE,
    dangerouslyAllowBrowser: true
  })


  const generateImage = async(prompt) => {
    const imageParameters = {
        model: "dall-e-2",
        prompt: prompt,
        n:1,
        size:"256x256"
    }
    const response = await openai.images.generate(imageParameters)
    const urlData = response.data[0].url
    const imgUrls = [...imgUrl, urlData]
    setImgUrl(imgUrls)
    
  }

  
    function splitText(text){
      text = text.replace(/^ *Fun Fact:.*$/gm, '');
      const parts = text.split("-$").filter(part => part.trim() !== "");
      return parts;
    }

    let partList = [""]
    
  return (
    <>
      <div className="grid h-screen place-items-center">
      <h2>Learning Assistance For Children With Autism</h2>
      <div style={{ position:"relative", height: "500px", width: "700px" }}>
        <MainContainer>
          <ChatContainer>       
            <MessageList 
              scrollBehavior="smooth" 
              typingIndicator={isTyping ? <TypingIndicator content="Learning assistant is typing" /> : null}
            >
              {messages.map((message, i) => {
                console.log(message.message)
                // const text = {}
                // if(message.message.length > 100){
                //   const text = message
                //   console.log("inside if")
                // } else {
                //   console.log("lolfofnfjfdjdjj")
                // }
                return(<>
                    <Message key={i} model={message} />
                    {imgUrl && imgUrl?.map((url,k)=>{
                      <>
                        <p key={k}>{url}</p>
                      </>
                    }) }
                    {/* {message?.message?.length>100 && (partList = splitText(message.message))} */}

                    {/* {
                      partList.map((part, k)=>{
                        setUserPrompt(part)
                        const url = generateImage(userPrompt);
                        <>
                          {url && <img key = {k} src={url}  alt="demo-img"/>}
                        </>
                      })
                    } */}


                    </>)
              })}

              <img src="next.svg" className='mt-5'/>
            </MessageList>
            <MessageInput placeholder="Type message here" onSend={handleSend} />        
          </ChatContainer>
        </MainContainer>
      </div>
    </div>

    <div>
        
        {imgUrl && <img src={imgUrl} alt="demo-img"/>}
    </div>
      
    </>
    
  )
}

export default story