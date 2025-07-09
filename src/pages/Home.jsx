import { Link } from "react-router-dom"


const Home = () => {
    return (
        <div className='w-full'>
            <div className="max-w-[1200px] mx-auto py-6 flex-col justify-between items-center px-4">
                <h3 className="text-[28px] font-bold text-gray-700 mb-6">Home Page</h3>
                <ul className="w-full">
                    <li className="mb-2">
                        <Link to={"/about"} className="text-gray-500 text-[18px] mb-2 hover:text-blue-400">{"-->"} Go To About Page</Link>

                    </li>
                    <li>
                        <Link to={"/head&tail"} className="text-gray-500 text-[18px] mb-2 hover:text-blue-400">{"-->"} Go To Head & Tail Page</Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Home