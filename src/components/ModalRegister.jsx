import { useDispatch } from "react-redux";
import { setRegisterOpen } from "../utils/sidebarSlice";
import { InputLabel } from "./ModalSignIn";

export default function ModalRegister() {
    const dispatch = useDispatch();
    return (
        <article
            className={`fixed z-[999] inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex justify-center items-center font-montserrat`}
            id="register-modal"
            onClick={(e) => {
                if (e.target.id === "register-modal") {
                    dispatch(setRegisterOpen(false));
                }
            }}>

            <div className="flex flex-col w-[20rem] bg-white rounded">
                <button
                    onClick={() => dispatch(setRegisterOpen(false))} className="place-self-end bg-red-700 text-white px-5 rounded-tr">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="bg-white p-2 rounded">
                    <div className="px-4 pb-4 lg:py-4">
                        <h3 className="text-center text-xl text-gray-900 font-medium">Register</h3>

                        <form id="sign-in" action="" className="mt-5 text-sm">

                            <InputLabel labelId="name-input" type="text" text="Name" placeholder="enter full name" />

                            <InputLabel type="email" text="Email" labelId="email-input" placeholder="john@email.com" />

                            <InputLabel labelId="password-input" type="password" text="Password" placeholder="enter password" />

                            <div className="flex items-center">
                                <input
                                    id="remember-me" type="checkbox"
                                    className="w-4 h-4"
                                />
                                <label htmlFor="remember-me"
                                    className="ms-2">
                                    Remember me
                                </label>
                            </div>

                            <button
                                className="bg-red-500 text-white px-4 py-1 mt-3 w-full rounded font-semibold"
                            >Register</button>
                        </form>
                        <p className="text-[0.6rem] mt-2 text-center">Terms & Conditions apply*</p>
                    </div>
                </div>
            </div>
        </article>
    );
};