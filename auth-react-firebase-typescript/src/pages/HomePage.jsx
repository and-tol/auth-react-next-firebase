import { Navigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useAuth } from '../hooks/useAuth';
import { removeUser } from '../store/slices/userSlice';

export const HomePage = () => {
  const dispatch = useDispatch();
  const { isAuth, email } = useAuth();

  return isAuth ? (
    <>
      <h1>Welcome!</h1>
      <button onClick={() => dispatch(removeUser())}>
        Log Out form {email}
      </button>
    </>
  ) : (
    <div>
      <Navigate to='/login' />
    </div>
  );
};
