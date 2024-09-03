"use client"
import DesktopNav from "./DesktopNav"
import MobileNav from "./MobileNav"
import { useState } from "react"

export default function Navigation() {
    const [isOpen, setIsOpen] = useState(false)

    function toggleAside() {
        setIsOpen(!isOpen)
        console.log(isOpen)
    }

    function closeAside(){
        setIsOpen(false)
        console.warn("aside cerrado")
    }

    return (
        <>
            <DesktopNav  isOpen={isOpen} toggleAside={toggleAside}/>
            <MobileNav isOpen={isOpen} closeAside={toggleAside}/>
        </>
    )
}