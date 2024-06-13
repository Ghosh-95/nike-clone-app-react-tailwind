export default function PopularProductCard({ imgURL, name, price, rating, offer, originalPrice }) {

    return (
        <>
            <figure className="flex flex-col flex-1 w-full max-sm:w-full">
                <img src={imgURL} alt={name} className="w-[17.5rem] h-[17.5rem]" />
                <div className="flex flex-col justify-start mt-2 max-sm:mt-4 gap-2.5 pl-4">
                    <div className="flex items-center">
                        <i className="fa-solid fa-star text-coral-red mr-1"></i>
                        <span className="text-slate-gray font-montserrat leading-normal">({rating})</span>
                        <i className="fa-solid fa-cart-plus ml-auto text-coral-red text-xl cursor-pointer mr-4 sm:mr-5 max-sm:mr-10 hover:scale-105 transition-all active:text-red-700"></i>
                    </div>

                    <p className="text-lg md:text-xl font-semibold font-palanquin">{name}</p>
                    <div>
                        <p className="text-coral-red max-sm:text-[1.4rem] md:text-2xl">{price} <span className="sm:text-sm font-bold bg-green-500 text-white p-1 rounded-sm">{offer}</span></p>
                        <p className="text-slate-gray line-through font-bold">{originalPrice}</p>
                    </div>
                </div>
            </figure>
        </>
    );
};