import React from 'react'

const Home = () => {
  return (
    <section className="h-auto lg:h-[35vh] bg-white text-gray-400">
      <div className="flex flex-col items-center justify-center p-5 space-y-8 lg:space-y-10 text-center">
        <p className="text-2xl font-bold lg:text-4xl">
          Our Zeal to build the better way
        </p>
        <p className="text-base font-light lg:text-3xl leading-relaxed">
          Our method arose from the need to create custom solutions for each situation. <br className="hidden lg:block" />
          We've made a conscious effort to be agile in our operations so that we can <br className="hidden lg:block" />
          <br className="hidden lg:block" />
          create solutions that work.
        </p>
      </div>
    </section>
  )
}

export default Home
