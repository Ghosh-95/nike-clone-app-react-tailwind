import { Fragment, useState } from "react";
import { arrowRight } from "../assets/icons";
import { bigShoe1 } from "../assets/images";
import { shoes, statistics } from "../utils/contants";
import Button from "./Button";
import ShoeCard from "./ShoeCard";

export default function Hero() {

    const [bigShoe, setBigShoe] = useState(bigShoe1);

    return (
        <section className="xl:padding-l wide:padding-r padding-b">
            <h2 className="hidden">Section Wrapper</h2>

            <section id="hero"
                className="flex xl:flex-row flex-col justify-center gap-10 min-h-screen w-full max-container p-2">
                <div className="relative w-full xl:w-2/5 flex flex-col justify-center items-start pt-28 max-xl:padding-x">
                    <p className="text-xl text-coral-red font-montserrat">The summer collection</p>
                    <h1 className="mt-10 text-8xl font-bold font-palanquin max-sm:text-[4.5rem] max-sm:leading-[4.5125rem]">
                        <span className="xl:bg-white xl:whitespace-nowrap z-10 relative pr-8">The New Arrival</span>
                        <br />
                        <span className="text-coral-red inline-block mt-2">Nike</span> Shoes
                    </h1>
                    <p className="text-slate-gray font-montserrat mt-6 mb-14 leading-8 sm:max-w-sm text-lg">
                        Discover stylish Nike arrivals, quality comfort and innovation for your healthy and active life.
                    </p>
                    <Button label="Shop now" iconURL={arrowRight} />

                    <article className="flex justify-start items-start flex-wrap mt-20 w-full gap-16">
                        {statistics.map(stat => (
                            <div key={stat.label}>
                                <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
                                <p className="text-slate-gray font-montserrat leading-7">{stat.label}</p>
                            </div>
                        ))}
                    </article>
                </div>

                <article className="flex flex-1 justify-center items-center relative xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                    <img src={bigShoe} alt="shoe image" width={610} height={500} className="relative object-contain z-10" />

                    <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[calc(23%-5rem)] max-sm:px-6">
                        {shoes.map(shoe => (
                            <Fragment key={shoe.bigShoe}>
                                <ShoeCard
                                    imageUrl={shoe}
                                    changeBigShoeImg={(newShoe) => setBigShoe(newShoe)}
                                    bigShoeImg={bigShoe}
                                />
                            </Fragment>
                        ))}
                    </div>
                </article>
            </section>
        </section>
    )
}