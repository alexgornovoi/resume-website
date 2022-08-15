import ProjectLayout from "../../components/projectLayout";

const desc = {
    stack: "Next.js, MUI",
    desc: "My second project which was built using Next.js and Material UI. This was a much more ambitious project where I had to get creative with the layout and design and how I approached making the website easily customizable. My goal with this website was to have a place for my resume that I could easily customize in the future.",
    images: ["/images/projects/resume-website/light-mode.jpeg", "/images/projects/resume-website/dark-mode.jpeg"]
}

export default function ResumeWebsite() {
    return (
        <ProjectLayout
            name="Resume Website"
            href="alexgornovoi.com"
            src="https://github.com/alexgornovoi/resume-website"
            desc={desc}
        />
    )
}