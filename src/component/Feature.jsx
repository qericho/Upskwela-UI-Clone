import FeatureCard from "./card/FeatureCard"

const Feature = () => {
    return (
        <section>
            <div>
                <div className="pt-20">
                    <h2 class="mb-4 text-center text-3xl font-bold text-[var(--color-secondary)]">
                        Your path to success starts here</h2>
                    <p class="mb-12 text-center text-lg text-[var(--color-secondary)] max-w-[1000px] mx-auto">
                        Create your own learning community, monetize your expertise, and help others grow. Whether
                        you're a mentor sharing knowledge or a learner seeking skills, Upskwela empowers you to succeed.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                 place-items-center gap-5 w-full lg:w-[1000px] mx-auto">
                    <FeatureCard />
                </div>
            </div>
        </section>
    )
}

export default Feature