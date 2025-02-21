"use client";

import { useState } from 'react'
import Header3 from './components/header';

export default function Page() {
  const students = ['Agung', 'Bhaskara', 'Agung Bhaskara']
  const [likes, setLikes] = useState(0); 

  function handleClick(){
      setLikes(likes + 1);
  };

  return  (
      <>
          <Header3 author="Agung" />
          <Header3 author="Agung Bhaskara"/>
          <ul>
              {
                  students.map((student) => (
                     <li key={student}>{student}</li>
                  ))
              }
          </ul>
          <button onClick={handleClick}> Like ({likes})</button>
      </>   
  );
};