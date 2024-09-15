export default function Project() {
    return (
        <div id='product' className="max-w-6xl mx-3 md:mx-auto">
            <div className="md:grid grid-cols-2">
                <div>
                    <h2 className="text-5xl font-rhod text-primary mb-4">Our product</h2>
                    <h3 className="text-xl font-semibold mb-3">Introducing Yaatrip – Revolutionizing the Travel industry</h3>
                    <p className="text-gray-700 mb-4">
                        Discover a revolutionary travel experience with Yaatrip –
                        the all-in-one platform that connects travelers with
                        hotels and social adventures. Manage bookings, explore
                        destinations, and share your journey, all in one place.
                    </p>
                    <a href="https://yaatrip.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-primary mb-6 inline-block">
                        ↗ Explore
                    </a>
                </div>
            </div>
            <div className="rounded-lg w-full flex items-center overflow-hidden h-[500px] bg-gray-100 shadow-lg">
            <img src="/yaatrip.png" alt="Tulsi Tech Labs Logo" className="w-full" />
                
            </div>
        </div>
    )
}