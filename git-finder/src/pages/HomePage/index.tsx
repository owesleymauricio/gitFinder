'use client'
import Search from "@/components/search";
import User from "@/components/user";
import Error from "@/components/error";
import { Userprops } from "@/types/usersProps";
import { useState } from "react";
import Loader from "@/components/loader";


const HomePage = () => {
    const [user, setUser] = useState<Userprops | null>(null)
    const [error, setError] = useState(false)
    const [isLoading, setIsLoading] = useState(false)

    const loadUser = async (userName: string) => {
        setIsLoading(true)
        setError(false)//o ero inicia como falso
        setUser(null) // inicia o usuario como null
        const response = await fetch(`https://api.github.com/users/${userName}`)

        const data = await response.json()

        setIsLoading(false)

        if (response.status === 404){
            setError(true)
            return
        }

        const { avatar_url, login, location, followers, following } = data;

        const userData: Userprops = {
            avatar: avatar_url,
            login,
            location,
            followers,
            following
        }

        setUser(userData)
        
    }
    return (
        <>
            <Search loadUser={loadUser} />
            {isLoading && <Loader />}
            {
                user &&
                <User {...user} /> // usando spread, ele vai buscar o que eu ja delarei em User
            }
            {
                error &&
                <Error />
            }
        </>
    )
}

export default HomePage