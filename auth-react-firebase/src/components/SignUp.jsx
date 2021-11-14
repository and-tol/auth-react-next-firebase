import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';
import { Form } from './Form';

export const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handRegister = (email, password) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(({ user }) => {
        console.log(user);
        dispatch(
          setUser({
            email: user.email,
            id: user.uid,
            token: user.accessToken,
          })
        );
        navigate('/');
      })
      .catch(console.error);
  };

  return (
    <>
      <Form title='Register' handleClick={handRegister} />
    </>
  );
};
