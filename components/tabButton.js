import { Button } from '@mui/material'
import NextLink from 'next/link'

const TabButton = ({ text, icon, href, newWindow }) => {
    const aStyling = { textDecoration: 'none', color: 'inherit' }

    return (
        <NextLink href={href} passHref>
            <a target={newWindow ? "_blank" : ""} style={aStyling}>
                <Button
                    variant="text"
                    color="inherit"
                    startIcon={icon}
                    style={{ justifyContent: "flex-start" }}
                >
                    {text}
                </Button>
            </a>
        </NextLink>
    )
}

export default TabButton