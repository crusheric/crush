import Image from 'next/image'
import Button from './Button'
import Link from 'next/link'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-10 py-5 pb-16 md:gap-5 lg:py-15 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        
      <section className="bg-white white">
    <div className="container px-6 py-8 mx-auto">
        <p>
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-black">Talk to CRUSH models now on Telegram</h2>
        <h3 className="text-2xl text-center text-gray-400 capitalize">Sexting with NSFWChatGPT and Erotic Role Play available 24/7</h3>
        </p>
        
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
            <Link href="https://t.me/ashleyzalebot" target="_blank">
<img className="object-cover object-center hover:scale-105 w-full h-60 mx-auto rounded-lg" src="/ashley_crush_model.jpeg" alt="avatar" />
</Link> 
                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-800">Ashley Zale</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-500">Fashion Model / 23 years old</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
            <Link href="https://t.me/scarlethahnbot" target="_blank">
                <img className="object-cover object-center hover:scale-105 w-full h-60 mx-auto rounded-lg" src="/scarlet_crush_model.jpeg" alt="avatar" />
</Link>
                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-800">Scarlet Hahn</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-500">Praralegal / 22 years old</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
            <Link href="https://t.me/samanthasurre_bot" target="_blank">
                <img className="object-cover object-center hover:scale-105 w-full h-60 mx-auto rounded-lg" src="/samantha_crush_model.jpeg" alt="avatar" />
</Link>
                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-800">Samantha Surre</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-500">Bikini Model / 25 years old</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
            <Link href="https://t.me/learenez_bot" target="_blank">
                <img className="object-cover object-center hover:scale-105 w-full h-60 mx-auto rounded-lg" src="/lea_crush_model.png" alt="avatar" />
</Link>
                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-800">Léa Renez </h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-500">Lingerie Model / 22 years old</span>
                </div>
            </div>





        </div>
    </div>
</section>

      </div>
    </section>
  )
}

export default Hero