import TabButton from "./tabButton"
import { Code, Info, Javascript, Article } from "@mui/icons-material"
import { ButtonGroup } from "@mui/material"

const Buttons = () => {
    return (
        <ButtonGroup orientation="horizontal" sx={{ml: 20}}>
            <TabButton text="About" icon={<Info />} url="https://www.linkedin.com/in/alexeygornovoi/" />
            <TabButton text="Resume" icon={<Article />} url="https://leetcode.com/alexgornovoi/" />
            <TabButton text="Projects" icon={<Code />} url="https://github.com/alexgornovoi" />
            <TabButton text="Source" icon={<Javascript />} url="https://github.com/alexgornovoi/link-website" />
        </ButtonGroup>
    )
}

export default Buttons