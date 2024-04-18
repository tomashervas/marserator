"use client"

import { useStore } from "@/hooks/useStore"

interface DigitProps extends React.HTMLAttributes<HTMLDivElement>{} 

const DigitResult = ({children, ...props }: DigitProps) => {

  const { isVisibleKey} = useStore(state => state)

  return (

      <div {...props} className={`m-1 p-2 text-xl text-center min-w-[44px] bg-white bg-opacity-20 ${isVisibleKey && 'animate-pulse'} rounded-md`}>{children}
      </div>
  )
}
export default DigitResult