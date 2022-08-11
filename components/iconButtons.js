import { Box, IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";


const SocialButton = () => {
    return(
        <Box sx={{m:0.5}}>
            <IconButton 
                onClick={(e) => { e.preventDefault(); window.open("https://www.linkedin.com/in/alexeygornovoi/", '_blank'); }}
            >
                <LinkedIn />
            </IconButton>
            <IconButton 
                onClick={(e) => { e.preventDefault(); window.open("https://github.com/alexgornovoi", '_blank'); }}
            >
                <GitHub />
            </IconButton>
        </Box>
    )
}

export default SocialButton