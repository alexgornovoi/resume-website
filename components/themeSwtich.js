import { IconButton } from "@mui/material";
import { DarkMode, LightMode } from "@mui/icons-material";

const LightSwitch = ({ mode, func }) => {
    return (
        <IconButton
            onClick={func}
            sx={{ height: 45, width: 45 }}
        >
            {mode ? <LightMode /> : <DarkMode fontSize="inherit" />}
        </IconButton>
    )
}

export default LightSwitch