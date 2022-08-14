import { Box, Typography, Grid, AppBar, Container } from "@mui/material";
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
                    alignItems="center"
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
                    alignItems="center"
                >
                    <LightSwitch mode={mode} func={func} />
                    <ButtonTypes.DropDownButtons />
                </Box>
            )
        }
    }

    return (
        <AppBar
            sx={{ 
                mb: 5, 
                background: 'transparent', 
                boxShadow: 'none', 
                backdropFilter: "blur(10px)",
            }}
        >
            <Box sx={{height: "64px"}} alignItems="center" display="flex">
            <Container maxWidth="md">
                <Grid container spacing={1}>
                    <Grid item xs display="flex" alignItems="center">
                        <Typography variant="body" sx={{ ml: 1.5 }}>Alex Gornovoi</Typography>
                        <SocialButton />
                    </Grid>
                    <Grid item xs>
                        {getButtonType(width)}
                    </Grid>
                </Grid>
            </Container>
            </Box>
        </AppBar>
    )
}

export default MenuBar