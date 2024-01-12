import Image from 'next/image'
import Button from './Button'

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map" />
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        
      <section className="bg-white white">
    <div className="container px-6 py-8 mx-auto">
        <h2 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-black">Talk to CRUSH models now</h2>

        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-60 mx-auto rounded-lg" src="/ashley_crush_model.jpeg" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-800">Ashley Zale</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-500">Fashion Model / 23 years old</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-60 mx-auto rounded-lg" src="/scarlet_crush_model.jpeg" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-800">Scarlet Hahn</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-500">Praralegal / 22 years old</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-60 mx-auto rounded-lg" src="/samantha_crush_model.jpeg" alt="avatar" />

                <div className="mt-2">
                    <h3 className="text-lg font-medium text-gray-700 dark:text-gray-800">Samantha Surre</h3>
                    <span className="mt-1 font-medium text-gray-600 dark:text-gray-500">Bikini Model / 25 years old</span>
                </div>
            </div>

            <div className="w-full max-w-xs text-center">
                <img className="object-cover object-center w-full h-60 mx-auto rounded-lg" src="/lea_crush_model.png" alt="avatar" />

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