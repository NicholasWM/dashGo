import { useQuery } from "react-query"
import { api } from "../api"

type User = {
    id: string,
    name: string,
    email: string,
    createdAt: string,
}

interface Users {
    users : User[]
}

interface GetUsersResponse extends Users {
    totalCount: number
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
    const {data, headers} = await api.get<Users>('users', {
        params: {
            page,
        }
    })

    const totalCount = Number(headers['x-total-count'])
    const users = data.users.map(user => ({
        ...user,
        createdAt: new Date(user.createdAt).toLocaleDateString('pt-BR', {
            day:'2-digit',
            month:'long',
            year:'numeric'
        })
    }))
    
    return {users, totalCount}
}
export function useUsers(page: number){
    return useQuery(['users', page],()=>getUsers(page),{
        staleTime: 1000 * 5 // 5 seconds
    })
}