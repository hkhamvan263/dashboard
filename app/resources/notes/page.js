'use client'
import { useState } from 'react';
import { TextField, Button, Container, Typography, 
    Box, AppBar, Toolbar, IconButton, Menu, MenuItem,
Snackbar, Alert } from '@mui/material';
import { db } from '@/firebase'; 
import { addDoc, collection, doc, getDoc, Timestamp, writeBatch } from 'firebase/firestore';
import { useUser } from '@clerk/nextjs';
import Head from "next/head";
import Link from "next/link";
import { Person } from "@mui/icons-material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from 'next/navigation';


const CreateNotePage = () => {

    const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget)
    }
    const handleMenuClose = () => {
      setAnchorEl(null);
    }

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [error, setError] = useState('');
  const {userId, isSignedIn, user } = useUser();
  const [openSnackbar, setOpenSnackbar] = useState(false)
  //const [snackbarMessage, setSnackbarMessage] = useState('')
  const router = useRouter()

  const handleNoteSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setError('Please fill in both the title and content.');
      return;
    }

    try {

        const batch = writeBatch(db)
        const userDocRef = doc(db,'users', user.id);
        const docSnap = await getDoc(userDocRef);

        if (docSnap.exists()){
            const notes = docSnap.data().notes || [];
            notes.push({title, content, timestamp: Timestamp.now()});
            batch.set(userDocRef, {notes}, {merge:true});
        } else {
            batch.set(userDocRef, {notes: [{title, content, timestamp: Timestamp.now()}]});
        }
      // Create a new document in the "notes" collection
    //   await addDoc(collection(db, 'users', user.id, 'notes'), {
    //     title,
    //     content,
    //     timestamp: Timestamp.now(),
    //   });

      // show success message
    //   setSnackbarMessage('Note successfully added to database.');
    //   setOpenSnackbar(true);

      // Reset the form
      await batch.commit();
      setTitle('');
      setContent('');
      setError('');
      router.push('/saved/notes/collections')
    } catch (err) {
      setError(`Failed to add note. Error: ${err.message}`);
    }
  };

//   const handleCloseSnackbar = () => {
//     setOpenSnackbar(false);
//   }

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

    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Create a Note
        </Typography>

        {error && (
          <Typography color="error" gutterBottom>
            {error}
          </Typography>
        )}

        <form onSubmit={handleNoteSubmit}>
          <TextField
            fullWidth
            variant="outlined"
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
            disabled={!isSignedIn}
          />
          <TextField
            fullWidth
            variant="outlined"
            label="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            multiline
            rows={4}
            margin="normal"
            disabled={!isSignedIn}
          />
          <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          disabled={!isSignedIn}
          >
            Add Note
          </Button>
        </form>

        {/**<Snackbar
          open={openSnackbar}
          autoHideDuration={3000}
          onClose={handleCloseSnackbar}
          message={snackbarMessage}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
        >
          <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
            {snackbarMessage}
          </Alert>
        </Snackbar>*/}

        {!isSignedIn && (
            <Typography color="textSecondary" variant="body1" sx={{ mt: 2 }}>
                Please log in to add a note.
            </Typography>
        )}

        <Snackbar 
            open={openSnackbar}
            autoHideDuration={6000}
            onClose={()=> setOpenSnackbar(false)}
            message = "Note Successfully added"
        />
      </Box>
    </Container>
    </Container>
  );
};

export default CreateNotePage;
