import HeroSvg from '/public/hero.svg';
import Image from 'next/image';
import logo from '/public/logo.svg';

export default function Hero() {


    return (
        <div className="relative bg-blue text-black py-20 px-4 h-[85vh] flex justify-center border-b border-primary">

            {/*background*/}
            <div className="absolute inset-0 overflow-hidden">
                <Image src={HeroSvg} alt="Hero background" layout="fill" objectFit="cover" />
            </div>


            <div className="relative max-w-6xl mx-auto md:grid grid-cols-2">
                    <div>
                        <Image src={logo} alt="Tulsi Tech Labs" width={400} height={50} />
                        <h1 className="text-5xl font-rhod my-4">We build and grow <br/><span className="text-primary">digital products.</span></h1>
                        <p className="text-xl mb-8">At Tulsi Tech Labs, we craft innovative digital products that drive success and transform industries.</p>
                        <a href='#contact'><button className="bg-green-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition duration-300">Join us</button></a>
                    </div>
                </div>
            
        </div>
    )
}