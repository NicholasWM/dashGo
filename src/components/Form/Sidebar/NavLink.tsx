import { ElementType } from 'react'
import {
    Text,
    Icon,
    Link as ChakraLink,
    LinkProps as ChakraLinkProps
} from '@chakra-ui/react'
import { ActiveLink } from '../../ActiveLink'

interface NavLinkProps extends ChakraLinkProps{
    children:string,
    icon: ElementType, //recebe a referencia de um componente
    href: string
}

export function NavLink({children, icon, href, ...rest}:NavLinkProps){
    return (
        <ActiveLink href={href} passHref shouldMatchExactHref={false}>
            <ChakraLink display="flex" align="center" {...rest}>
                <Icon as={icon} fontSize="20"/>
                <Text marginLeft="4" fontWeight="medium">{children}</Text>
            </ChakraLink>
        </ActiveLink>
    )
}