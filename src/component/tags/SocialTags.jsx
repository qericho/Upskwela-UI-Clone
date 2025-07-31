const SocialTags = ({ items }) => {
    return (
        <>
            {items.map((item, i) => {
                const Icon = item.icon;
                const isLast = i === items.length - 1;

                return (
                    <div
                        key={i}
                        className={`py-3 px-5 w-full border hover:shadow-md shadow-sky-200 
                        text-[var(--color-dark)] border-[var(--color-fade)] rounded-full 
                        hover:-translate-y-2 cursor-pointer
                        flex items-center justify-center space-x-2 
                        ${isLast ? "col-span-2 lg:col-span-1" : ""}`}
                    >
                        <Icon className="text-xl" />
                        <span className="text-sm font-medium">{item.name}</span>
                    </div>
                );
            })}
        </>
    );
};

export default SocialTags;
