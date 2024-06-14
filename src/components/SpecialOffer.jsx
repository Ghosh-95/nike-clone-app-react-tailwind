import { arrowRight } from "../assets/icons";
import { offer } from "../assets/images";
import Button from "./Button";

export default function SpecialOffer() {
    return (
        <section className="padding">
            <h2 className="hidden">Special Offer</h2>

            <section className="flex justify-center items-center max-xl:flex-col-reverse gap-10 max-container">
                <figure className="flex-1">
                    <img src={offer} alt="multiple shoe images" width={773} height={687} className="object-contain w-full" />
                </figure>
                <article className="flex flex-1 flex-col">

                    <h2 className="mt-5 text-4xl font-bold font-palanquin lg:max-w-lg">
                        <span className="text-coral-red">Special </span>
                        Offer
                    </h2>
                    <p className="mt-4 info-text lg:max-w-lg">
                        Embark on a shopping journey that redefines your experience with unbeatable deals. From premium selections to incredible savings, we offer unparalleled value that set us apart.
                    </p>
                    <p className="mt-6 info-text lg:max-w-lg">Navigate a realm of possibilities designed to fulfill your unique desires, surpassing the loftiest expectations. Your journey with us is nothing short of exceptional.</p>
                    <div className="mt-11 flex flex-wrap gap-6">
                        <Button label="View Details" iconURL={arrowRight} />

                        <Button label="Learn more" className="bg-transparent border-gray-400 text-slate-gray" />
                    </div>
                </article>
            </section>
        </section>
    );
};