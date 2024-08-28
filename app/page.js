import Image from 'next/image'
import Navbar from './components/navbar'
import Hero from './components/hero'
import About from './components/about'
import Contact from './components/contact'
import Project from './components/project'

export default function Home() {
  return (
    <main className="min-h-screen ">
      <Navbar />
      <Hero />
      <About />
      <Project />
      <Contact />

      <footer className="bg-primary text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Tulsi Tech Labs. All rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
