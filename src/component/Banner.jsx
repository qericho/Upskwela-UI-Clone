import { content } from "../assets/data/content";
import LargeBtn from "./button/LargeBtn";
import Title from "./Title";

const Banner = () => {
    const data = content.banner;
    return (
        <section className="my-10">
            <div
                className="bg-[#15344b] flex flex-col items-center justify-center
                w-[95%] mx-auto h-full lg:h-80 rounded lg:px-0 px-2 py-3"
            >
                <Title
                    title={data.title}
                    desc={data.description}
                    className={"text-[#fff]"}
                />
                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <LargeBtn
                        className={
                            "text-[#15354C] shadow-lg hover:shadow-white/30 bg-[#fff] px-10 py-2 md:py-3"
                        }
                        title={"View Roadmap"}
                    />
                    <LargeBtn
                        className={
                            "px-10 py-2 md:py-3 border border-[#ddd] hover:bg-white/20 text-[#fff]"
                        }
                        title={"Explore Feature"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Banner;
