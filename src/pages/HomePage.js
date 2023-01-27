import { Box, Typography } from '@mui/material';

function HomePage() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="calc(100vh - 64px)"
    >
      <Typography variant="h3" component="h1">
        Example JWT Auth Web App
      </Typography>
    </Box>
  );
}
export default HomePage;
