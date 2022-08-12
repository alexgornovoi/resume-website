import { Box, Typography, Grid } from "@mui/material";
import LightSwitch from "./themeSwtich";
import SocialButton from "./iconButtons";
import ButtonTypes from "./buttons";


const MenuBar = ({ mode, func, width }) => {
    function getButtonType(width) {
        if (width > 740) {
            return (
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    <ButtonTypes.InlineButtons />
                    <LightSwitch mode={mode} func={func} />
                </Box>
            )
        } else {
            return (
                <Box
                    display="flex"
                    justifyContent="flex-end"
                >
                    <LightSwitch mode={mode} func={func} />
                    <ButtonTypes.DropDownButtons />
                </Box>
            )
        }
    }

    return (
        <Box
            display="flex"
        >
            <Grid container spacing={2}>
                <Grid item xs>
                    <Typography variant="h6">Alex Gornovoi</Typography>
                    <SocialButton />
                </Grid>
                <Grid item xs>
                    {getButtonType(width)}
                </Grid>
            </Grid>
        </Box>
    )
}

export default MenuBar