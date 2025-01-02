export default function Footer() {
    return (
        <footer>

        <section className="md:flex justify-between items-center bg-gray-100 p-8">
        {/* Left side: Logo */}
        <div className="w-1/3">
            <img src="/logo2.png" alt="Tulsi Tech Labs Logo" className="w-48" />
        </div>

        {/* Right side: Contact Details */}
        <div className="w-2/3 text-gray-700 md:text-right">
            <h2 className="text-xl text-gray-400 font-semibold">CONTACT US</h2>
            <p>HN0 14, WD N0 4, Pataudi - 122503 (Haryana)</p>
            <p>Phone Number: <a href="tel:+919499116400" className="text-blue-600">+91 9499116400</a></p>
            <p>E-Mail: <a href="mailto:info@tulsitechlabs.com" className="text-blue-600">info@tulsitechlabs.com</a></p>
        </div>
        </section>

        <div className="bg-primary text-white py-8">
            <div className="container mx-auto px-4 text-center">
            <p>&copy; 2024 Tulsi Tech Labs. All rights reserved.</p>
            </div>
        </div>
      </footer>
    )
}