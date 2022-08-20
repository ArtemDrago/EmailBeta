import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
   children: any
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
   const location = useLocation()
   const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')!))

   if (!userData) {
      return <Navigate to={'/registrate'} state={{ from: location }} />
   }

   return children;
}

export default RequireAuth;