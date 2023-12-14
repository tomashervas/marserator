import Image from 'next/image'
import Link from 'next/link'
import { IoMenuOutline } from 'react-icons/io5'
import IconButton from './IconButton'
import NavMenu from './NavMenu'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center p-2'>
      <div>
      <Link href={"/"}><Image src="/logo_blanco.png" alt="logo" width={40} height={40}></Image></Link>
      </div>
      <NavMenu />
    </div>
  )
}
export default Navbar