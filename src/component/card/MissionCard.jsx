const MissionCard = ({ id, title, desc, number }) => {
    return (
        <div
            key={id}
            className="w-full lg:w-[310px] h-[160px] flex flex-col justify-center p-5 relative space-y-4 shadow-xs"
        >
            <h4 className="font-semibold tracking-tight text-lg text-[var(--color-secondary)] w-full lg:w-[200px]">
                {title}
            </h4>
            <p className="text-md text-[var(--color-secondary)] w-full lg:w-[240px]">
                {desc}
            </p>
            <span className="text-9xl font-bold absolute top-0 right-[-5px] text-[var(--color-fade)]">
                {number}
            </span>
        </div>
    );
};

export default MissionCard;
