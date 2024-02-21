"use client"
import Image from "next/image";
import 'survey-core/defaultV2.min.css';
import {Model} from 'survey-core'
import {Survey} from "survey-react-ui"
import { useCallback } from 'react';

const json = {
  "title": "Autism",
  "description": "blah blah blah ",
  "logoWidth": "600px",
  "logoHeight": "300px",
  "logoFit": "none",
  "logoPosition": "right",
  "pages": [
   {
    "name": "page1",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question1",
      "choices": [
       "Item 1",
       "Item 2",
       "Item 3"
      ]
     },
     {
      "type": "radiogroup",
      "name": "question3",
      "choices": [
       "Item 1",
       "Item 2",
       "Item 3"
      ]
     }
    ],
    "title": "page1",
    "description": "page1 blah blah blah"
   },
   {
    "name": "page2",
    "elements": [
     {
      "type": "radiogroup",
      "name": "question2",
      "choices": [
       "Item 1",
       "Item 2",
       "Item 3"
      ]
     }
    ]
   }
  ]
 }


export default function Home() {
  const model = new Model(json)
  const alertResults = useCallback((sender) => {
    const results = JSON.stringify(sender.data);
    alert(results);
  }, []);
  
  model.onComplete.add(alertResults);
  return <Survey model={model}></Survey>
   
}
