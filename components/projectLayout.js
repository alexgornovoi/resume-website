import { Breadcrumbs, Box, Typography, Stack, Divider, ImageList, ImageListItem, Grow } from "@mui/material"
import { NavigateNextSharp, GitHub, Web } from "@mui/icons-material"
import TabButton from "./tabButton"
import Link from "next/link"
import Image from "next/image"
import Head from "next/head"




const ProjectLayout = ({ name, desc, src, href }) => {
    const images = desc.images
    return (
        <Grow appear in timeout={1500} >
            <Box sx={{ mb: 5 }}>
                <Head key="Project">
                    <title>{name}</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
                <Breadcrumbs separator={<NavigateNextSharp fontSize="small" />} sx={{ mb: 8 }}>
                    <Link href="/projects" passHref>
                        <a style={{ color: "#9D3B83" }}>
                            Projects
                        </a>
                    </Link>
                    <Typography>{name}</Typography>
                </Breadcrumbs>
                <Typography variant="h3" sx={{ mb: 5 }}>{name}</Typography>
                <Box justifyContent="center" display="flex" alignContent="center">
                    <Stack direction="row" divider={<Divider orientation="vertical" flexItem />} spacing={2}>
                        <TabButton text="Website" icon={<Web />} href={href} newWindow />
                        <TabButton text="Source" icon={<GitHub />} href={src} newWindow />
                    </Stack>
                </Box>
                <Typography sx={{ mt: 2 }} align="justify">{desc.desc}</Typography>
                <Stack justifyContent="center" alignItems="center" display="flex" sx={{ mt: 2 }}>
                    <Typography variant="h5" sx={{ textDecorationLine: 'underline', fontWeight: 'bold', mb: '10px' }}>
                        Stack
                    </Typography>
                    {desc.stack}
                </Stack>
                <ImageList
                    cols={1}
                >
                    {
                        images.map((image) => (
                            <Box sx={{ border: 1, borderRadius: "16px" }} key="image">
                                <ImageListItem>
                                    <Image
                                        src={image}
                                        loading="lazy"
                                        alt=""
                                        height="1873"
                                        width="3360"
                                        style={{ borderRadius: "16px" }}
                                        unoptimized={true}
                                    />
                                </ImageListItem>
                            </Box>
                        ))
                    }
                </ImageList>
            </Box>
        </Grow>
    )
}

export default ProjectLayout