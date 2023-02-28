import Link from "next/link"
import Image from "next/image"


const Nave = () => {
    return (
        <div className="flex h-20 justify-around bg-gradient-to-r from-cyan-500 to-blue-500 ">
            <div className="my-auto content-center text-4xl">
                <Link href={'/'}> Event Planner </Link>
            </div>
            <div className="flex gap-8 my-auto content-center justify-between">
                <Link href={'/Services'}>Services</Link>
                <Link href={'/Downloads'}>Downloads</Link>
                <Link href={'/AboutUs'}>About us</Link>
                <Link href={'/ContectUs'}>Contact us</Link>
            </div>
            <div className="flex gap-8 my-auto content-center justify-between">
                <Image src={'/account_circle.png'} width={'30'} height={'30'} alt={' '} />
                <Link href={'/users/SignIn'} >Login</Link>
            </div>
        </div>
    )
}

export default Nave