import React from "react"
import useUser from "../hooks/use-user"

export default function UserInfo() {
    const { user, userRequestStatus, getUser } = useUser()

    React.useEffect(() => {
        getUser("Gus")
    }, [getUser])


    if (userRequestStatus === 'loading') {
        return <p>Carregando...</p>
    }

    return (
        <ul>
            <li>Nome: {user?.name}</li>
            <li>Username: {user?.id}</li>
        </ul>
    )
}