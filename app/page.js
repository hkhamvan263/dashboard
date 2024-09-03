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
        <Toolbar sx={{backgroundColor: 'primary',height: 80}}>
          <Box sx={{flexGrow: 1}}>
          <Button color="inherit" href="/">
          <Typography color='inherit'variant="h6" textTransform="none" href="page.js" style={{flexGrow: 1}} sx={{ml: 2}}>
            StuHub
          </Typography>
          </Button>
          </Box>

          <SignedOut>
            <Box sx={{mx: 2}}>
            <Button color = "inherit"  href="/chat"> 
              {' '}
              <Typography color="inherit">Chat</Typography>
            </Button>
            <Button color="inherit" href="/resources"> 
              {' '}
              <Typography color="inherit">Resources</Typography>
            </Button>
            <Button color="inherit" href="/notifications"> 
              {' '}
              <Typography color="inherit">Notifications</Typography>
            </Button>
            <Button color="inherit" href="/discover"> 
              {' '}
              <Typography color="inherit">Discover</Typography>
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
            <Button color = "inherit" href="/generate"> 
              {' '}
              Generate </Button>
            <Button color="inherit" href="/flashcards"> 
              {' '}
              Saved </Button>
            </Box>
            <UserButton />
          </SignedIn>
        </Toolbar>
      </AppBar>

      {/**Start with the page layout first */}

    </Container>
  )
}
