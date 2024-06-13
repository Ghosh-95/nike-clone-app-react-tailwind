export default function Button({ label, iconURL }) {
    return (
        <button className="flex items-center justify-center gap-4 py-3 font-montserrat leading-none px-6 text-lg bg-coral-red rounded-full text-white border-coral-red active:bg-red-500">
            {label}
            {iconURL && <img
                src={iconURL}
                alt="arrow right icon"
                className="rounded-full h-5 w-5"
            />}
        </button>
    );
};