import { reviews } from "../utils/contants";
import ReviewCard from "./ReviewCard";

export default function CustomerReview() {
    return (
        <section className="bg-pale-blue padding">
            <h2 className="hidden">Customer Reviews</h2>

            <section id="customer-review" className="max-container">
                <h3 className="text-center text-4xl font-bold font-palanquin">
                    What our <span className="text-coral-red">People </span>
                    love?
                </h3>
                <p className="info-text text-center m-auto max-w-lg mt-6">Hear what some of our beloved customers are saying about their experience and how much satisfied they are with us.</p>

                <article className="mt-24 flex gap-14 flex-1 justify-center items-center max-xl:flex-col">
                    {reviews.map(review => (
                        <ReviewCard key={review.customerName} {...review} />
                    ))}
                </article>
            </section>
        </section>
    )
}