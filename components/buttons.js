import TabButton from "./tabButton"
import { Code, Info, Javascript, Article } from "@mui/icons-material"
import { ButtonGroup } from "@mui/material"
import NextLink from "next/link"

const Buttons = () => {
    const aStyling = { textDecoration: 'none', color: 'inherit' }

    return (
        <ButtonGroup orientation="horizontal" sx={{ ml: 20 }}>
            <TabButton text="About" icon={<Info />} href="/" />
            <TabButton text="Resume" icon={<Article />} href="/resume" />
            <TabButton text="Projects" icon={<Code />} href="/projects" />
            <TabButton text="Source" icon={<Javascript />} href="https://github.com/alexgornovoi/resume-website" newWindow />
        </ButtonGroup>
    )
}

export default Buttons