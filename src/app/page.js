export default function Landing(){
    const wrap = "grid grid-rows items-center justify-items-center gap-16 min-h-screen";
    const body = "flex flex-col gap-8 row-start-1 items-center"
    return(
        <div className={wrap}>
            <main className={body}>
                Hello World!
            </main>
        </div>
    ) 
}