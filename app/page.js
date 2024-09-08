'use client'
import Image from "next/image";
import { SignIn } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { Person } from "@mui/icons-material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useState } from "react";

export default function Home() {
  const [anchorEl, setAnchorEl] = useState(null);
  
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleMenuClose = () => {
    setAnchorEl(null);
  }

  return(
    <Container maxWidth='100vw' disableGutters>
      <Head>
        <title>StuHub</title>
        <meta name = "description" content="Create flashcards from your text" />
      </Head>

      <AppBar position="static">
        <Toolbar sx={{backgroundColor: '#AAFF84',height: 80}}>
          <Box sx={{flexGrow: 1}}>
          <Button color="inherit" href="/">
          <Typography color='black'variant="h6" textTransform="none" href="page.js" style={{flexGrow: 1}} sx={{ml: 2}}>
            StuHub
          </Typography>
          </Button>
          </Box>

          <SignedOut>
            <Box sx={{mx: 2}}>
            <Button color = "inherit"  href="/chat"> 
              {' '}
              <Typography color="black">Chat</Typography>
            </Button>
            <Button color="inherit" href="/resources"> 
              {' '}
              <Typography color="black">Resources</Typography>
            </Button>
            <Button color="inherit" href="/saved"> 
              {' '}
              <Typography color="black">Saved</Typography>
            </Button>
            <Button color="inherit" href="/discover"> 
              {' '}
              <Typography color="black">Discover</Typography>
            </Button>
            </Box>
            <IconButton color="black" onClick={handleMenuOpen} sx={{mr: 2}}>
              <Person/>
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleMenuClose}>
                <MenuItem onClick={handleMenuClose} component="a" href="/sign-in">
                Sign In
                </MenuItem>
                <MenuItem onClick={handleMenuClose} component="a" href="/sign-up">
                Sign Up
                </MenuItem>
            </Menu>  
          </SignedOut>
          
          
          <SignedIn>
            <Box sx={{mx: 2}}>
            <Button color = "inherit"  href="/chat"> 
              {' '}
              <Typography color="black">Chat</Typography>
            </Button>
            <Button color="inherit" href="/resources"> 
              {' '}
              <Typography color="black">Resources</Typography>
            </Button>
            <Button color="inherit" href="/saved"> 
              {' '}
              <Typography color="black">Saved</Typography>
            </Button>
            <Button color="inherit" href="/discover"> 
              {' '}
              <Typography color="black">Discover</Typography>
            </Button>
            </Box>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      {/**Start with the page layout first */}
  
  



      <Box sx={{backgroundColor: 'white', minHeight: '100vh', overflowX: 'hidden'}}>
        <Container maxWidth="100vw" disableGutters>
          <Box
            width ="100vw"
            sx={{
              textAlign: 'center',
            }}
          >
            <Typography variant="h2" sx={{mt: 4}}>
              Hello and Welcome to StuHub</Typography>
            <Typography variant="h6">
              {' '}
              A collaborative study platform with AI notes summary, flashcard creation, and more
            </Typography>
            <Container sx={{marginTop: 5}}>
            <Grid container spacing={1} justifyContent={'center'}>
              <Grid xs={6} md={4}>
                <Box
                  width="60%"
                  sx={{
                    display: 'flex',
                    p: 3,
                    border: '1px solid',
                    borderColor: 'primary.main',
                    display: 'flex',
                    borderRadius: 2,
                    boxShadow: 1,
                    justifyContent: 'left',
                    flexDirection: 'column',
                    height: 230,
                    width: 300,
                  }}
                >
                  <Typography variant="h6" gutterBottom>Making a Group Chat</Typography>
                  <Typography>
                    {' '}
                    Start a group chat with your classmates to discuss the notes and share ideas.
                  </Typography>
                  <Button variant="contained" sx={{mt: 3, width:'100%', mx:'auto'}}>
                    Create GroupChat
                  </Button>
                </Box>
              </Grid>
              <Grid xs={6} md={4}>
                <Box
                  width="60%"
                  sx={{
                    display: 'flex',
                    p: 3,
                    border: '1px solid',
                    borderColor: 'primary.main',
                    display: 'flex',
                    borderRadius: 2,
                    boxShadow: 1,
                    justifyContent: 'left',
                    flexDirection: 'column',
                    height: 230,
                    width: 300,
                  }}
                >
                  <Typography variant="h6" gutterBottom>Summarizing Notes</Typography>
                  <Typography>
                    {' '}
                    Our AI can summarize your notes for you, so you can focus on understanding the material.
                  </Typography>
                  <Button 
                    variant="contained" 
                    sx={{
                      mt: 3, 
                      width:'100%', 
                      mx:'auto'
                    }}
                  >
                    Summarize Notes
                  </Button>
                </Box>
              </Grid>
            </Grid>
            <Grid container>
            <Grid container spacing={1} sx={{mt:5}} justifyContent={'center'}>
              <Grid xs={6} md={4}>
                <Box
                  width="60%"
                  sx={{
                    display: 'flex',
                    p: 3,
                    border: '1px solid',
                    borderColor: 'primary.main',
                    display: 'flex',
                    borderRadius: 2,
                    boxShadow: 1,
                    justifyContent: 'left',
                    flexDirection: 'column',
                    height: 230,
                    width: 300,
                  }}
                >
                  <Typography variant="h6" gutterBottom>AI Powered</Typography>
                  <Typography>
                    {' '}
                    Using our advanced AI you can communicate via chat or ask it to generate flashcards for you.
                  </Typography>
                  <Button variant="contained" sx={{mt: 3, width:'100%', mx:'auto'}}>
                    View StuHub AI
                  </Button>
                </Box>
              </Grid>
              <Grid xs={6} md={4}>
                <Box
                  width="60%"
                  sx={{
                    display: 'flex',
                    p: 3,
                    border: '1px solid',
                    borderColor: 'primary.main',
                    display: 'flex',
                    borderRadius: 2,
                    boxShadow: 1,
                    justifyContent: 'left',
                    flexDirection: 'column',
                    height: 230,
                    width: 300,
                  }}
                >
                  <Typography variant="h6" gutterBottom>Discover Classmates</Typography>
                  <Typography>
                    {' '}
                    Discover People who are in the same courses as you, either from the same institution or different. 
                  </Typography>
                  <Button variant="contained" sx={{mt: 3, width:'100%', mx:'auto'}}>
                    Discover
                  </Button>
                </Box>
              </Grid>
            </Grid>
            </Grid>
            </Container>
          </Box>
        </Container>
        </Box>

    </Container>
  )
}
