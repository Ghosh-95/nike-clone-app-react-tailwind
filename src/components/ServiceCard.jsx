export default function ServiceCard({ label, imgURL, subtext }) {
    return (
        <div className="flex-1 sm:w-[21.875rem] w-full sm:min-w-[21.875rem] rounded-[1.25rem] shadow-xl px-10 py-16">

            <figure className="w-11 h-11 flex justify-center items-center bg-coral-red rounded-full">
                <img src={imgURL} alt={label + ' image'} />
            </figure>
            <h3 className="mt-5 font-palanquin md:text-3xl text-2xl leading-normal font-bold">{label}</h3>
            <p className="mt-3 break-words leading-normal text-slate-gray font-montserrat">{subtext}</p>
        </div>
    )
}