import { Box, IconButton } from "@mui/material";
import { LinkedIn, GitHub } from "@mui/icons-material";



const SocialButton = () => {
    return(
        <Box  display="inline-flex">
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