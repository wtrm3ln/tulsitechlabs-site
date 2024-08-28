export default function About() {
    return (
        <div className="py-20">
            <div className="relative bottom-0 max-w-6xl my-20 mx-auto md:grid grid-cols-2 items-center">
                    <div>
                        <h1 className="text-5xl font-rhod mb-4 text-primary">About us</h1>
                        <p className="text-xl mb-8">TulsiTechLabs is a leading IT company specializing in delivering world-class digital products. With a blend of creativity, technology, and strategic thinking, we help businesses thrive in the digital age. From concept to execution, our team is dedicated to making your vision a reality.</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <img src="/about.svg" alt="About TulsiTechLabs" className="max-w-full h-[90vh]" />
                    </div>
            </div>
        </div>
    )
}