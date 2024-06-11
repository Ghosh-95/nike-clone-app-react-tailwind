import { useDispatch } from "react-redux";
import { setSignInOpen } from "../utils/sidebarSlice";
import { useState } from "react";

export function InputLabel({ type, labelId, placeholder, text }) {
    return (
        <label
            className="flex flex-col gap-1 font-semibold mb-3" htmlFor={labelId}>{text}
            <input
                className={`rounded shadow-sm focus-within:outline-1 focus: outline-red-500 px-2 py-[0.3rem] text-gray-600 font-semibold`}
                type={type} id={labelId}
                placeholder={placeholder}
                required
            />
        </label>
    )
}

export default function ModalSignIn() {
    const dispatch = useDispatch();

    const [isVisible, setVisible] = useState(false);

    return (
        <article
            className={`fixed z-[999] inset-0 backdrop-blur-sm bg-black bg-opacity-30 flex justify-center items-center font-montserrat`}
            id="sign-in-modal"
            onClick={(e) => {
                if (e.target.id === "sign-in-modal") {
                    dispatch(setSignInOpen(false));
                }
            }}>

            <div className="flex flex-col w-[20rem] bg-white rounded">
                <button
                    onClick={() => dispatch(setSignInOpen(false))} className="place-self-end bg-red-700 text-white px-5 rounded-tr">
                    <i className="fa-solid fa-xmark"></i>
                </button>

                <div className="bg-white p-2 rounded">
                    <div className="px-4 pb-4 lg:py-4">
                        <h3 className="text-center text-xl text-gray-900 font-medium">Sign In</h3>

                        <form id="sign-in" action="" className="mt-5 text-sm">

                            <InputLabel type="email" labelId="email-input" text="Email" placeholder="john@email.com" />

                            <div className="relative">
                                <InputLabel labelId="password-input"
                                    text="Password"
                                    type={isVisible ? "text" : "password"}
                                    placeholder="enter password" />

                                <button
                                    className="absolute top-7 right-2"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setVisible(!isVisible);
                                    }}>
                                    {isVisible ? <i
                                        className="fa-regular fa-eye"
                                    ></i> : <i
                                        className="fa-regular fa-eye-slash"
                                    ></i>}

                                </button>
                            </div>


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
                            >Sign In</button>
                        </form>
                        <p className="text-[0.6rem] mt-2 text-center">Terms & Conditions apply*</p>
                    </div>
                </div>
            </div>
        </article>
    );
};