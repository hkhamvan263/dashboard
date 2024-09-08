// pages/notes-collections.js
'use client'
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc} from "firebase/firestore";
import { Timestamp } from "firebase/firestore";
import { db } from "@/firebase";
import { useRouter } from "next/navigation";
import { Card, CardActionArea, CardContent, Container, Grid, Typography } from "@mui/material";

export default function NotesCollections() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [notes, setNotes] = useState([]);
    const router = useRouter();

    useEffect(() => {
        async function getNotes() {
            if (!user) return;
            const docRef = doc(db, 'users', user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const notes = docSnap.data().notes || [];
                setNotes(notes);
            } else {
                await setDoc(docRef, { notes: [] });
            }
        }
        getNotes();
    }, [user]);

    if (!isLoaded){
        return <Typography>Loading....</Typography>
    }

    const formatTimestamp = (timestamp) => {
        const date = timestamp.toDate();
        return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`;
    };
    
    const handleCardClick = (id) => {
        router.push(`/saved/notes/content?id=${id}`); // Adjust path as needed
    };

    if (!isLoaded || !isSignedIn) {
        return <div>Please sign in to view notes</div>;
    };

    return (
        <Container>
            <Typography 
            variant="h4"  
            marginTop={5}
            gutterBottom
            textAlign={'center'} 
            >
                Your Notes
            </Typography>
            <Grid container spacing={2}>
                {notes.map((note, index) => (
                    <Grid item xs={12} sm={6} md={4} key={index}>
                        <Card>
                            <CardActionArea onClick={() => handleCardClick(note.id)}>
                                <CardContent>
                                    <Typography variant="h6">{note.title}</Typography>
                                    <Typography variant="caption" color="textSecondary">
                                        {formatTimestamp(note.timestamp)}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}
