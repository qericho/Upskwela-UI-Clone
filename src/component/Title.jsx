
const Title = ({ title, desc, className }) => {
    return (
        <div>
            <div className="pt-5 ">
                <h2 className={`${className} mb-4 text-center text-3xl font-bold `}>
                    {title}</h2>
                <p className={`${className} mb-12 text-center text-lg max-w-[800px] mx-auto`}>
                    {desc}
                </p>
            </div>
        </div>
    )
}

export default Title