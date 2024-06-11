import { navLinks } from "../utils/contants";
import { setSignInOpen, setRegisterOpen } from "../utils/sidebarSlice";
import { useDispatch } from "react-redux";

export function ModalButton({ className, children }) {
    const dispatch = useDispatch();
    return (
        <button onClick={(e) => {
            e.preventDefault();
            children === "Sign In" ? dispatch(setSignInOpen(true)) : dispatch(setRegisterOpen(true));
        }}
            className={`font-montserrat leading-normal text-md text-white rounded-sm bg-red-400 focus:bg-red-500 focus:text-white px-4 font-semibold py-1 ${className ? className : ''}`}>
            {children}
        </button>
    )
}

export default function Sidebar({ sidebarStatus, setStatus }) {
    return (
        <article className={`${!sidebarStatus ? 'hidden' : 'block'} lg:hidden transition-all z-10 min-h-screen bg-transparent fixed top-0 right-0`}>

            <p onClick={() => setStatus(false)} className="cursor-pointer py-1 text-2xl bg-red-500 text-white px-3">
                <i className="fa-solid fa-xmark"></i>
            </p>
            <ul className=" w-[15rem] flex flex-col items-start gap-5 p-4 bg-white shadow-xl min-h-screen">
                {navLinks.map(link => (
                    <li key={link.href}>
                        <a
                            className={`font-montserrat leading-normal text-md text-slate-gray rounded-sm focus:bg-red-500 focus:text-white p-2`}
                            href={link.href}
                        >{link.label}</a>
                    </li>
                ))}
                <li>
                    <ModalButton className="mr-3">Sign In</ModalButton>
                    <ModalButton>Register</ModalButton>
                </li>
            </ul>
        </article>
    )
}