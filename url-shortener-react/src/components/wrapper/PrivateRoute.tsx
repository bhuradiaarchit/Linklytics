import React from 'react'
import { useAuthContext } from '../../contextApi/ContextApi'
import { Navigate } from 'react-router-dom';

function PrivateRoute({children}) {
    const {token} = useAuthContext()

    if(token) return children;

  return <Navigate to="/login" />
}

export default PrivateRoute
