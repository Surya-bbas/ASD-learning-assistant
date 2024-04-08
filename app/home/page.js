"use client"
import Image from "next/image";
import 'survey-core/defaultV2.min.css';
import {Model} from 'survey-core'
import {Survey} from "survey-react-ui"
import { useCallback, useState } from 'react';
import { useUserLoginStore } from "../globalState";
import { useRouter } from 'next/navigation'

import tailwindConfig from "@/tailwind.config";

import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "./home.scss"

export default function Home() {
  //variables
  const AgreeQuestion = ["question1", "question7", "question8", "question10"]
  const DisAgreeQuestion = ["question2", "question3", "question4", "question5", "question6", "question9"]
  //State
  const user = useUserLoginStore((state) => state.user);
  
  
  //Router

  const router = useRouter()



  return(
    <>
      <p>{user}</p>
      <div className="homepage">
        <header className="header">
        <h1>Welcome to Learning Assistant Application</h1>
        </header>
        <main className="main-content">
        <section className="section app-info">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="content-wrapper">
                  <h2 className="font-bold">Understanding Autism</h2>
                  <p>
                  Autism is a unique way of experiencing the world. The Learning Assistant is designed to support children with autism in their learning journey by providing personalized assistance and a safe, engaging environment.
                  </p>
                  <br/>
                  <p>
                  Understanding autism involves recognizing that it's a neurodevelopmental disorder that affects how individuals perceive and interact with the world around them. Autism is not a single condition but rather a spectrum, meaning it can manifest differently in each person. This uniqueness is what makes autism a distinctive way of experiencing the world, where sensory sensitivities, communication challenges, and repetitive behaviors can be prominent features.
                  </p>
                  <br/>
                  <p>
                  The Learning Assistant acknowledges and respects this diversity within autism. It's specifically crafted to cater to the needs of children on the autism spectrum by offering personalized assistance tailored to their individual strengths and challenges. By creating a safe, engaging environment, The Learning Assistant aims to facilitate a positive learning journey for these children, providing them with the support they need to thrive and succeed.
                  </p>
                </div>
              </Col>
              <Col md={6}>
                <div className="illustration">
                <Card.Img variant="top" src="autism1.svg" width={256}/>
                <Card.Img variant="top" src="autism2.svg" width={256}/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Symptoms Section */}
        <section className="section systemDes">
          <Container>
            <Row className="align-items-center">
              <Col md={6} order={2}>
                <div className="content-wrapper">
                  <h2 className="font-bold">How to use the application?</h2>
                
    <h3 className="font-bold">Login or Create an Account:</h3>
    <ol>
      <li>Users can sign up for an account or log in if they already have one.</li>
      <li>During the account setup, users can provide information about their child, including preferences, learning goals, and any specific needs or challenges.</li>
    </ol>
    <br/>
    <h3 className="font-bold">Navigate to Preferred Learning Method Page:</h3>
    <ol>
      <li>After logging in, users can navigate to the preferred learning method page.</li>
      <li>The application offers various learning methods tailored to different learning styles and preferences, such as visual learning, interactive lessons, auditory cues, and more.</li>
      <li>Users can choose the learning method that best suits their child's needs and preferences.</li>
    </ol>
    <br/>
    <h3 className="font-bold">Enter Desired Topic:</h3>
    <ol>
      <li>Once on the preferred learning method page, users can enter the topic or subject they want their child to learn about.</li>
      <li>The application provides a wide range of topics and educational content suitable for children with autism, covering areas like language development, social skills, cognitive abilities, and more.</li>
    </ol>
    <br/>
    <h3 className="font-bold">Begin Learning:</h3>
    <ol>
      <li>After entering the desired topic, users can start the learning session.</li>
      <li>The application presents engaging and interactive content related to the topic, designed to capture the child's interest and facilitate effective learning.</li>
      <li>Visual aids, interactive exercises, and personalized feedback are integrated into the learning experience to enhance comprehension and retention.</li>
    </ol>
    <br/>
    <h3 className="font-bold">Progress Tracking and Database Storage:</h3>
    <ol>
      <li>As the child progresses through the learning activities, [Application Name] tracks their performance and records the data in the database.</li>
      <li>This data includes information about the topics learned, the child's interaction patterns, areas of strength, and areas that may require further focus or support.</li>
      <li>Over time, the application uses this data to improve its recommendations and tailor the learning experience even more precisely to the child's individual needs and learning style.</li>
    </ol>
    <br/>
    <p>By following these steps, users can effectively utilize [Application Name] to support their child's learning journey, benefitting from personalized assistance, engaging content, and continuous improvement through data-driven recommendations.</p>


                </div>
              </Col>
              <Col md={6} order={1}>
                <div className="illustration">
                <Card.Img variant="top" src="how1.svg" width={256}/>
                <Card.Img variant="top" src="how2.svg" width={256}/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Preventive Measures Section */}
        <section className="section features">
          <Container>
            <Row className="align-items-center">
              <Col md={6}>
                <div className="content-wrapper">
                  <h2 className="font-bold">Features of The Learning Assistant</h2>
                  <section>
    
      <h3 className="font-bold">Story-Based Learning:</h3>
      <p>The Learning Assistant utilizes a story-based learning approach to make the educational content more relatable and engaging for children. Stories help create context, stimulate imagination, and enhance comprehension by connecting abstract concepts to real-life scenarios. The narrative structure of story-based learning promotes sequential learning, logical thinking, and emotional engagement.</p>

      <h3 className="font-bold">Visual Aid:</h3>
      <p>Visual aids are integrated into The Learning Assistant to support visual learners and enhance understanding. Visual elements such as images, infographics, charts, and diagrams are used to represent concepts, reinforce learning, and facilitate memory retention. The visual presentation of information helps children with autism process information more effectively and make meaningful connections.</p>

      <h3 className="font-bold">Auditory Aid:</h3>
      <p>The Learning Assistant incorporates auditory aids to accommodate auditory learners and improve communication skills. Audio elements such as narration, sound effects, and interactive voice prompts are utilized to deliver instructions, explanations, and feedback. Auditory aids enhance listening comprehension, language development, and auditory processing skills in children with autism.</p>

      <h3 className="font-bold">Game-Based Learning:</h3>
      <p>Game-based learning features interactive games, quizzes, puzzles, and challenges that make learning enjoyable and motivating. Gamification elements such as points, levels, rewards, and progress tracking add excitement and encourage active participation. Game-based learning promotes problem-solving, decision-making, critical thinking, and social interaction skills in a playful and immersive environment.</p>
    </section>
                </div>
              </Col>
              <Col md={6}>
                <div className="illustration">
                <Card.Img variant="top" src="f1.svg" width={256}/>
                <Card.Img variant="top" src="f2.svg" width={256}/>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* Vaccine Awareness Section */}
        <section className="section vaccine-awareness">
        <h2 className="font-bold">Check out the learnig methods!</h2>
        <Container>
            <Row className="align-items-center">
              <Col md={6} order={2}>
                <div className="content-wrapper">
                <h3 className="font-bold">Story-Based Learning:</h3>
      <p>
      The Learning Assistant utilizes a story-based learning approach to make the educational content more relatable and engaging for children. Stories help create context, stimulate imagination, and enhance comprehension by connecting abstract concepts to real-life scenarios.
      </p>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>{router.push("/story")}}>click here for story</button>
      <br />
      <h3 className="font-bold">Expiriential-Based Learning:</h3>
      <p>
      Experiential learning via decision-making games immerses learners in realistic scenarios, encouraging active participation and critical thinking. Through hands-on experiences and consequence-based choices, players develop decision-making skills and deepen their understanding of concepts. This approach fosters self-reflection, continuous improvement, and practical application of knowledge.
      </p>
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" onClick={()=>{router.push("/game")}}>click here for exp</button>
                </div>
              </Col>
              <Col md={6} order={1}>
                <div className="illustration">
                <Card.Img variant="top" src="c1.svg" width={256}/>
                <Card.Img variant="top" src="c2.svg" width={256}/>
                </div>
              </Col>
            </Row>
          </Container>

        </section>
      </main>





      </div>
      


      
      
      




    </>
  ) 
   
}
