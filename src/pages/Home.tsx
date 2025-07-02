import Header from '../components/Header'
import Hero from '../components/Hero'
import Categories from '../components/Categories'
import FeaturedTutors from '../components/FeaturedTutors'
import Stats from '../components/Stats'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedTutors />
        <Stats />
        <Testimonials />
      </main>
      <Footer />
    </>
  )
}