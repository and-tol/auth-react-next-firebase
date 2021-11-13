import { Navigate } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <Navigate to='/login' />
    </div>
  );
};
