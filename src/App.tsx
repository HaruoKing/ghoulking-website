import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Tournaments from '@/components/Tournaments'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

function App() {
  return (
    <div style={{ background: 'hsl(var(--background))' }}>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Tournaments />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
