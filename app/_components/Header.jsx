import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

const Header = () => {
  return (
    <div className=' flex justify-between p-5 shadow-md'>
      <Image src={'/file.svg'} width={80} height={80} alt='logo'/>
      <Button>Get Started</Button>
    </div>
  )
}

export default Header
