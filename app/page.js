'use client'
import {
  AppBar, 
  Box, 
  Toolbar, 
  Button, 
  Typography, 
  IconButton, 
  Container,
  Grid2,
} from "@mui/material"
import Head from "next/head"
import {Menu} from "@mui/icons-material"
import Grid from '@mui/material/Grid2';

export default function Home() {
  return (
    <Box sx={{backgroundColor: '#BFB894', minHeight: '100vh', overflowX: 'hidden'}}>
      <Container maxWidth="100vw" disableGutters>
        <Head>
          <title>Dashboard</title>
          <meta
            name = "description" 
            content="A collaborative study platform with AI notes summary, flashcard creation, and more" 
          />
        </Head>
        <AppBar position="static">
          <Toolbar sx={{backgroundColor: '#AAFF84'}}>
            <Box sx={{flexGrow: 1}}>
              <IconButton>
                <Menu />
              </IconButton>
              <Button href="/">
                <Typography
                  variant="h6" 
                  textTransform="none" 
                  style={{flexGrow: 1}}
                  color="black"
                >
                  Dashboard
                </Typography>
              </Button>
            </Box>
          </Toolbar>
        </AppBar>
        <Box
          width ="100vw"
          sx={{
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{mt: 4}}>
            Hello and Welcome to Dashboard</Typography>
          <Typography variant="h6">
            {' '}
            A collaborative study platform with AI notes summary, flashcard creation, and more
          </Typography>
          <Container>
          <Grid container spacing={2}>
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
                }}
              >
                <Typography variant="h6" gutterBottom>Making a Group Chat</Typography>
                <Typography>
                  {' '}
                  Start a group chat with your classmates to discuss the notes and share ideas.
                </Typography>
                <Button variant="contained" sx={{mt: 3, width:'50%', mx:'auto'}}>
                  Make a Group Chat
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
                    width:'50%', 
                    mx:'auto'
                  }}
                >
                  Summarize Notes
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
                }}
              >
                <Typography variant="h6" gutterBottom>Creating Flashcards</Typography>
                <Typography>
                  {' '}
                  Our AI can create flashcards to help you memorize the material and ace your exams.
                </Typography>
                <Button variant="contained" sx={{mt: 3, width:'50%', mx:'auto'}}>
                  Create Flashcards
                </Button>
              </Box>
            </Grid>
          </Grid>
          </Container>
        </Box>
      </Container>
    </Box>
  )
}
