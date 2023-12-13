import Image from 'next/image'
import Link from 'next/link'
import { IoMenuOutline } from 'react-icons/io5'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2'>
      <div>
      <Link href={"/"}><Image src="/logo_marserator.png" alt="logo" width={40} height={40}></Image></Link>
      </div>
      <IoMenuOutline size={30} />
    </div>
  )
}
export default Navbar