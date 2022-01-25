const CardFeature = ({ feature, color }) => (
  <li className="flex items-center">
    <div className="mr-2">
      <svg
        className="w-4 h-4 text-deep-purple-accent-400"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLidth="2"
      >
        <polyline fill="none" stroke="currentColor" points="6,12 10,16 18,8" />
        <circle cx="12" cy="12" fill="none" r="11" stroke="currentColor" />
      </svg>
    </div>
    <p className={`font-medium ${color}`}>{feature}</p>
  </li>
);

const LandingCard = ({ use, color, price, features, subtext }) => (
  <div className="flex flex-col justify-between p-5 bg-white border rounded shadow-sm">
    <div className="mb-6">
      <div className="flex items-center justify-between pb-6 mb-6 border-b">
        <div>
          <p className="text-sm font-bold tracking-wider uppercase">{use}</p>
          <p className="text-5xl font-extrabold">{price}</p>
        </div>
        <div className="flex items-center justify-center w-24 h-24 rounded-full bg-blue-gray-50">
          <svg
            className="w-10 h-10 text-gray-600"
            viewBox="0 0 24 24"
            strokeLinecap="round"
            strokeLidth="2"
          >
            <path
              d="M12,7L12,7 c-1.657,0-3-1.343-3-3v0c0-1.657,1.343-3,3-3h0c1.657,0,3,1.343,3,3v0C15,5.657,13.657,7,12,7z"
              fill="none"
              stroke="currentColor"
            />
            <path
              d="M15,23H9v-5H7v-6 c0-1.105,0.895-2,2-2h6c1.105,0,2,0.895,2,2v6h-2V23z"
              fill="none"
              stroke="currentColor"
            />
          </svg>
        </div>
      </div>
      <div>
        <p className="mb-2 font-bold tracking-wide">Features</p>
        <ul className="space-y-2">
          {features.map((feature, i) => (
            <CardFeature color={color} feature={feature} key={i} />
          ))}
        </ul>
      </div>
    </div>
    <div>
      <a
        href="/"
        className="inline-flex items-center justify-center w-full h-12 px-6 mb-4 font-medium tracking-wide text-white transition duration-200 bg-gray-800 rounded shadow-md hover:bg-gray-900 focus:shadow-outline focus:outline-none"
      >
        Start for {price}
      </a>
      <p className="text-sm text-gray-600">{subtext}</p>
    </div>
  </div>
);

const Landing = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            Brand new
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="ace59d72-08d5-4850-b9e4-d9d0b86c0525"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#ace59d72-08d5-4850-b9e4-d9d0b86c0525)"
                width="52"
                height="24"
              />
            </svg>
            <span className="relative">Advance research together.</span>
          </span>{" "}
          Own your data.
        </h2>
        <p className="text-base text-gray-700 md:text-lg">
          We allow people to monitize their data and give them the freedom to
          sell it to people who are looking to do analytical research on it.
        </p>
      </div>
      <div className="grid max-w-md gap-10 row-gap-5 sm:row-gap-10 lg:max-w-screen-md lg:grid-cols-2 sm:mx-auto">
        <LandingCard
          color="text-gray-800"
          use="Patient Use"
          price="Free"
          features={[
            "Access to personal data",
            "View and edit your data",
            "Profit from your data",
            "Data connect platform",
          ]}
          subtext="Any questions, contact us for more info!"
        />

        <LandingCard
          color="text-deep-purple-accent-400"
          use="Institution Use"
          price="N/A"
          features={[
            "Customize datasets",
            "Use machine learning without liability",
            "Faster acceptance rates",
            "Cheaper data",
          ]}
          subtext="Any questions, contact us for more info!"
        />
      </div>
    </div>
  );
};

export default Landing;
