import Title from "./Title";
import { content } from "../assets/data/content";
import SocialTags from "./tags/SocialTags";

const Social = () => {
    const data = content.community;
    const icons = content.socialSection.icons;

    return (
        <div className="py-10">
            <Title title={data.title} desc={data.description} />
            <div
                className="w-full md:w-[600px] lg:w-[1000px] mx-auto grid 
                grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-2 lg:gap-x-10 place-items-center"
            >
                <SocialTags items={icons} />
            </div>
        </div>
    );
};

export default Social;
