// the sign in sign up buttons in the nav

const SignButtons = ({ screenSize }) => {
  return (
    <ul className="flex items-center hidden space-x-8 lg:flex">
      <li>
        <a
          href="/"
          aria-label="Sign in"
          title="Sign in"
          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
        >
          Sign in
        </a>
      </li>
      <li>
        <a
          href="/"
          className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
          aria-label="Sign up"
          title="Sign up"
        >
          Sign up
        </a>
      </li>
    </ul>
  );
};

export default SignButtons;