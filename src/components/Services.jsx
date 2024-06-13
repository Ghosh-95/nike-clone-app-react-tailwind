import { services } from "../utils/contants";
import ServiceCard from "./ServiceCard";

export default function Services() {
    return (
        <section className="padding-x py-10">
            <h2 className="hidden">Services</h2>

            <section className="max-container flex justify-center flex-wrap gap-9">
                {services.map(service => (
                    <ServiceCard key={service.label} {...service} />
                ))}
            </section>


        </section>
    );
};