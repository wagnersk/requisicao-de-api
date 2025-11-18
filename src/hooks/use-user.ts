import React from "react";
import { api, fetcher } from "../helpers/api";
import type { User } from "../models/user";

export default function useUser() {

    const [user, setUser ] = React.useState<User |null>(null)
    const [requestStatus, setRequestsStatus ] = React.useState<'idle' | 'loading' | 'saving'>('idle')

    const getUser = React.useCallback(async  (username: string) => {
        
        try{
           setRequestsStatus('loading')
           const data =  await fetcher(`/users/${username}`)        
           setUser(data)

        } catch(e) {
        console.error(e)
        alert('Erro ao buscar usuário')
        } finally {
            setRequestsStatus('idle')
        }
        
    },[])

    async function createUser(payload:User) {
        try {
            setRequestsStatus('saving');

            await api('/users', { method: 'POST', body: JSON.stringify(payload) })
            alert('Usuário criado com sucesso!')

        } catch(e) {
            console.error(e)
            alert('Erro ao criar usuário')
        } finally {
            setRequestsStatus('idle')
        }
    }

    return {
        user,
        userRequestStatus: requestStatus,
        getUser,
        createUser

    }

}