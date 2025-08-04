import { createContext, useContext, useState, type ReactNode } from "react"

interface User {
  name: string,
  email: string,
  password: string,
  id: number,
  isLogged: boolean
}

interface AuthContextType {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}
interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextType | null>(null)

export const AuthProvider = ({ children }: AuthProviderProps) => {

  const [user, setUser] = useState<User | null>(null)

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext);
  if(!context){
    throw new Error("useAuth must be used within a AuthProvider")
  }

  return context
}