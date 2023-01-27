import {
  AppBar,
  Button,
  Toolbar,
  Typography,
  Box,
  styled,
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import * as authOperations from '../redux//auth/authOperations'
import { userName } from '../redux/auth/authSelectors';
const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);

function Navbar() {
  const username = useSelector(userName);
  console.log(username)
  const dispatch = useDispatch()
  const logoutFunc = () => {
    dispatch(authOperations.logout({}))
  }

  return (
    <Box>
      <AppBar>
        <Toolbar>
          <Typography
            variant="h6"
            color="inherit"
            sx={{ textDecoration: 'none' }}
            component={Link}
            to="/"
          >
            JWT Auth
          </Typography>

          <Box ml="auto">
            <Button color="inherit" component={Link} to="/contacts">
              Contacts
            </Button>
            <Typography variant="body1" component="span">
              example@mail.com
            </Typography>
            
            <Button color="inherit" onClick={logoutFunc}>Logout</Button>
            
          </Box>
          <Box>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/register">
              Register
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Offset />
    </Box>
  );
}
export default Navbar;
