import { ElementType } from 'react'
import {
    Text,
    Icon,
    Link,
    LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

interface NavLinkProps extends ChakraLinkProps{
    children:string,
    icon: ElementType, //recebe a referencia de um componente
}

export function NavLink({children, icon, ...rest}:NavLinkProps){
    return (
        <Link display="flex" align="center" {...rest}>
            <Icon as={icon} fontSize="20"/>
            <Text marginLeft="4" fontWeight="medium">{children}</Text>
        </Link>
    )
}