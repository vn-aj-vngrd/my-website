export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-200 dark:from-inherit max-w-7xl mx-auto flex flex-col items-center justify-center">
      {/* Hero Section */}
      <section className="bg-gray-800 dark:bg-black text-white py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Van AJ Vanguardia</h1>
          <p className="text-lg">Passionate Software Developer</p>
        </div>
      </section>

      {/* About Me Section */}
      <section className="p-8 text-center bg-white dark:bg-zinc-800/30 transition-transform transform hover:scale-105">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-600 dark:text-gray-400">
          I am a passionate software developer with a focus on web development.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
          scelerisque quam ac ex mollis, vel tempor turpis venenatis.
        </p>
      </section>

      {/* Projects Section */}
      <section className="p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project 1 */}
        <div className="bg-white dark:bg-zinc-800/30 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="bg-gray-300 dark:bg-gray-600 h-40 rounded-md mb-4"></div>
          <h2 className="text-xl font-semibold mt-4">Project 1</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Description of Project 1.
          </p>
        </div>

        {/* Project 2 */}
        <div className="bg-white dark:bg-zinc-800/30 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="bg-gray-300 dark:bg-gray-600 h-40 rounded-md mb-4"></div>
          <h2 className="text-xl font-semibold mt-4">Project 2</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Description of Project 2.
          </p>
        </div>

        {/* Project 3 */}
        <div className="bg-white dark:bg-zinc-800/30 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
          <div className="bg-gray-300 dark:bg-gray-600 h-40 rounded-md mb-4"></div>
          <h2 className="text-xl font-semibold mt-4">Project 3</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Description of Project 3.
          </p>
        </div>

        {/* Additional Projects */}
        {/* Add more projects as needed */}
      </section>

      {/* Contact Section */}
      <section className="p-8 text-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">
          {" Let's Connect!"}
        </h2>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="#"
            className="text-blue-500 dark:text-blue-400 hover:underline"
          >
            Meta
          </a>
          <a
            href="#"
            className="text-purple-500 dark:text-purple-400 hover:underline"
          >
            LinkedIn
          </a>
          {/* Add more social media links as needed */}
        </div>
      </section>
    </div>
  );
}
