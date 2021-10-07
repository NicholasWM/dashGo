import {
    Box,
    Flex,
    Heading,
    Divider,
    VStack,
    SimpleGrid,
    HStack,
    Button
} from '@chakra-ui/react'
import Link from 'next/link'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { Header } from '../../components/Form/Header'
import { SideBar } from '../../components/Form/Sidebar'
import { Input } from '../../components/Form/Input'
import { SubmitHandler, useForm } from 'react-hook-form'

type CreateUserFormData = {
    name:string,
    email:string,
    password:string,
    password_confirmation:string,
  }
  
  const createUserFormSchema = yup.object().shape({
    name:yup.string().required('Nome obrigatório'),
    email:yup.string().required('E-mail obrigatório').email('E-mail inválido'),
    password: yup.string().required('Senha obrigatória').min(6, 'No minimo 6 caracteres'),
    password_confirmation: yup.string().oneOf(
        [null, yup.ref('password')], 'As senhas precisam ser iguais'
    ), // Precisa ser igual ao password ou valor inicial null
  })

export default function CreateUser(){
    const {register, handleSubmit, formState} = useForm({
        resolver: yupResolver(createUserFormSchema)
    })
    const {errors} = formState
    const handleCreateUser:SubmitHandler<CreateUserFormData> 
    = async (values)=>{
        await new Promise(resolve => setTimeout(resolve, 2000))
    }
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
                    p={["6", "8"]}
                    as="form"
                    onSubmit={handleSubmit(handleCreateUser)}
                >
                    <Heading
                        size="lg"
                        fontWeight="normal"
                    >
                        Criar Usuário
                    </Heading>
                    <Divider my="6" borderColor="gray.700" />
                    <VStack spacing="8">
                        <SimpleGrid 
                            minChildWidth="240px"
                            spacing={["6","8"]}
                            w="100%"
                        >
                            <Input error={errors.name} name="name" label="Nome Completo" {...register('name')}/>
                            <Input error={errors.email} name="email" type="email" label="E-mail" {...register('email')}/>
                        </SimpleGrid>
                        <SimpleGrid 
                            minChildWidth="240px"
                            spacing={["6","8"]}
                            w="100%"
                        >
                            <Input 
                                error={errors.password} 
                                name="password"
                                type="password"
                                label="Senha"
                                {...register('password')}
                            />
                            <Input error={errors.password_confirmation} name="password_confirmation" type="password" label="Confirmar senha" {...register('password_confirmation')}/>
                        </SimpleGrid>
                    </VStack>
                    <Flex
                        mt="8"
                        justify="flex-end"
                    >
                        <HStack spacing="4">
                            <Link href="/users" passHref>
                                <Button as="a" colorScheme="whiteAlpha">Cancelar</Button>
                            </Link>
                            <Button isLoading={formState.isSubmitting} type="submit" colorScheme="pink">Salvar</Button>
                        </HStack>
                    </Flex>

                </Box>
            </Flex>
        </Box>
    )
}