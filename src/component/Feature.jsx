import FeatureCard from "./card/FeatureCard"
import Title from "./Title"
import { content } from "../assets/data/content";
const Feature = () => {
    const data = content.features;
    return (
        <section>
            <div>
                <Title title={data.title} desc={data.description} />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3
                 place-items-center gap-5 w-full lg:w-[1000px] mx-auto">
                    <FeatureCard />
                </div>
            </div>
        </section>
    )
}

export default Feature