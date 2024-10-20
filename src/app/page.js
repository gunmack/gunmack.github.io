function Nav({name}){
    return(
      <div>
        <button className="button">
          <a href="/about">{name}</a>
        </button>
      </div>
    )
  }
  


export default function Landing(){
    return(
        <div>
            <Nav name="About"/>
            <div className="wrap">
                <main className="main">
                    Hello World!
                </main>
            </div>
        </div>
    ) 
}