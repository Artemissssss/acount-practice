import { Box } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import * as authOperations from '../redux//auth/authOperations'
import LoginForm from '../components/LoginForm';
import { userDatak } from '../redux/auth/authSelectors';

function LoginPage() {
  const dispatch = useDispatch()
  const data = useSelector(userDatak)
  function login(userData) {
    console.log(userData)
    dispatch(authOperations.login(userData))
    console.log(data)
  }

  return (
    <Box mt="24px" display="flex" justifyContent="center">
      <LoginForm onSubmit={login} />
    </Box>
  );
}
export default LoginPage;
