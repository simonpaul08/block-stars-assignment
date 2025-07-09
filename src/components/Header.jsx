import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='w-full bg-blue-400'>
            <div className="max-w-[1200px] mx-auto py-6 flex justify-between items-center px-4">
                <Link to={"/"} className='text-[25px] text-white cursor-pointer font-bold'>Home</Link>

                <div className='flex items-center'>
                    <Link to={"/about"} className='text-[18px] text-white/80 cursor-pointer hover:text-white/100 mx-4'>About</Link>
                    <Link to={"/head&tail"} className='text-[18px] text-white/80 cursor-pointer hover:text-white/100'>Head & Tail</Link>
                </div>
            </div>
        </div>
    )
}

export default Header