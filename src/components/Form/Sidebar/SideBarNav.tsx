import {
    Stack
} from '@chakra-ui/react'
import {
    RiContactsLine,
    RiDashboardLine,
    RiGitMergeLine,
    RiInputMethodLine 
} from 'react-icons/ri'
import { NavLink } from './NavLink'
import { NavSection } from './NavSection'

export function SideBarNav(){
    return (
        <Stack spacing="12" align="flex-start">
            <NavSection title="GERAL">
                <NavLink children='Dashboard' icon={RiDashboardLine}/>
                <NavLink children='Usuarios' icon={RiContactsLine}/>
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink children='Formulários' icon={RiInputMethodLine}/>
                <NavLink children='Automação' icon={RiGitMergeLine}/>
            </NavSection>
        </Stack>
    )
}