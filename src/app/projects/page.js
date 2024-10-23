import React from 'react';
import Link from 'next/link';
import "@/app/globals.css";



function Header(){
    return(
      <div className="header">
        <h1>Projects</h1>
      </div>
    )
}


function Text(){
    const link = "https://github.com/gunmack";
    return(
      <div className="text">
        <div>
          <p>
            While I work on this page,<br></br> 
            feel free to take a look at<br/> 
            👉 <Link href={link} className='link' target='_blank'>my GitHub</Link>
          </p>
          <br/><br/>  <br/><br/>  
  

        </div>
      </div>
    )
}

export default function Projects(){
    return(
        <div>
          <Header/>
          <Text/>
        </div>
    )
} 