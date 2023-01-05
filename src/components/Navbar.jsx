// Data
import data from '../data/data.json';
import {useEffect} from "react"
import { Menu, Transition } from '@headlessui/react'

import {logo} from "../assets/index" ;

import AOS from "aos";
import "aos/dist/aos.css";

const Navbar = () => {

    let nav = data.nav

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    
    return ( 
        <nav data-aos="fade-down" data-aos-duration="2000">

            <div className='w-full hidden lg:flex xl:flex flex-col justify-start items-center'>
                <div className="w-full flex flex-row justify-start items-center pt-[2rem] pb-[1.5rem] px-[8rem]">
                    <div>
                        <img src={nav[0].brandLogo || logo} alt="logo" />
                    </div>
                    <div className="flex justify-center pl-[10rem] items-center">
                        {nav[1].navbarLink.map((navitems) => {
                            return(
                                <div key={navitems}>
                                    <a className='cursor-pointer text-white font-dmsan px-4 pb-9 hover:border-b-4 font-normal capitalize text-[18px] '>{navitems}</a>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div className='border-b-2 w-[85%]'></div> 
            </div>

            <div className="w-full flex lg:hidden xl:hidden sm:flex md:flex py-4 px-[2rem] shadow-md text-textColor justify-between">
                <div>
                    <a href="/" className="flex">
                        <img src={logo} alt="logo image" className='w-/2 ' />
                    </a>
                </div>   
                <Menu as="div" className="flex z-50 text-left relative">
                    <Menu.Button>
                    <div className='text-white'>
                        
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                        </svg>

                    </div>
                    </Menu.Button>

                    <Transition
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                    >
                    <Menu.Items className="z-[999] text-secondary shadow-lg absolute right-0 top-10 w-56 origin-top-right divide-y  px-2 rounded-xl bg-violet-500 ring-1 ring-black ring-opacity-5 focus:outline-none" data-aos="zoom-in" data-aos-duration="2000">
                        <Menu.Item>
                            <a href="/register" className="text-sm group flex w-full items-center px-[20px] py-[15px]">Create An Account</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="/login" className="text-sm group flex w-full items-center px-[20px] py-[15px]">Login</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="/about" className="text-sm group flex w-full items-center px-[20px] py-[15px]">About Us</a>
                        </Menu.Item>
                        <Menu.Item>
                            <a href="/github" className="text-sm group flex w-full items-center px-[20px] py-[15px]">Github</a>
                        </Menu.Item>

                    </Menu.Items>
                    </Transition>
                </Menu>         
        </div>
     
        </nav>
     );
}
 
export default Navbar;