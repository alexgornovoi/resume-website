import { Box, ButtonBase, Typography, Stack } from "@mui/material"
import NextLink from "next/link"

const Project = ({ desc, image, href, name }) => {
    const aStyling = { textDecoration: 'none', color: 'inherit' }

    return (
        <NextLink href={href} passHref>
            <a style={aStyling}>
                <ButtonBase>
                    <Stack alignItems="center" display="flex">
                        <Box component="img" src={image} sx={{ width: 200, height: 200, border: 1, borderRadius: '16px' }} />
                        <Typography variant="h6" sx={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>{name}</Typography>
                        <Typography>{desc}</Typography>
                    </Stack>
                </ButtonBase>
            </a>
        </NextLink>
    )
}

export default Project