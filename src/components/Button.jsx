export default function Button({ label, iconURL, className, fullWidth }) {
    return (
        <button className={`flex ${fullWidth && 'w-full'} items-center justify-center gap-4 py-3 font-montserrat leading-none px-6 text-lg border-2 ${className ? className : 'bg-coral-red border-coral-red text-white'} rounded-full active:bg-red-500 active:border-red-500 active:text-white`}>
            {label}
            {iconURL && <img
                src={iconURL}
                alt="arrow right icon"
                className="rounded-full h-5 w-5"
            />}
        </button>
    );
};