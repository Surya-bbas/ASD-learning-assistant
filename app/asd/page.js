"use client"
import React from 'react'
import { useCountStore } from '../globalState'
import {Model} from 'survey-core'
import {Survey} from "survey-react-ui"

const json={
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
       {
        "value": "Item 1",
        "text": "Defin"
       },
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
     },
     {
      "type": "rating",
      "name": "question4"
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

const page = () => {
  const count = useCountStore((state) => state.count)


  if (count < 6 ){
    alert("person doest have ASD")
  }
  const model = new Model(json)
  return (

    <div>
      <Survey model={model}></Survey>
        
    </div>
  )
}

export default page