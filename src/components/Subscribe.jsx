import Button from "./Button";

export default function Subscribe() {
    return (
        <section className="padding-x sm:py-32 py-16 w-full">
            <h2 className="hidden">Subscribe</h2>

            <section className="max-container flex justify-between items-center max-lg:flex-col gap-10" id="contact-us">

                <h3 className="text-4xl leading-[4.25rem] font-bold font-palanquin lg:max-w-md">
                    Sign Up for
                    <span className="text-coral-red"> Updates </span> & Newsletters
                </h3>

                <div className="lg:max-w-[40%] w-full flex items-center gap-5 p-2.5 max-sm:flex-col sm:border sm:border-slate-gray rounded-full">
                    <input type="text" placeholder="nike@subscribe.com" className="input" />
                    <div className="flex items-center max-sm:justify-end max-sm:w-full">
                        <Button fullWidth="" label="Sign Up" />
                    </div>
                </div>

            </section>
        </section>
    );
};