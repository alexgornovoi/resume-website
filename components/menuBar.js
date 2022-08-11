import { Box, Container, Typography } from "@mui/material";
import Buttons from "./buttons";
import LightSwitch from "./themeSwtich";
import SocialButton from "./iconButtons";

const MenuBar = ({mode, func}) => {

    return(
        <Container alignContent={"center"} >
            <Box 
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Typography variant="h5">Alex Gornovoi</Typography>
                <SocialButton />
                <Buttons />
                <LightSwitch mode={mode} func={func}/>
            </Box>
        </Container>
    )
}

export default MenuBar