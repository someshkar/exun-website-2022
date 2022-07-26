import Image from "next/image";

export default function Hero() {
  return (
    <div className="w-full flex flex-col-reverse md:flex-row justify-between items-center py-40 px-2">
      <div className="flex flex-col items-center md:items-start">
        <h1 className="text-5xl md:text-6xl mt-6 md:mt-0 text-accent font-semibold leading-tight text-center md:text-left">
          Celebrating
          <br /> 30 years of
          <br /> <span className="text-primary">Exun</span>
        </h1>
        <button className="button mt-5 flex">
          Read More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13 7l5 5m0 0l-5 5m5-5H6"
            />
          </svg>
        </button>
      </div>
      <Image src="/hero.png" width={800} height={500} alt="Hero Image" />
    </div>
  );
}