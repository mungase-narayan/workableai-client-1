import SiteHeader from './components/header'
import Hero from './components/hero'

const HomePage = () => {
  return (
    <div className='relative min-h-screen bg-cover bg-center bg-no-repeat'
      style={{ backgroundImage: "url('/background.jpg')" }}>
      <div className='absolute inset-0 bg-opacity-40'></div>
      <div className='relative z-10'>
        <Hero />
      </div>
    </div>
  )
}

export default HomePage