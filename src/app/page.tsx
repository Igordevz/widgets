import Image from 'next/image'
import styles from './page.module.css'
import Widgets from '@/components/widgets'

export default function Home() {
  return (
    <div className='container-widgets'>
        <Widgets/>
    </div>
  )
}
