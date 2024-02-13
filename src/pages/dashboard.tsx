export default function Dashboard() {
    return(
        <div className="grid place-items-start h-screen">
            <div className="shadow-lg p-8 bg-zince-300/10 flex flex-col gap-2 my-6">
                <div>
                    Name:<span className="font-bold">Jay</span>
                </div>
                <div>
                    Email:<span className="font-bold">Jay@gmail.com</span>
                </div>
                <button className="bg-red-500 text-white font-bold py-2 px-g mt-3">Logout</button>
            </div>
        </div>
    )
}