import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BsPlus, BsEyeFill } from 'react-icons/bs'



const Product = ({product}) => {
    // console.log(product)
    const {id, image, category, title, price} = product
    return (
        <div>
            <div className='border border-[#35736E]/5 h-[300px] relative overflow-hidden group transition cursor-pointer'>
                <div className='w-full h-full flex justify-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img className='max-h-[160px] group-hover:scale-110 transition duration-300' src={image} alt="" />
                    </div>
                </div>
                <div className='absolute bottom-0 bg-red-500 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 left-40'>
                    <button>
                        <div className='flex justify-center items-center text-white w-12 h-12'>
                            <BsPlus className='text-3xl' />
                        </div>
                    </button>
                    <Link to=''></Link>
                </div>
            </div>
            <div>2</div>
        </div>
    )
}

export default Product
