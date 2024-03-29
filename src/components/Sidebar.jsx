import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { IoMdArrowForward } from 'react-icons/io'
import { FiTrash2 } from 'react-icons/fi'
import CartItem from '../components/CartItem'
import { SidebarContext } from '../contexts/SidebarContext'
import { CartContext } from '../contexts/CartContext'

const Sidebar = () => {
    const {isOpen, handleClose} = useContext(SidebarContext)
    // console.log(useContext(CartContext))

    const { cart, clearCart } = useContext(CartContext)
    return (
        <div className={`${isOpen ? 'right-0' : '-right-full'} w-full bg-white fixed top-0 h-full shadow-2xl md:w-[35vw] lg:max-w-[30vw] xl:max-w-[30vw] transition-all duration-300 z-20 px-4 lg:px-[25px]`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Cart (0)</div>
                <div onClick={handleClose} className='w-8 h-8 flex justify-center items-center cursor-pointer'>
                    <IoMdArrowForward className='text-xl' />
                </div>
            </div>
            <div>
                {cart.map(item => {
                    return (
                        <CartItem item={item} key={item.id}/>         
                    )
                })}
            </div>

            <div>
                <div className='flex justify-between items-center w-full'>
                    <div>
                        <span>Total:</span>$ 1000
                    </div>

                    <div onClick={clearCart} className='cursor-pointer py-4 bg-black text-white w-12 h-12 flex justify-center items-center text-xl'>
                        <FiTrash2 />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
