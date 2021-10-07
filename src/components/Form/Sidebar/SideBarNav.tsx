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
                <NavLink href="/dashboard" children='Dashboard' icon={RiDashboardLine}/>
                <NavLink href="/users" children='Usuarios' icon={RiContactsLine}/>
            </NavSection>
            <NavSection title="AUTOMAÇÃO">
                <NavLink href="/forms" children='Formulários' icon={RiInputMethodLine}/>
                <NavLink href="/automation" children='Automação' icon={RiGitMergeLine}/>
            </NavSection>
        </Stack>
    )
}