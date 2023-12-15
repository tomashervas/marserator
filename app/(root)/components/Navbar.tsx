import Image from 'next/image'
import Link from 'next/link'
import { IoMenuOutline } from 'react-icons/io5'
import IconButton from './IconButton'
import NavMenu from './NavMenu'
import { cookies } from 'next/headers'

const Navbar = () => {

  const cookieStore = cookies()
  const themeColor = cookieStore.get('theme-color')?.value || '#86efac'
  const image = themeColor?.split('#')[1]

  return (
    <div className='flex justify-between items-center p-2'>
      <div>
      <Link href={"/"}><Image src={`/logo_${image}.png`} alt="logo" width={40} height={40}></Image></Link>
      </div>
      <NavMenu />
    </div>
  )
}
export default Navbar