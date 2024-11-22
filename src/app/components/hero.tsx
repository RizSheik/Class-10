import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
  return (
    <div className="relative h-[70vh] flex items-center justify-center">
      <Image
        src="/image/cover (1).jpg"
        alt="laptop image is loading....."
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Discover the Perfect Laptop for Every Journey</h1>
        <p className="text-xl mb-8">Explore Powerful Devices Built for Work, Play, and Beyond</p>
        <Link href="/gallery" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300">
          View Gallery
        </Link>
      </div>
    </div>
  )
}

