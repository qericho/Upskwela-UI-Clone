
const LargeBtn = ({ className, title, icon }) => {
    return (
        <button className={` ${className} rounded font-medium cursor-pointer flex items-center gap-3`}>
            {icon} {title}</button>
    )
}

export default LargeBtn