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
} from '@chakra-ui/react'
import { RiAddLine, RiPencilLine } from 'react-icons/ri'
import { Header } from '../../components/Form/Header'
import { Pagination } from '../../components/Form/Pagination'
import { SideBar } from '../../components/Form/Sidebar'

export default function UserList(){
    return (
        <Box>
            <Header/>
            <Flex
                width="100%"
                may="6"
                maxWidth={1480}
                mx="auto"
                px="6"
            >
                <SideBar/>
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
                            Usuários
                        </Heading>
                        <Button 
                            as="a"
                            size="sm"
                            fontSize="20"
                            colorScheme="pink"
                            leftIcon={<Icon as={RiAddLine}/>}
                        >
                            Criar novo
                        </Button>
                    </Flex>

                    <Table
                        colorScheme="whiteAlpha"
                    > 
                        <Thead>
                            <Tr>
                                <Th px="6" color="gray.300" width="8">
                                    <Checkbox 
                                        colorScheme="pink"
                                    />
                                </Th>
                                <Th>Usuário</Th>
                                <Th>Data de Cadastro</Th>
                                <Th width="8"></Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            <Tr>
                                <Td px="6" color="gray.300" width="8">
                                    <Checkbox 
                                        colorScheme="pink"
                                    />
                                </Td>
                                <Td>
                                    <Box>
                                        <Text fontWeight="bold">Nicholas</Text>
                                        <Text fontSize="sm" color="gray.300">nwm@gmail.com</Text>
                                    </Box>
                                </Td>
                                <Td>04 de Abril de 2021</Td>
                                <Td>
                                    <Button 
                                        as="a"
                                        size="sm"
                                        fontSize="16"
                                        colorScheme="purple"
                                        leftIcon={<Icon as={RiPencilLine}/>}
                                    >
                                        Editar
                                    </Button>
                                </Td>
                            </Tr>
                        </Tbody>
                    </Table>
                    <Pagination/>
                </Box>
            </Flex>
        </Box>
    )
}