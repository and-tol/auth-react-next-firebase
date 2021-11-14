import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setUser } from '../store/slices/userSlice';
import { Form } from './Form';

export const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = (email, password) => {
    console.log('email', email);
    console.log('password', password);

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
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
      .catch(() => alert('Invalid user'));
  };

  return <Form title='Sign In' handleClick={handleLogin} />;
};
