export default function ReviewCard({ customerName, imgURL, rating, feedback }) {
    return (
        <div className="flex justify-center flex-col items-center gap-4">
            <img src={imgURL} alt={customerName + " image"} className="rounded-full object-contain w-[5rem] h-[5rem]" />

            <p className="font-montserrat text-slate-gray leading-5 text-center max-w-sm">{feedback}</p>

            <p>
                <span><i className="fa-solid fa-star text-coral-red"></i></span>
                <span className="ml-2 text-slate-gray font-montserrat">({rating})</span>
            </p>

            <p className="text-xl font-palanquin ">{customerName}</p>

            <span className="text-sm text-blue-400">
                <i className="fa-solid fa-circle-check mr-1"></i>
                Verified customer
            </span>
        </div>
    )
}