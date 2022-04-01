import {
    Box,
    Flex,
    Heading,
    Button,
    Icon,
    Table,
    Thead,
    Tr,
    Th,
    Tbody,
    Td,
    Checkbox,
    Text,
    useBreakpointValue,
    Spinner,
    Link
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { useState } from 'react'
import { Header } from '../../components/Form/Header'
import { Pagination } from '../../components/Form/Pagination'
import { SideBar } from '../../components/Form/Sidebar'
import { getUsers, useUsers } from '../../services/hooks/useUsers'
import { queryClient } from '../../services/queryClient'
import { api } from '../../services/api'
import { GetServerSideProps } from 'next'

export default function UserList({users}) {
    const [page, setPage] = useState(1)
    const { data, isLoading, error, isFetching }: any = useUsers(page, {
        initialData: users
    })
    const isWideVersion = useBreakpointValue({
        base: false, // Padrão é false
        lg: true // Large para frente true
    })

    async function handlePrefetchUser(userId: string){
        await queryClient.prefetchQuery(['user', userId], async ()=> {
            const response = await api.get(`users/${userId}`)
            return response.data
        }, {
            staleTime: 1000 * 60 * 10 // 10 minutos
        })
    }

    return (
        <Box>
            <Header />
            <Flex
                width="100%"
                may="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <SideBar />
                <Box
                    flex="1"
                    borderRadius={8}
                    bg="gray.800"
                    p="8"
                >
                    <Flex
                        mb="8"
                        justify="space-between"
                        align="center"
                    >
                        <Heading
                            size="lg"
                            fontWeight="normal"
                        >
                            Usuários {!isLoading && isFetching && (<Spinner/>)}
                        </Heading>
                        <NextLink href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="20"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>
                        </NextLink>
                    </Flex>
                    {isLoading ? (
                        <Flex justify="center">
                            <Spinner />
                        </Flex>
                    ) : error ? (
                        <Flex justify="center">
                            <Text>Falha ao obter dados dos usuarios.</Text>
                        </Flex>
                    ) : (
                        <>
                            <Table
                                colorScheme="whiteAlpha"
                            >
                                <Thead>
                                    <Tr>
                                        <Th px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox
                                                colorScheme="pink"
                                            />
                                        </Th>
                                        <Th>Usuário</Th>
                                        {isWideVersion && (<Th>Data de Cadastro</Th>)}
                                        <Th width="8"></Th>
                                    </Tr>
                                </Thead>
                                <Tbody>
                                    {data?.users.map((user) => (
                                        <Tr key={user?.id}>
                                        <Td px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox
                                                colorScheme="pink"
                                            />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Link color="purple.400" onMouseEnter={()=> handlePrefetchUser(user.id)}>
                                                    <Text fontWeight="bold">{user?.name}</Text>
                                                </Link>
                                                <Text fontSize="sm" color="gray.300">{user?.email}</Text>
                                            </Box>
                                        </Td>
                                        {isWideVersion && (<Td>{user?.createdAt}</Td>)}
                                        <Td>
                                            {isWideVersion && (
                                                <NextLink href="/users/edit" passHref>
                                                    <Button
                                                        as="a"
                                                        size="sm"
                                                        fontSize="16"
                                                        colorScheme="purple"
                                                        leftIcon={<Icon as={RiPencilLine} />}
                                                    >
                                                        Editar
                                                    </Button>
                                                </NextLink>
                                            )}
                                        </Td>
                                    </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            <Pagination 
                                totalCountOfRegisters={data?.totalCount}
                                currentPage={page}
                                onPageChange={(page)=>{setPage(page)}}
                            />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}

export const getServerSideProps: GetServerSideProps = async ()=>{
    const {totalCount, users} = await getUsers(1)
    return {
        props:{
            users,
        }
    }
}