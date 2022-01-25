// the pages for both mobile and desktop that are in the navbar
// screenSize can be either "mobile" or "desktop"

const tailwindStyles = {
  desktop: {
    ul: "flex items-center hidden space-x-8 lg:flex",
    a: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
  },
  mobile: {
    ul: "space-y-4",
    a: "font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400",
  },
};

const PagesList = ({ screenSize }) => {
  return (
    <ul className={tailwindStyles[screenSize].ul}>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className={tailwindStyles[screenSize].a}
        >
          Product
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Our product"
          title="Our product"
          className={tailwindStyles[screenSize].a}
        >
          Features
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="Product pricing"
          title="Product pricing"
          className={tailwindStyles[screenSize].a}
        >
          Pricing
        </a>
      </li>
      <li>
        <a
          href="/"
          aria-label="About us"
          title="About us"
          className={tailwindStyles[screenSize].a}
        >
          About us
        </a>
      </li>
    </ul>
  );
};

export default PagesList;
