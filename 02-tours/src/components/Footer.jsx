import { Box, Container, Paper, Typography } from "@mui/material";
import alpata from "../assets/alpata.png";

export default function Footer() {
    return (
        <Paper sx={{
            marginTop: 'calc(10% + 60px)',
            width: '100%',
            position: 'fixed',
            bottom: 0,
            
        }} component="footer" square variant="outlined">
            <Container maxWidth="lg">
                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        my: 1
                    }}
                >
                    <div>
                        <img priority src={alpata} width={75} height={30} alt="Logo" />
                    </div>
                </Box>

                <Box
                    sx={{
                        flexGrow: 1,
                        justifyContent: "center",
                        display: "flex",
                        mb: 2,
                    }}
                >
                    <Typography variant="caption" color="initial">
                        Copyright ©{new Date().getFullYear()}. Alpata Technology Limited
                    </Typography>
                </Box>
            </Container>
        </Paper>
    );
}