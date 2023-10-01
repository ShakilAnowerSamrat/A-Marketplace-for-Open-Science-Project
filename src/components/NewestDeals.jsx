import React from 'react'
import {BsSuitHeart} from 'react-icons/bs'
import {IoBedOutline,IoLocationOutline} from 'react-icons/io5'
import {GiBathtub,GiHomeGarage} from 'react-icons/gi'
import {AiOutlineDoubleRight} from 'react-icons/ai'
import house1 from '../assets/house1.jpg'
import house2 from '../assets/house2.jpg'
import house3 from '../assets/house3.jpg'
import house4 from '../assets/house4.jpg'
import house5 from '../assets/house5.jpg'
import house6 from '../assets/house6.jpg'
import house7 from '../assets/house12.jpg'
import house8 from '../assets/house13.jpg'
import house9 from '../assets/house14.jpg'

const NewestDeals = () => {
  return (
    <div className='py-10'>
        <p className='px-4 py-1 text-xs bg-yellow-100 w-16 rounded-lg'>NEW</p>
        <h1 className='text-4xl font-bold'>NEWEST DEALS</h1>
        <div className="deals grid 2xl:grid-cols-5 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 py-10">
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house1} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$110,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Kissimmee.Florida US</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house2} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$70,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Petra,Spain</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house3} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                  
                </div>
                <h1 className='text-2xl font-semibold'>$42,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Ia Molas,Italy</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house4} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$80,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>San Francisco,Colombia</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house5} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>59,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>VN, Vietnam</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house6} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$42,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Wiesentheid, Germany</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house7} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$132,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Tambon Bang Sa-re, Thailand</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house8} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>5 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>3 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$58,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Vuren, Netherlands</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house4} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>3 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>2 bat</p>
                    </div>
                 
                </div>
                <h1 className='text-2xl font-semibold'>$120,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>New York, United States</p>
                </div>
                </div>

            </div>
            <div className="deal h-[350px] bg-white drop-shadow-2xl rounded-xl">
                <div className='relative h-[60%]'>
                <img src={house9} alt="" className='w-full h-full object-cover rounded-t-xl'/>
                <div className='absolute top-0 right-0 p-4'>
                    <BsSuitHeart size={"1.5rem"} className="text-white"/>
                </div>
                </div>
                <div className='p-4 space-y-4'>
                <div className='flex space-x-5 items-center'>
                    <div className='flex items-center space-x-1'>
                        <IoBedOutline/>
                        <p className='text-sm text-gray-400'>4 bed</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                       <GiBathtub/>
                       <p className='text-sm text-gray-400'>2 bat</p>
                    </div>
                    <div className='flex items-center space-x-1'>
                     <GiHomeGarage/>
                        <p className='text-sm text-gray-400'>1 gar</p>
                    </div>
                </div>
                <h1 className='text-2xl font-semibold'>$98,000</h1>
                <div className='flex items-center space-x-2'>
                <IoLocationOutline/>
                <p className='text-sm text-gray-600'>Port-au-Prince,, Haiti</p>
                </div>
                </div>

            </div>
        </div>
        <div className='w-full flex justify-center py-5'>
        <button className='bg-yellow-200 px-5 py-2 rounded-md text-xl flex items-center space-x-2'><span>View More</span> <AiOutlineDoubleRight/></button>
        </div>
    </div>
  )
}

export default NewestDeals