"use client"
import Image from "next/image";
import 'survey-core/defaultV2.min.css';
import {Model} from 'survey-core'
import {Survey} from "survey-react-ui"
import { useCallback, useState } from 'react';
import { useCountStore } from "./globalState";
import { useRouter } from 'next/navigation'



const json = {
  "title": "Autism Diagnosis Survey",
  "description": "Please answer the following question with patience and carefully reading the question and answering to them accordingly",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question1",
      "title": "I often notice small sounds when others do not.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question2",
      "title": "I usually concentrate more on the whole picture, rather than the small details.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page3",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question3",
      "indent": 1,
      "title": "I find it easy to do more than one thing at once.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page4",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question4",
      "indent": 1,
      "title": "If there is an interruption, I can switch back to what I was doing very quickly.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page5",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question5",
      "indent": 1,
      "title": "I find it easy to 'read between the lines' when someone is talking to me.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page6",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question6",
      "indent": 1,
      "title": "I know how to tell if someone listening to me is getting bored.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page7",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question7",
      "indent": 1,
      "title": "﻿When I'm reading a story I find it difficult to work out the characters' intentions.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page8",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question8",
      "indent": 1,
      "title": "plants I like to collect information about categories of things (e.g. types of car, types of bird, types of train, types of plant etc).",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page9",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question9",
      "indent": 1,
      "title": "I find it easy to work out what someone is thinking or feeling just by looking at their face.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   },
   {
    "name": "page10",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question10",
      "indent": 1,
      "title": "I find it difficult to work out people's intentions.",
      "isRequired": true,
      "choices": [
       {
        "value": "Item 1",
        "text": "Definitely Agree"
       },
       {
        "value": "Item 2",
        "text": "Slightly Agree"
       },
       {
        "value": "Item 3",
        "text": "Slightly Disagree"
       },
       {
        "value": "Item 4",
        "text": "Definitely Disagree"
       }
      ]
     }
    ]
   }
  ]
 }


export default function Home() {
  //variables
  const AgreeQuestion = ["question1", "question7", "question8", "question10"]
  const DisAgreeQuestion = ["question2", "question3", "question4", "question5", "question6", "question9"]
  //State
  const [Result, setResult] = useState({})
  const [number, setNumber] = useState(0)
  const count = useCountStore((state) => state.count)
  const increaseCount = useCountStore((state) => state.increaseCount)
  //Router
  const router = useRouter()
  //Survey.js
  const model = new Model(json)
  const alertResults = useCallback((sender) => {
    const results = sender.data;
    setResult(results)

    AgreeQuestion.forEach(question => {
      if (results[question] ===  "Item 1" || results[question] === "Item 2") {
        increaseCount()
      }
    });

  // Check conditions for questions 2, 3, 4, 5, 6, and 9
    DisAgreeQuestion.forEach(question => {
      if (results[question] === "Item 3" || results[question] === "Item 4") {
        increaseCount()
      }
    });

   router.push("/asd")

  }, []);
  
  model.onComplete.add(alertResults);
  return(
    <>
      <Survey model={model}></Survey>
      <p>{count}</p>      
    </>
  ) 
   
}
