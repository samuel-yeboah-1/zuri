import './App.css'
import { useTheme } from './hooks/useTheme'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Experiences from './components/Experiences'
import UpcomingTrips from './components/UpcomingTrips'
import Gallery from './components/Gallery'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  // Initialise theme at root — ensures data-theme is set even before ThemeToggle mounts
  useTheme()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Experiences />
        <UpcomingTrips />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
