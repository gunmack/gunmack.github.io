import React from "react";
import Link from "next/link";


function Nav({ name }) { 
  return (
    <div>
      <button className="button">
        <a href="../">{name}</a>
      </button>
    </div>
  );
}
function Header(){
  return(
    <div className="header">
      <h1>Julkar Naine Reedoy</h1>
    </div>
  )
}

function Intro(){
  return(
    <div className="text">
      <div>
        <p>
          Hi, my name is Julkar and welcome to my page :)<br></br> 
          I am a 2nd year Computing Science Student at Simon Fraser University. <br></br>
          My preferred languages are:<br></br><br></br> 
        </p>

        <ul>
          <li>👉 Python</li>
          <li>👉 Java</li>
          <li>👉 JavaScript</li>
          <li>👉 C</li>
        </ul>
        <br></br>

        <p>   
          I mostly work on front-end applications with React and Python.<br></br>
          I have experience working with abstract data structures in C and C++.<br></br>
          Currently, I am learning Object Oriented Programming with Java.
          <br></br><br></br>Take a look at my resume <Link href="/files/Julkar_Reedoy_resume.pdf" target="_blank">📄</Link>
        </p>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <Nav name="Home"/>
      <div className="wrap">
        <main className="main">
          <Header/>
          <Intro/>
        </main>
      </div>
    </div>
  );
}
