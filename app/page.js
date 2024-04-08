"use client"
import Image from "next/image";
import 'survey-core/defaultV2.min.css';
import {Model} from 'survey-core'
import {Survey} from "survey-react-ui"
import { useCallback, useState } from 'react';
import { useCountStore } from "./globalState";
import { useRouter } from 'next/navigation'

export default function Home() {
  //variables
  const AgreeQuestion = ["question1", "question7", "question8", "question10"]
  const DisAgreeQuestion = ["question2", "question3", "question4", "question5", "question6", "question9"]
  //State
  
  const count = useCountStore((state) => state.count)
  const increaseCount = useCountStore((state) => state.increaseCount)
  //Router
  const router = useRouter()

  return(
    <>
      
      <p>{count}</p>      
    </>
  ) 
   
}
