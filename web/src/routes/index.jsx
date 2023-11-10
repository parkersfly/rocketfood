import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { CustomerRoutes } from './customer.routes'
import { AdminRoutes } from './admin.routes'
import { AuthRoutes } from './auth.routes.jsx'

import { USER_ROLE } from '../utils/role'
import { useEffect } from "react";
import { api } from "../services/api";

export function Routes(){
  const { user, signOut } = useAuth()

  function AccessRoute(){
    switch(user.role){
      case USER_ROLE.ADMIN:
        return <AdminRoutes />;
      case USER_ROLE.CUSTOMER:
        return <CustomerRoutes />;
        default:
          return <CustomerRoutes />;
    }
  }

  useEffect(() => {
    api
    .get("/users/validated")
    .catch((error) => {
      if(error.response?.status === 401){
        signOut()
      }
    })
  }, [])

  return(
    <BrowserRouter>
      { user ? <AccessRoute /> : <AuthRoutes /> }
    </BrowserRouter>
  )
}