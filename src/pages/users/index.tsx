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
} from '@chakra-ui/react'
import Link from 'next/link'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Form/Header'
import { Pagination } from '../../components/Form/Pagination'
import { SideBar } from '../../components/Form/Sidebar'
import { useUsers } from '../../services/hooks/useUsers'

export default function UserList() {
    const { data, isLoading, error, isFetching } = useUsers()
    const isWideVersion = useBreakpointValue({
        base: false, // Padrão é false
        lg: true // Large para frente true
    })

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
                        <Link href="/users/create" passHref>
                            <Button
                                as="a"
                                size="sm"
                                fontSize="20"
                                colorScheme="pink"
                                leftIcon={<Icon as={RiAddLine} />}
                            >
                                Criar novo
                            </Button>
                        </Link>
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
                                    {data?.map((user) => (
                                        <Tr key={user?.id}>
                                        <Td px={["4", "4", "6"]} color="gray.300" width="8">
                                            <Checkbox
                                                colorScheme="pink"
                                            />
                                        </Td>
                                        <Td>
                                            <Box>
                                                <Text fontWeight="bold">{user?.name}</Text>
                                                <Text fontSize="sm" color="gray.300">{user?.email}</Text>
                                            </Box>
                                        </Td>
                                        {isWideVersion && (<Td>{user?.createdAt}</Td>)}
                                        <Td>
                                            {isWideVersion && (
                                                <Link href="/users/edit" passHref>
                                                    <Button
                                                        as="a"
                                                        size="sm"
                                                        fontSize="16"
                                                        colorScheme="purple"
                                                        leftIcon={<Icon as={RiPencilLine} />}
                                                    >
                                                        Editar
                                                    </Button>
                                                </Link>
                                            )}
                                        </Td>
                                    </Tr>
                                    ))}
                                </Tbody>
                            </Table>
                            <Pagination 
                                totalCountOfRegisters={200}
                                currentPage={5}
                                onPageChange={()=>{}}
                            />
                        </>
                    )}
                </Box>
            </Flex>
        </Box>
    )
}