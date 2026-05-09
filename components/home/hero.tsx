export default function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900">
        <h1 className="mx-auto max-w-2xl text-center text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Hi, I'm Sijan
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-center text-lg leading-8 text-gray-300">
            A passionate software developer with a knack for crafting elegant solutions to complex problems. With a strong foundation in full-stack development, I thrive on creating seamless user experiences and efficient code. Whether it's building responsive web applications or diving into the intricacies of backend systems, I am dedicated to delivering high-quality results that exceed expectations.
        </p>
        <img    className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center"
                src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                alt="Image of a beach during sunset" />
    </div>
  )
}