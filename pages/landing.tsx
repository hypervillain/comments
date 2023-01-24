function Landing() {

  const fetchApi = () => {
    fetch('/api/youtube')
  }
  return (
    <div className="container mx-auto px-6 py-16 pt-18 text-center">
      <div className="mx-auto max-w-lg flex flex-col align-center">
        <img src="/yt-no-text.svg" width={"20%"} className="mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white md:text-4xl">
          Give Comment, Get Picture
        </h1>
        {/* <h3 className="text-1xl font-bold text-gray-800">(Youtube now, Pornhub later)</h3> */}

        <p className="mt-6 text-gray-500 dark:text-gray-300 text-lg">
          Create high-res pictures of the Youtube comments you love and share them with your friends (or twitter)
        </p>

        <div className="mx-auto mt-6 w-full max-w-lg rounded-md border bg-transparent focus-within:border-blue-400 focus-within:ring focus-within:ring-blue-300 focus-within:ring-opacity-40 dark:border-gray-700 dark:focus-within:border-blue-300">
            <form className="flex flex-col md:flex-row">
            <input type="email" placeholder="Enter youtube comment URL" className="m-1 h-10 flex-1 appearance-none border-none bg-transparent px-4 py-2 text-gray-700 placeholder-gray-400 focus:placeholder-transparent focus:outline-none focus:ring-0 dark:text-gray-200" />
            </form>
        </div>
        <button onClick={fetchApi}>fetch API</button>
      </div>
    </div>
  )     
}

export default Landing