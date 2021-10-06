import { useDisclosure, UseDisclosureReturn } from "@chakra-ui/react";
import { useRouter } from "next/dist/client/router";
import { createContext } from "react";
import { ReactNode, useContext, useEffect } from "react";

type SideBarDrawerContextData = UseDisclosureReturn
const SideBarDrawerContext = createContext({} as SideBarDrawerContextData)
interface SideBarDrawerProviderProps {
    children: ReactNode
}
export function SideBarDrawerProvider({children}:SideBarDrawerProviderProps){
    const disclosure = useDisclosure()
    const router = useRouter()
    useEffect(()=>{
        disclosure.onClose()
    },[router.asPath])
    return (
        <SideBarDrawerContext.Provider value={disclosure}>
            {children}
        </SideBarDrawerContext.Provider>
    )
}

export const useSideBarDrawer = () => useContext(SideBarDrawerContext)