import { Box, Button, TextField, Typography } from '@mui/material';
import { useState } from 'react';

function LoginForm({ onSubmit }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({ email, password });
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      display="flex"
      flexDirection="column"
      gap="12px"
    >
      <Typography variant="h4" component="h3" mb="12px">
        Login
      </Typography>

      <TextField
        label="Email"
        type="email"
        name="email"
        placeholder="Email"
        autoComplete="off"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        placeholder="Password"
        autoComplete="off"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit" variant="contained">
        Login
      </Button>
    </Box>
  );
}
export default LoginForm;
