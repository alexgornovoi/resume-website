import ProjectLayout from "../../components/projectLayout";

const desc = {
    stack: "React.js, MUI",
    desc: "First project built using React.js and Material UI. This project was primarily a learning phase where I became accustomed to both React.js and Material UI. The purpose of this website is to provide a page housing all of the links to profiles I have (LinkedIn, GitHub, Etc…)",
    images: ["/images/projects/link-website/light-mode.jpeg", "/images/projects/link-website/dark-mode.jpeg"]
}


export default function LinkWebsite() {
    return (
        <ProjectLayout
            name="Link Website"
            href="https://alexgornovoi.github.io/link-website/"
            src="https://github.com/alexgornovoi/link-website"
            desc={desc}
        />
    )
}