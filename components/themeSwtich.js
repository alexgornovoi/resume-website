import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const LightSwitch = ({ mode, func }) => {
    return (
        <IconButton
            onClick={func}
        >
            {mode ? <LightMode /> : <DarkMode fontSize="inherit" />}
        </IconButton>
    )
}

export default LightSwitch