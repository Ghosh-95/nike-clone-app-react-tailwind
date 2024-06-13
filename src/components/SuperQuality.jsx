import { shoe8 } from "../assets/images";
import Button from "./Button";


export default function SuperQuality() {
    return (
        <section className="padding">
            <h2 className="hidden">SuperQuality</h2>

            <section id="about-us" className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container">
                <article className="flex flex-1 flex-col">

                    <h2 className="mt-5 text-4xl font-bold font-palanquin lg:max-w-lg">
                        We provide you
                        <span className="text-coral-red"> Super</span>
                        <span className="text-coral-red "> Quality</span> Shoes
                    </h2>
                    <p className="mt-4 info-text lg:max-w-lg">
                        Ensuring premium comfort and style, our meticulously crafted footware is designed to elevate your experience, providing you with unmatched quality, innovation and a touch of excellence.
                    </p>
                    <p className="mt-6 info-text lg:max-w-lg">Our dedication to details and comfort ensures your ultimate satisfaction </p>
                    <div className="mt-11">
                        <Button label="Explore" />
                    </div>
                </article>

                <figure className="flex justify-center items-center flex-1">
                    <img src={shoe8}
                        alt="colorful shoe image"
                        width={570}
                        height={522}
                        className="object-contain"
                    />
                </figure>
            </section>
        </section>
    )
}