import Image from "next/image";

export default function Footer(){
    const footer = "row-start-3 flex pb-6 gap-6 flex-wrap items-center justify-center"
    const element = "flex items-center gap-2 hover:underline hover:underline-offset-4"
    return(
        <div className={footer}>
            <a className={element} href="https://www.linkedin.com/in/jreedoy/" target="_blank">
            <Image
                src="/images/LinkedIn.png"
                alt="LinkedIn logo"
                width={16}
                height={16}
            />
            LinkedIn
            </a>
            <a
            className={element}
            href="https://github.com/gunmack" target="_blank">
            <Image
                className="bg-white rounded-lg"
                src="/images/gitHub.png"
                alt="GitHub"
                width={16}
                height={16}
            />
            GitHub
            </a>
            <a
            className={element}
            href="mailto:julkar-reedoy@sfu.ca?subject=Feedback on your GitHub page" target="_blank">
            <Image
                aria-hidden
                src="/images/mail.png"
                alt="Mail icon"
                width={20}
                height={20}
            />
            Give Feedback
            </a>
        </div>
    )
}