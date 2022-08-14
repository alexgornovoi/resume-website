/* eslint-disable react/no-unescaped-entities */
import { Box, Typography, Avatar, Grid, Stack, Divider, Button } from "@mui/material"
import { LinkedIn, Mail } from "@mui/icons-material"
import TabButton from "../components/tabButton"


const bioInfo = [
  { year: '2002', desc: ' Born in Massachusetts, United States' },
  { year: '2020', desc: ' Started attending the University of Massachusetts Amherst' },
  { year: '2022', desc: ' Working as information technology assistant and studying at the University of Massachusetts Amherst' }
]

const Bio = bioInfo.map((info) => {
  return (
    <Box key={info.year} display="flex">
      <Typography sx={{ fontWeight: '600', mr: '10px' }}>{info.year}</Typography>
      <Typography>{info.desc}</Typography>
    </Box>
  )
})

export default function About() {
  return (
    <Box>
      <Grid container alignItems="center" display="flex">
        <Grid item xs={8}>
          <Typography variant="h3">Alex Gornovoi</Typography>
        </Grid>
        <Grid item xs={4} justifyContent="flex-end" display="flex">
          <Avatar src="/images/alex.jpeg" sx={{ width: 80, height: 80, border: "solid", borderWidth: "3px" }} />
        </Grid>
      </Grid>
      <Stack spacing={2} sx={{ mt: "50px" }} divider={<Divider />}>
        <Typography variant="body1" align="justify" display="inline">
          Hello, I am a Computer Science and Computational Mathematics student at
          the University of Massachusetts Amherst. I'm passionate about coding and technology,
          I spend a lot of my free time working on personal projects and learning to code.
          I'm always looking for new opportunites to learn and grow.
        </Typography>
        <Box>
          <Typography sx={{ textDecorationLine: 'underline', fontWeight: 'bold', mb: '6px' }}>
            Bio
          </Typography>
          <Box>{Bio}</Box>
        </Box>
        <Box>
          <Typography sx={{ textDecorationLine: 'underline', fontWeight: 'bold', mb: '6px' }}>
            Interests
          </Typography>
          <Typography>Coding, Artificial Intelligence, Reading, Art, Traveling, Boba, Cats</Typography>
        </Box>
        <Box>
          <Typography sx={{ textDecorationLine: 'underline', fontWeight: 'bold', mb: '6px' }}>
            Connect
          </Typography>
          <Box display="flex" flexDirection="column">
            <TabButton href='https://www.linkedin.com/in/alexeygornovoi/' icon={<LinkedIn />} text="Connect with me on LinkedIn" newWindow/>
            <TabButton href='mailto:alex.gornovoi@gmail.com' icon={<Mail />} text="Send me an email" />
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}
