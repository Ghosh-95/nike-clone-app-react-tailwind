import { products } from "../utils/contants";
import PopularProductCard from "./PopularProductCard";

export default function PopularProducts() {
    return (
        <section className="padding">
            <h2 className="hidden">Popular Products</h2>

            <section className="max-container max-sm:mt-12">
                <article className="flex flex-col justify-start gap-5">
                    <h2 className="text-4xl font-bold font-palanquin">
                        Our
                        <span className="text-coral-red"> Popular</span> Products
                    </h2>
                    <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat">Experience top-notch quality and styles with our outstanding selections. Discover a world of comfort, design and value. </p>
                </article>

                <article className="mt-16 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-16">
                    {products.map(product => (
                        <PopularProductCard key={product.imgURL} {...product} />
                    ))}
                </article>
            </section>
        </section>
    );
};