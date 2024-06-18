import { Fragment } from "react";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../utils/contants";

export default function Footer() {
    return (
        <section className="bg-black padding-x padding-t pb-8">
            <h2 className="hidden">Footer</h2>

            <section className="max-container">

                <div className="flex items-start justify-between max-lg:flex-col flex-wrap gap-20">
                    <figure className="flex items-start flex-col">
                        <a href="/">
                            <img src={footerLogo} alt="logo" width={150} height={46} />
                        </a>
                        <p className="mt-10 text-white-400 font-montserrat text-base sm:max-w-sm">Get new shoes ready for the new term at your nearest Nike store. Find your perfect fit in the store & Get rewards.</p>

                        <ul className="flex items-center gap-5 mt-10">
                            {socialMedia.map(social => (
                                <li className="bg-white h-12 w-12 rounded-full grid place-content-center cursor-pointer hover:bg-slate-gray" key={social.alt}>
                                    <img src={social.src} alt={social.alt} width={24} height={24} />
                                </li>
                            ))}
                        </ul>
                    </figure>
                </div>

                <div className="flex flex-1 justify-between flex-wrap gap-20 lg:gap-10 mt-10">
                    {footerLinks.map(itemObj => (
                        <div key={itemObj.title}>
                            <h4 className="text-white text-2xl font-montserrat mb-6 leading-normal font-medium">{itemObj.title}</h4>

                            <ul>
                                {itemObj.links.map(link => (
                                    <li className="text-white mt-3 font-montserrat hover:text-slate-gray text-base leading-normal" key={link.name}>
                                        <a href="">{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center font-montserrat">
                    <p><span className="text-xl">&copy;</span> Copyright. All rights reserved.</p>
                    <p className="hover:text-slate-gray">
                        <a href="">Terms & Conditions</a>
                    </p>
                </div>

            </section>
        </section>
    )
}