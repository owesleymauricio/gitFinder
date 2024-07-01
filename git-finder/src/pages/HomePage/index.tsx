'use client'
import Search from "@/components/search";
import { Userprops } from "@/types/usersProps";
import { useState } from "react";


const HomePage = () => {
    const [user, setUser] = useState<Userprops | null>(null)

    const loadUser = async (userName: string) => {
        const response = await fetch(`https://api.github.com/users/${userName}`)

        const data = await response.json()

        const { avatar, login, location, followers, following } = data;

        const userData: Userprops = {
            avatar,
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
            {user && <p>{user.login}</p>}
        </>
    )
}

export default HomePage