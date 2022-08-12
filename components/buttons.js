import TabButton from "./tabButton"
import { React, useState } from "react"
import { Menu as MenuIcon } from "@mui/icons-material"
import { ButtonGroup, IconButton, Menu, MenuItem } from "@mui/material"

const values = [
    { text: "About", href: "/", newWindow: false },
    { text: "Resume", href: "/resume", newWindow: false },
    { text: "Project", href: "/projects", newWindow: false },
    { text: "Source", href: "https://github.com/alexgornovoi/resume-website", newWindow: true }
]

const buttonList = values.map(
    (value) => {
        return (
            <TabButton
                key={value.text}
                text={value.text}
                href={value.href}
                newWindow={value.newWindow}
            />
        )
    }
)

const InlineButtons = () => {
    return (
        <ButtonGroup orientation="horizontal">
            {buttonList}
        </ButtonGroup>
    )
}

const DropDownButtons = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuButtons = buttonList.map((button) => {
        return (
            <MenuItem key={button.key} onClick={handleClose}>
                {button}
            </MenuItem>
        )
    })

    return (
        <div>
            <IconButton
                onClick={handleClick}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                {menuButtons}
            </Menu>
        </div>
    );
}


const ButtonTypes = {
    InlineButtons,
    DropDownButtons
}

export default ButtonTypes