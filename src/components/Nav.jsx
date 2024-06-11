import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../utils/contants";
import Sidebar, { ModalButton } from "./Sidebar";
import { useState } from "react";
import { useSelector } from "react-redux";
import ModalRegister from "./ModalRegister";
import ModalSignIn from "./ModalSignIn";

export default function Nav() {
    const signInStatus = useSelector(state => state.sidebar.isSignInOpen);
    const registerStatus = useSelector(state => state.sidebar.isRegisterOpen);


    const [isSidebarOpen, setSideBarOpen] = useState(false);
    return (
        <header className="relative padding-x py-8 w-full">
            <nav className="flex justify-between items-center max-container">
                <a href="/">
                    <img src={headerLogo} alt="nike logo image" width={130} height={29} />
                </a>

                <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
                    {navLinks.map(link => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                className="font-montserrat leading-normal text-md text-slate-gray"
                            >{link.label}</a>
                        </li>
                    ))}
                </ul>
                <ModalButton className={'hidden lg:block'}>Sign In</ModalButton>

                <figure className="md:hidden">
                    <img onClick={() => setSideBarOpen(!isSidebarOpen)} src={hamburger}
                        width={25}
                        height={25}
                        className="cursor-pointer"
                        alt="hamburger-menu" />
                </figure>

            </nav>
            <Sidebar sidebarStatus={isSidebarOpen} setStatus={setSideBarOpen} />

            {registerStatus && <ModalRegister />}
            {signInStatus && <ModalSignIn />}

        </header>
    )
};