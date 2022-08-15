import { Box, Typography, Grid } from "@mui/material"
import Project from "../components/project"

const projectList = [
  {
    href: "/projectsinfo/resume-website",
    image: "/images/projects/resume-website.jpeg",
    desc: "Second website made using Next.js and MUI",
    name: "Resume Website"
  },
  {
    href: "/projectsinfo/link-website",
    image: "/images/projects/link-website.jpeg",
    desc: "First website made using React.js and MUI",
    name: "Link Website"
  },
]

const projectGrid = projectList.map((project) => {
  return (
    <Grid item xs={6} key={project.name}>
      <Project image={project.image} name={project.name} desc={project.desc} href={project.href} />
    </Grid>
  )
})


export default function Projects() {
  return (
    <Box>
      <Typography variant="h3" sx={{ mb: 5 }}>Projects</Typography>
      <Grid container spacing={2}>
        {projectGrid}
      </Grid>
    </Box>
  )
}