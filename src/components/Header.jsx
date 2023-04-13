import React, { useContext } from 'react'
import { SidebarContext } from '../contexts/SidebarContext'
import { BsBag } from 'react-icons/bs'

const Header = () => {
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    return (
        <div className='bg-pink-200 h-[50px]'>
            <div>Header</div>
            <div onClick={()=> setIsOpen(!isOpen)} className='flex relative cursor-pointer'>
                <BsBag className='text-xl' />
            </div>
        </div>
    )
}

export default Header
