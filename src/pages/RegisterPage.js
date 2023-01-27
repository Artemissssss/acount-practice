import { Box } from '@mui/material';
import {useDispatch} from "react-redux"
import RegisterForm from '../components/RegisterForm';
import * as authOperations from '../redux//auth/authOperations'

function RegisterPage() {
  const dispatch = useDispatch()
  function register(userData) {
    dispatch(authOperations.register(userData))
  }

  return (
    <Box mt="24px" display="flex" justifyContent="center">
      <RegisterForm onSubmit={register} />
    </Box>
  );
}
export default RegisterPage;
