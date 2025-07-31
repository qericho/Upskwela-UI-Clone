import LargeBtn from "./button/LargeBtn";
import { CiCircleCheck } from "react-icons/ci";
import { LuRocket } from "react-icons/lu";

const flagPH = "https://icons.iconarchive.com/icons/wikipedia/flags/512/PH-Philippines-Flag-icon.png"

export const Hero = () => {
    return (
        <>
            <style>
                {`
                @keyframes slowBounce {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-10px); }
                }
                `}
            </style>

            <section>
                <div className="flex flex-col justify-center items-center space-y-5 h-180 md:h-150">
                    {/* Tagline */}
                    <div
                        style={{
                            animation: "slowBounce 2s infinite ease-in-out",
                            transformOrigin: "center",
                        }}
                        className="space-x-2 relative bg-[hsl(207,83%,49%,0.05)] border flex items-center justify-center border-[#ddd] text-[hsl(207,83%,49%)] px-5 py-3 text-sm font-medium rounded-full"
                    >
                        <span className="font-semibold text-[12px] text-[hsl(202,50%,40%)]">
                            <img className="w-8" src={flagPH} alt="" />
                        </span>
                        <span>Proudly Filipino-founded</span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-4xl text-center font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                        <span className="text-gradient-radiant">Learn, Connect, and Elevate!</span>
                    </h1>

                    {/* Paragraph 1 */}
                    <p className="tracking-tight px-10 mx-auto max-w-[700px] text-[hsl(202,50%,40%)] text-lg md:text-xl text-center">
                        Build and monetize your community or join one. Share your expertise, earn from your courses, and grow with peers.
                    </p>

                    {/* Tagline 2 */}
                    <div className="space-x-2 relative bg-[rgba(23,163,74,0.15)] flex items-center border border-[#ddd] text-[rgb(22,163,74)] px-5 py-3 text-sm font-bold rounded-full">
                        <span className="text-[25px]"><CiCircleCheck /></span>
                        <span>Beta Successfully Launched!</span>
                    </div>

                    {/* Paragraph 2 */}
                    <p className="tracking-tight px-10 mx-auto max-w-[700px] text-[hsl(202,50%,40%)] text-lg md:text-xl text-center">
                        We're live with core features. Check out our roadmap to see what's coming next.
                    </p>

                    {/* Buttons */}
                    <div className="flex-col md:flex-row flex justify-center items-center gap-3 relative top-[20px] md:top-[50px]">
                        <LargeBtn
                            icon={<LuRocket size={20} />}
                            title="View Roadmap"
                            className="px-5 md:px-6 py-3 bg-[hsl(207,83%,49%)] hover:bg-[hsl(207,83%,53%)] text-white"
                        />
                        <LargeBtn
                            title="Explore Features"
                            className="px-5 md:px-7 py-3 bg-white text-[hsl(207,83%,49%)] border border-[hsl(207,83%,49%)]"
                        />
                    </div>
                </div>
            </section>
        </>
    );
};
