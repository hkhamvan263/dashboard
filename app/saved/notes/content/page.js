'use client'
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/firebase";
import { Container, Grid, Typography, Box } from "@mui/material";
import { Timestamp } from "firebase/firestore";

export default function NotesCollection() {
    const { isLoaded, isSignedIn, user } = useUser();
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function getNotes() {
            if (!user) return;
            const docRef = doc(db, 'users', user.id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                const notesData = docSnap.data().notes || [];
                setNotes(notesData);
            } else {
                await setDoc(docRef, { notes: [] });
            }
        }
        getNotes();
    }, [user]);

    if (!isLoaded) {
        return <Typography>Loading...</Typography>;
    }


    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Grid container spacing={3}>
                {notes.map((note, index) => (
                    <Grid item xs={12} key={index}>
                            <Typography 
                            variant="h4" 
                            component="h2" 
                            textAlign={'center'}
                            marginTop={5}
                            gutterBottom
                            >
                                {note.title}
                            </Typography>
                            <Typography component='h3' sx={{mb: 1}}>Note:</Typography>
                            <Box sx={{ p: 2, border: '1px solid #ddd', borderRadius: 1, mb: 2 }}>
                            <Typography variant="body2" color="textSecondary">
                                {note.content}
                            </Typography>
                            </Box>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
}

// 'use client';
// import { useUser } from "@clerk/nextjs";
// import { useEffect, useState } from "react";
// import { doc, getDoc } from "firebase/firestore";
// import { db } from "@/firebase";
// import { Container, Typography } from "@mui/material";
// import { useRouter, useSearchParams } from "next/navigation";

// export default function NoteDetail() {
//     const { user } = useUser();
//     const [note, setNote] = useState(null);
//     const router = useRouter();
//     const searchParams = useSearchParams();
//     const id = searchParams.get('id') // Get the note ID from the query

//     useEffect(() => {
//         async function getNote() {
//             if (!user || !id) return;
//             const docRef = doc(db, 'users', user.id, 'notes', id);
//             const docSnap = await getDoc(docRef);

//             if (docSnap.exists()) {
//                 setNote(docSnap.data());
//             } else {
//                 // Handle the case where the note doesn't exist
//                 router.push('/notes');
//             }
//         }
//         getNote();
//     }, [user, id]);

//     if (!note) {
//         return <Typography>Loading...</Typography>;
//     }

//     return (
//         <Container>
//             <Typography variant="h4">{note.title}</Typography>
//             <Typography variant="body1">{note.content}</Typography>
//             <Typography variant="caption" color="textSecondary">
//                 {note.timestamp ? new Timestamp(note.timestamp.seconds, note.timestamp.nanoseconds).toDate().toLocaleString() : ''}
//             </Typography>
//         </Container>
//     );
// }
