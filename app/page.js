import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Contact from './components/contact'
import Project from './components/project'
import Footer from './components/footer'

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Footer />
    </main>
  )
}
