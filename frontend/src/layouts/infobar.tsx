const Infobar = ({title, children}) => {
    return (
        <div className="flex flex-col w-full justify-start">
            <div className="flex bg-[#1d3557] flex-none w-full h-20 justify-between items-center px-6">
                <div className="flex flex-col gap-1">
                    <h2 className="text-2xl font-bold">{title}</h2>
                </div>
            </div>
            {children}
        </div> 
    )
}

export default Infobar
