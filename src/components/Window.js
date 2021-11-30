import React, { useEffect, useState } from 'react'
import {
  Typography, Button, Paper, AppBar, Toolbar, IconButton, Menu, MenuItem, Container, Tooltip
} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import DescriptionIcon from '@material-ui/icons/Description'
import GitHubIcon from '@material-ui/icons/GitHub'
import MusicNoteIcon from '@material-ui/icons/MusicNote'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import EmailIcon from '@material-ui/icons/Email'
import { makeStyles } from '@material-ui/core/styles'
import Home from './pages/HomePage'
import Sampler from './pages/SamplerPage'
import Nugs from './pages/NugsPage'
import Motor from './pages/MotorPage'
import Music from './pages/MusicPage'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  title: {
    flexGrow: 1
  },
  container: {
    padding: 40,
    backgroundColor: '#FFFFFF',//'#8AC6D0',
    height: '100%',
    flexGrow: 1
  }
}));

export default function WindowFrame() {
    const styles = useStyles()

    const [menuOpen, setMenuOpen] = useState(false)
    const [menuAnchor, setMenuAnchor] = useState(null)
    const [currPage, setCurrPage] = useState(0)

    const handlePageChange = (event) => {
      setCurrPage(event.target.value)
      setMenuOpen(false)
    }

    const handleMenuClick = (event) => {
      setMenuOpen(true)
      setMenuAnchor(event.currentTarget)
    }

    const openLinkedIn = (event) => {
      window.open("https://www.linkedin.com/in/grady-thomas-7530a71a2", "_blank")
    }

    const openGitHub = (event) => {
      window.open("https://github.com/gradythomas", "_blank") // change this to MIT github?
    }

    const openResume = (event) => {
      window.open("/projects/ResumePDF.pdf", "_blank")
    }

    const openSpotify = (event) => {
      window.open("https://open.spotify.com/artist/6TkfOksTZM6tfOU8knP0gd?si=caVUG_9wR0utpYd2MEan6A", "_blank")
    }

    const openMail = (event) => {
        window.open("mailto:gradyt@mit.edu")
    }

    const pages = {
      0: 'Home',
      1: '6.08 Sampler Project',
      2: 'nugs.net Exploit',
      4: 'Recorded Music'
    }

    return (
      <div className={styles.root}>
        <AppBar position="sticky">
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={styles.title}>
              {pages[currPage]}
            </Typography>
            <Menu anchorEl={menuAnchor} open={menuOpen} onClose={() => setMenuOpen(false)}>
              {Object.keys(pages).map(page => (
                <MenuItem value={page} onClick={handlePageChange}>{pages[page]}</MenuItem>
              ))}
            </Menu>
            {/*LinkedIn Button, directs to my LinkedIn profile*/}
            <Tooltip title={'LinkedIn'} color="inherit">
              <IconButton onClick={openLinkedIn}>
                <LinkedInIcon />
              </IconButton>
            </Tooltip>
            {/*GitHub Button, directs to my GitHub Repos*/}
            <Tooltip title={'GitHub'} color="inherit">
              <IconButton onClick={openGitHub}>
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            {/*Resume Button, downloads my resume*/}
            <Tooltip title={'Resume'} color="inherit">
              <IconButton onClick={openResume}>
                <DescriptionIcon />
              </IconButton>
            </Tooltip>
            {/*Spotify Button, directs to my Spotify artist page*/}
            <Tooltip title={'Spotify'} color="inherit">
              <IconButton onClick={openSpotify}>
                <MusicNoteIcon />
              </IconButton>
            </Tooltip>
            {/*Mail Button, opens up a new email draft to me*/}
            <Tooltip title={'Email'} color="inherit">
                <IconButton onClick={openMail}>
                    <EmailIcon />
                </IconButton>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Container className={styles.container} maxWidth='md'>
          {currPage == 0 && <Home /> }
          {currPage == 1 && <Sampler /> }
          {currPage == 2 && <Nugs /> }
          {currPage == 3 && <Motor />}
          {currPage == 4 && <Music />}
        </Container>
      </div>
    )
}