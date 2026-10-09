import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tournaments from '@/components/Tournaments'
import Services from '@/components/Services'
import WhyGhoulKing from '@/components/WhyGhoulKing'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tournaments />
        <Services />
        <WhyGhoulKing />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
