"use client"

import { createContext, useState } from "react"

interface User {
    id: number;
    first_name: string;
    last_name: string;
    password: string;
    email: string;
    address: string;
    suburb: string;
    state: string;
    postcode: string;
    card_number: string | null | undefined;
    name_on_card: string | null | undefined;
    expiring_date: string | null | undefined;
    last_digits: string | null | undefined;
    profile_pic: string;
    created_at: Date;
    updated_at: Date;
}

interface State {
    loading: boolean;
    error: string | null;
    data: User | null
}

interface AuthState extends State {
    setAuthState: React.Dispatch<React.SetStateAction<State>>;
  }
  
  export const AuthenticationContext = createContext<AuthState>({
    loading: false,
    error: null,
    data: null,
    setAuthState: () => {}
  });

export default function AuthContext({
    children,
} : {
    children: React.ReactNode
}) {
    const [authState, setAuthState] = useState<State>({
        loading: false,
        data: null,
        error: null
    })
    return <AuthenticationContext.Provider value={{
        ...authState,
        setAuthState
    }}>{children}</AuthenticationContext.Provider>;
}