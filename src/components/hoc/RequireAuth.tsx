import React, { useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
   children: any
}

const RequireAuth: React.FC<RequireAuthProps> = ({ children }) => {
   const location = useLocation()
   const [userData, setUserData] = useState(JSON.parse(localStorage.getItem('user')!))
   const [name, setName] = useState(userData.user || null)
   if (!name) {
      return <Navigate to={'/registrate'} state={{ from: location }} />
   }

   return children;
}

export default RequireAuth;