'use client'
import { useUser } from "@clerk/nextjs"
import { useEffect, useState } from "react"
import { collection, CollectionReference, doc, getDoc, setDoc } from "firebase/firestore"
import { db } from "@/firebase"
import { useRouter } from "next/navigation"
import { Card, CardActionArea, CardContent, Container, 
  Grid, Typography, AppBar, Toolbar, Box, Button, 
  IconButton, Menu, MenuItem } from "@mui/material"
import { Person } from "@mui/icons-material";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"

export default function Flashcards() {
  const {isLoaded, isSignedIn, user} = useUser()
  const [flashcards, setFlashcards] = useState([])
  const router = useRouter()

  const [anchorEl, setAnchorEl] = useState(null);
  
    const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
    const handleMenuClose = () => {
    setAnchorEl(null);
  }

  useEffect (() => {
    async function getFlashcards() {
      if (!user) return
      const docRef = doc(collection(db, 'users'), user.id)
      const docSnap = await getDoc(docRef)

      if (docSnap.exists()){
        const collections = docSnap.data().flashcards || []
        setFlashcards(collections)
      } else {
        await setDoc(docRef, {flashcards: []})
      }
    }
    getFlashcards()
  }, [user])

  // if (!isLoaded || !isSignedIn){
  //   return 
  // }
  const handleCardClick=(id)=>{
    router.push(`/saved/flashcards/cards?id=${id}`)
  }

  return (
    <Container maxWidth='100vw' disableGutters>
        <AppBar position="static" >
        <Toolbar sx={{backgroundColor:'#AAFF84', height: 80}}>
          <Box sx={{flexGrow: 1}}>
          <Button color="inherit" href="/">
          <Typography color="black"variant="h6" textTransform="none" href="page.js" style={{flexGrow: 1}} sx={{ml: 2}}>
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
            <UserButton/>
          </SignedIn>
        </Toolbar>
      </AppBar>
      

  <Box 
    display={"flex"}
    justifyContent={"center"}
    flexDirection={'column'}
    alignItems={"center"}
    gap={2}
  >
     {/* Title */}
  <Typography 
    variant="h4"        // Adjust the variant for the size you want
    color="black"     // You can set the color to primary or any custom color
    marginTop={5}
  >
    Saved Collections
  </Typography>
  </Box>


    <Container maxWidth='100vw'>
    {!isLoaded ? (
          <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
            Loading...
          </Typography>
        ) : !isSignedIn ? (
          <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
            You are not signed in. Please sign in to access your saved collections.
          </Typography>
        ) : flashcards.length === 0 ? (
          <Typography variant="h6" align="center" color="textSecondary" sx={{ mt: 4 }}>
          </Typography>
        ) : (
      <Grid container spacing={3} sx={{mt: 2}}>
        {flashcards.map((flashcard, index)=> (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardActionArea
                onClick={() => {
                  handleCardClick(flashcard.name)
                }}
              >
                <CardContent>
                  <Typography variant="h6">
                    {flashcard.name}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid> 
      )}
      
    </Container>
    </Container>
  )

}