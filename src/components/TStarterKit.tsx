import React from 'react'

const TStarterKit = () => {
  return (
    <>
        {/* Starter UI Only */}
        <section className="text-center">
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
            Project <span className="text-orange-400">Starter</span> <span className="text-sky-500">Kit</span>
          </h1>
          <p className="text-muted-foreground mt-3">
            A clean and minimal foundation to build your next product interface.
          </p>
        </section>

        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="p-6 cursor-pointer rounded-lg bg-muted hover:bg-muted/50 transition-all duration-300"
            >
              <h2 className="text-lg font-semibold">Card {i}</h2>
              <p className="text-sm mt-2 text-muted-foreground">
                Placeholder content for layout demonstration.
              </p>
            </div>
          ))}
        </section>
    </>
  )
}

export default TStarterKit