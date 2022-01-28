import Link from "next/link";

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
        <Link href="/">
          <a
            aria-label="Home"
            title="Home"
            className={tailwindStyles[screenSize].a}
          >
            Home
          </a>
        </Link>
      </li>
      <li>
        <Link href="/patient">
          <a
            aria-label="Patient"
            title="Patient"
            className={tailwindStyles[screenSize].a}
          >
            Patient
          </a>
        </Link>
      </li>
      <li>
        <Link href="/datasets">
          <a
            aria-label="Institution"
            title="Institution"
            className={tailwindStyles[screenSize].a}
          >
            Datasets
          </a>
        </Link>
      </li>
    </ul>
  );
};

export default PagesList;
