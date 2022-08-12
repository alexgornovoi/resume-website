import { Box, Container, Typography } from "@mui/material";
import LightSwitch from "./themeSwtich";
import SocialButton from "./iconButtons";
import ButtonTypes from "./buttons";


const MenuBar = ({mode, func, width}) => {
    function getButtonType(width){
        if(width > 600){ return <ButtonTypes.InlineButtons />}
        else{return <ButtonTypes.DropDownButtons />}
    }
    
    return(
        <Container alignContent={"center"}>
            <Box 
                alignContent="center"
                justifyContent="center"
            >
                <Typography variant="h4" sx={{pl:1.5}}>Alex Gornovoi</Typography>
                <SocialButton />
                <LightSwitch mode={mode} func={func}/>
                {getButtonType(width)}
            </Box>
        </Container>
    )
}

export default MenuBar