export default function ShoeCard({ imageUrl, changeBigShoeImg,
    bigShoeImg }) {


    function handleClick() {
        if (bigShoeImg !== imageUrl.bigShoe) changeBigShoeImg(imageUrl.bigShoe);
    }
    return (
        <div className={`border-2 rounded-xl ${bigShoeImg === imageUrl.bigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
            onClick={handleClick}
        >
            <figure className="flex justify-center items-center bg-card rounded-xl bg-center bg-cover sm:w-40 sm:h-40 max-sm:p-4 max-sm:h-32">
                <img src={imageUrl.thumbnail} alt={imageUrl.thumbnail + ' image'} width={127} height={103} className="object-contain" />
            </figure>
        </div>
    );
};