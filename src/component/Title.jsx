
const Title = ({ title, desc }) => {
    return (
        <div>
            <div className="pt-20 ">
                <h2 className="mb-4 text-center text-3xl font-bold text-[var(--color-secondary)] ">
                    {title}</h2>
                <p className="mb-12 text-center text-lg text-[var(--color-secondary)] max-w-[1000px] mx-auto">
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Title