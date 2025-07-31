import { features } from "../../assets/data/features";

const FeatureCard = () => {
    return (
        <>
            {features.map((item, id) => {
                const Icon = item.icon;
                return (
                    <div
                        key={id}
                        className="group w-full lg:max-w-80 h-70 p-8 
                        hover:-translate-y-2 shadow hover:shadow-xl"
                    >
                        <div className="w-full h-full flex flex-col justify-center gap-y-5">
                            <span
                                style={{ color: "var(--color-pri)" }}
                                className="group-hover:shadow-lg shadow-sky-200  h-[50px] w-[50px] 
                                rounded-lg text-2xl bg-[hsl(207,83%,49%,0.1)] flex items-center justify-center"
                            >
                                <Icon />
                            </span>
                            <h2
                                style={{ color: "var(--color-secondary)" }}
                                className="font-semibold tracking-tight text-xl"
                            >
                                {item.title}
                            </h2>
                            <p
                                style={{ color: "var(--color-secondary)" }}
                                className="text-base leading-relaxed"
                            >
                                {item.description}
                            </p>
                        </div>
                    </div>
                );
            })}
        </>
    );
};

export default FeatureCard;
