
const Status = () => {
    return (
        <div className="text-center w-full mb-10">
            <h4 className="mb-5 text-sm font-medium uppercase tracking-wider text-[var(--color-secondary)]">PLATFORM STATUS</h4>
            <ul className="grid grid-cols-4 place-items-center py-4 mx-auto max-w-[600px]">
                <li className="text-[var(--color-pri)] flex flex-col items-center space-x-3 text-3xl font-bold">
                    Live
                    <span className="text-sm font-normal text-[var(--color-secondary)]">Beta Version</span>
                </li>
                <li className="text-[var(--color-pri)] flex flex-col items-center space-x-3 text-3xl font-bold">
                    607
                    <span className="text-sm font-normal text-[var(--color-secondary)]">Active Users</span>
                </li>
                <li className="text-[var(--color-pri)] flex flex-col items-center space-x-3 text-3xl font-bold">
                    54
                    <span className="text-sm font-normal text-[var(--color-secondary)]">Communities</span>
                </li>
                <li className="text-[var(--color-pri)] flex flex-col items-center space-x-3 text-3xl font-bold">
                    16
                    <span className="text-sm font-normal text-[var(--color-secondary)]">Courses</span>
                </li>
            </ul>

        </div>
    )
}

export default Status