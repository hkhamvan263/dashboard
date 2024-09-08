'use client'
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AppBar, Button, Container, Toolbar, Typography, Box, Grid, IconButton, Menu, MenuItem } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { Person } from "@mui/icons-material";
import { useState } from "react";

export default function Home() {

    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
      setAnchorEl(null);
    }

    return (

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

        <Box sx={{my: 6, textAlign: 'center'}}>
        <Typography variant="h4" gutterBottom>
        Resources
        </Typography>
        <Container>
        <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
        <Box
            sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 200,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '3px 8px 10px rgba(0, 0, 0, 0.15)',
                }
            }}>
            <Typography variant="h6" gutterBottom>
            Summarize Notes
            </Typography>
            <Typography>
            {' '}
            Create and share as many summarized notes as you need! 
            </Typography>
            <Button href="/resources/notes" variant="contained" sx={{mt: 3, width:'100%', mx:'auto'}}>
                Create Notes
            </Button>
            </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box
            sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 200,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                }
            }}>
            <Typography variant="h6" gutterBottom>
            Generate Flashcards
            </Typography>
            <Typography>
            {' '}
            Generate flashcards with our advanced AI model!
            </Typography>
            <Button href="/resources/flashcard" variant="contained" sx={{mt: 3, width:'100%', mx:'auto'}}>
                Generate Flashcards
            </Button>
            </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        <Box
            sx={{
                p: 3,
                border: '1px solid',
                borderColor: '#4615b2',
                borderRadius: 2,
                boxShadow: 1,
                height: 200,
                transition: 'transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out',
                '&:hover': {
                transform: 'translateY(-5px)',
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                }
            }}>
            <Typography variant="h6" gutterBottom>
            StuHub AI
            </Typography>
            <Typography>
            {' '}
            Chat with our advanced AI model if you get stuck.
            </Typography>
            <Button href="/resources/chatbot" variant="contained" sx={{mt: 3, width:'100%', mx:'auto'}}>
                StuHub AI
            </Button>
            </Box>
        </Grid>
        <Grid item xs={12} md={4}>
        </Grid>
        </Grid>
        </Container>
        </Box>
    </Container>

    )
}