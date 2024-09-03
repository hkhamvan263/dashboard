import { SignUp } from "@clerk/nextjs";
import { AppBar, Container, Toolbar, Typography, Button, Box } from "@mui/material";
import Link from "next/link";

export default function SignUpPage(){
    return(
    <Box
        display={'flex'}
        flexDirection={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        marginTop={5}
    >
        <Box marginBottom={3}>
        <Typography variant="h4">Sign Up</Typography>
        </Box>
        <SignUp />
    </Box>
    )
}