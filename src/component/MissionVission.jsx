import Title from "./Title"
import { content } from "../assets/data/content"
import MissionCard from "./card/MissionCard";

const MissionVission = () => {
    const data = content.vision;
    const data2 = content.missionSection;

    return (
        <div className="py-10">
            <Title title={data.title} desc={data.description} />
            <div className="relative top-[-80px]">
                <Title title={data2.title} />
                <div className="grid place-items-center w-full lg:w-[1000px] gap-5 mx-auto lg:grid-cols-3 grid-cols-1">
                    {data2.items.map((item, key) => {
                        return (
                            <MissionCard
                                id={key}
                                title={item.title}
                                desc={item.description}
                                number={item.number}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default MissionVission;
