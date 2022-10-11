import { Stack, Divider, Typography, Box, Grow } from "@mui/material";
import Head from "next/head";

const experience = [
  {
    name: "Information Technology Assistant and Desktop Support",
    company: "Stockbridge School of Agriculture at UMass Amherst",
    location: "Amherst, MA",
    period: "July 2022 - Present",
    desc: [
      "Provisioned new laptops for department’s staff and students",
      "Used scripted solution to configure VPN and all necessary applications",
      "Provided Desktop support to staff and students using GoToAssist"
    ]
  }
]

const relevantCourseWork = [
  "Problem Solving with Computers",
  "Programming with Data Structures",
  "C Programming Language",
  "Programming Methodology",
  "Multivariable Calculus"
]

const skills = [
  { type: "Programming Languages", skill: ["Java", "C", "Javascript", "Python"] },
  { type: "Frameworks/Libraries", skill: ["React.js", "Next.js", "Material-UI", "Selenium"] },
  { type: "Methodologies", skill: ["Data Structures", "Algorithms", "Object Oriented Programming (OOP)"]},
  { type: "Tools", skill: ["GitHub", "Node.js"] },
  { type: "IDE’s", skill: ["Visual Studio Code", "Vim", "jGrasp", "Eclipse"] },
  { type: "Operating Systems", skill: ["Microsoft Windows", "Linux", "macOS"] },
  { type: "General", skill: ["Google Workspace", "Microsoft 365"] },
  { type: "IT", skill: ["GoToAssist", "Imaging", "Troubleshooting"] },
]

const listArray = (arr) => arr.map((item) => {
  return (
    <li key={item}>{item}</li>
  )
})

const experienceList = experience.map((job) => {
  return (
    <Box key={job.name}>
      <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
        {job.name}
      </Typography>
      <Box>
        {job.company}
        <ul>
          <li>{job.location}</li>
          <li>{job.period}</li>
          <li>
            Responsibilities:
            <ul>{listArray(job.desc)}</ul>
          </li>
        </ul>
      </Box>
    </Box>
  )
})

const skillList = skills.map((skill) => {
  return (
    <Box key={skill.type} sx={{ mt: "10px" }}>
      <li>
        {skill.type}
        <ul>
          {listArray(skill.skill)}
        </ul>
      </li>
    </Box>
  )
})


export default function Resume() {
  return (
    <Grow appear in timeout={1500} >
      <Box>
        <Head key="Resume">
          <title>Resume</title>
        </Head>
        <Typography variant="h3">Resume</Typography>
        <Stack spacing={2} sx={{ mt: "30px", mb: "50px" }} divider={<Divider />}>
          {/*Education */}
          <Box>
            <Typography variant="h5" sx={{ textDecorationLine: 'underline', fontWeight: 'bold', mb: '10px' }}>
              Education
            </Typography>
            <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
              University of Massachusetts Amherst
            </Typography>
            <Box>
              Computer Science and Computational Mathematics
              <ul>
                <li>Expected Graduation: May, 2024</li>
                <li>GPA: 3.64</li>
                <li>
                  Relevant Coursework:
                  <ul>{listArray(relevantCourseWork)}</ul>
                </li>
              </ul>
            </Box>
          </Box>
          {/*Experience */}
          <Box>
            <Typography variant="h5" sx={{ textDecorationLine: 'underline', fontWeight: 'bold', mb: '10px' }}>
              Experience
            </Typography>
            {experienceList}
          </Box>
          {/*Skills */}
          <Box>
            <Typography variant="h5" sx={{ textDecorationLine: 'underline', fontWeight: 'bold', mb: '10px' }}>
              Skills
            </Typography>
            <ul>{skillList}</ul>
          </Box>
        </Stack>
      </Box>
    </Grow>
  )
}
