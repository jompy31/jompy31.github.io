import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
// import FastfoodIcon from '@material-ui/icons/Fastfood';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
// import HotelIcon from '@material-ui/icons/Hotel';
import RepeatIcon from '@material-ui/icons/Repeat';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px',
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
}));

export default function CustomizedTimeline() {
  const classes = useStyles();

  return (
    <Timeline align="alternate" style={{ backgroundColor: "white" }}>
           <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            January 2022 - Present
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Web Developer Freelancer
            </Typography>
            <Typography>
              Developing web applications using Python, Django, and React.js. Designing interactive yield dashboards using SQL and MongoDB databases. Performing data analysis using Python for data analysis, Power BI, and SharePoint. Managing tasks and projects using SCRUM methodology. Software is developed to optimize tasks with python programs with artificial intelligence and computer vision. Create web and mobile applications for clients according to need.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            January 2022 - January 2023
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Electronics Yield Engineer at Intel Corporation
            </Typography>
            <Typography>
              Analyzed the percentage of factory losses and conducted investigations to discover the causes of failures. Led a team of 62 people, including 52 operations engineers and operators. Developed machine learning algorithms for alarm analysis and image analysis using Python, Keras, TensorFlow, and scikit-learn. Created a dashboard with Power BI for data visualization and utilized SQL for data extraction. Automated human operations using Python, Selenium, and Kubernetes. Conducted hardware and software testing, including the creation of test cases and test plans.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            August 2020 - December 2021
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Electronics Technician at UST Global (Intel)
            </Typography>
            <Typography>
              Migrated 400+ test cases to HSD-ES, improving testing efficiency. Collaborated with teams to triage and root cause issues and bugs. Prepared systems by assembling hardware, flashing firmware, installing OS, and connecting debuggers. Worked closely with customers to achieve deliverables. Published daily and weekly status reports. Wrote defect reports for detected issues. Utilized debug tools like WinDbg for troubleshooting.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            August 2019 - August 2020
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Electronics Technician at Infotree Global (Intel)
            </Typography>
            <Typography>
              In this role, I utilized my experience in electronics and technology to perform tasks related to electronics and maintenance. I collaborated on projects involving testing microprocessors and electronic boards, and I was involved in BIOS and firmware development. I also worked on the repair of heat press equipment and managed network connections. My responsibilities included troubleshooting Windows and Linux operating systems, as well as various types of printers, single-phase, and three-phase motors, all within a process risk management framework. I had extensive knowledge of preventive and corrective maintenance of different equipment.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>

      <TimelineItem>
        <TimelineOppositeContent>
          <Typography variant="body2" color="textSecondary">
            2010 - January 2019
          </Typography>
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color="primary" variant="outlined" >
            <LaptopMacIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Paper elevation={3} className={classes.paper}>
            <Typography variant="h6" component="h1">
              Manager at Printec
            </Typography>
            <Typography>
              During my tenure as General Manager at Printec, I led and supervised all operations of the company, which specializes in the manufacturing of Hydraulic Heat Press Machines for the sublimation process. I was responsible for overall company management, including strategic decision-making, project oversight, human resource management, and financial administration. My background in technology and management allowed me to enhance the operational efficiency of the company and successfully execute various projects.
            </Typography>
          </Paper>
        </TimelineContent>
      </TimelineItem>


    </Timeline>
  );
}
