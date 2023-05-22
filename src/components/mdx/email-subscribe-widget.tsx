import Image from 'next/image'

const EmailSubscribeWidget = (props: any) => {
  return (
    <div className="grid sm:grid-cols-2 border-2 border-gray-300 rounded-md">
      <div className="flex flex-col prose prose-dark bg-gray-800 w-full p-8">
        <h2 className="text-3xl leading-tight font-bold">
          Ready to pick up the pace?
        </h2>
        <p className="py-2">
          sign up and receive regular updates on our latest articles and courses
        </p>
        <form className="flex flex-col">
          <input type="email"></input>
          <p className="py-2">What are you interested in hearing about?</p>
          <label className="pb-1">
            <input type="checkbox" />
            <span className="pl-2">Articles</span>
          </label>
          <label className="pb-1">
            <input type="checkbox" />
            <span className="pl-2">Courses</span>
          </label>
          <label className="pb-4">
            <input type="checkbox" />
            <span className="pl-2">Learning Paths</span>
          </label>
          <button
            className="bg-blue-600 rounded-md font-semibold p-1"
            type="submit"
          >
            SIGN UP
          </button>
        </form>
      </div>
      <div className="hidden sm:flex sm:flex-col p-6">
        <h2 className="text-3xl leading-tight font-bold">Your time matters.</h2>
        <p className="py-2">
          Our tutorials will respect it and keep you up to date.
        </p>
        <div className="flex flex-col h-full w-full justify-center">
          <div className="flex flex-row justify-center">
            <Image
              width={280}
              height={280}
              src="https://d2eip9sf3oo6c2.cloudfront.net/playlists/square_covers/000/432/490/full/EGH_BeginnersReact2.png"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmailSubscribeWidget
