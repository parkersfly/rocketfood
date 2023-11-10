import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  function signOut() {
    localStorage.removeItem("@rocketfood:user");

    setData({});
  }

  async function signIn({ email, password }) {
    try {
      const response = await api.post("/sessions", { email, password }, { withCredentials: true });

      const { user } = response.data;

      localStorage.setItem("@rocketfood:user", JSON.stringify(user));

      setData({ user });

    } catch (error) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert("Não foi possível logar");
      }
    }
  }

  async function updateProfile({ user }) {
    try {
      await api.put("/users", user);

      localStorage.setItem("@rocketfood:user", JSON.stringify(user));

      setData({ user, token: data.token });
      alert("Perfil atualizado com sucesso!")

    } catch (error) {
      if(error.response){
        alert(error.response.data.message)
      } else {
        alert("Não foi possível atualizar")
      }
    }
  }

  useEffect(() => {
    const user = localStorage.getItem("@rocketfood:user");

    if (user) {
      setData({
        user: JSON.parse(user),
      });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ 
      signIn, 
      user: data.user, 
      signOut, 
      updateProfile 
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  return context;
}

export { AuthProvider, useAuth };
