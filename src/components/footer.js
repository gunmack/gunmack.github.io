import Image from "next/image";
import "@/app/globals.css";

export default function Footer(){
    return(
        <div className="footer">
            <a className="f_items" href="https://www.linkedin.com/in/jreedoy/" target="_blank">
            <Image
                src="/images/LinkedIn.png"
                alt="LinkedIn logo"
                width={16}
                height={16}
            />
            LinkedIn
            </a>
            <a
            className="f_items"
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
            className="f_items"
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