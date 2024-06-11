import { useDispatch } from "react-redux";
import { setSignInOpen } from "../utils/sidebarSlice";

function InputLabel({ type, labelId, placeholder }) {
    return (
        <label
            className="flex flex-col gap-1 font-semibold mb-3 capitalize" htmlFor={labelId}>{type}
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

                            <InputLabel type="email" labelId="email-input" placeholder="john@email.com" />

                            <InputLabel labelId="password-input" type="password" placeholder="enter password" />


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