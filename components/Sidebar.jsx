import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Hamburger = ({ open, setOpen }) => {
  return (
    <div className="flex text-4xl text-text items-center cursor-pointer fixed left-10 top-8 z-50">
      <div className="relative py-3 sm:max-w-xl mx-auto">
        <nav>
          <button
            className="text-gray-500 w-10 h-10 relative focus:outline-none"
            onClick={() => setOpen(!open)}
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-gray-text transform transition duration-500 ease-in-out ${
                  open ? "rotate-45" : "-translate-y-1.5"
                }`}
              />
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-gray-text transform transition duration-500 ease-in-out ${
                  open ? "opacity-0" : ""
                }`}
              />
              <span
                aria-hidden="true"
                className={`block absolute  h-0.5 w-5 bg-gray-text transform transition duration-500 ease-in-out ${
                  open ? "-rotate-45" : "translate-y-1.5"
                }`}
              />
            </div>
          </button>
        </nav>
      </div>
    </div>
  );
};

const hospitalRoutes = [
  { name: "Health Records", path: "/hospital/records" },
  { name: "My Datasets", path: "/hospital/datasets" },
  { name: "Data Requests", path: "/hospital/requests" },
];

const buyRoutes = [
  { name: "Data Requests", path: "/buyer/requests" },
  { name: "New Dataset", path: "/buyer/newDataset" },
];

const SidebarRoute = ({ path, name }, index) => (
  <Link href={path} key={index}>
    <h3 className="text-xl text-gray-text font-normal uppercase cursor-pointer">
      {name}
    </h3>
  </Link>
);

const Sidebar = () => {
  const { asPath } = useRouter();

  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <>
      <Hamburger open={showSidebar} setOpen={setShowSidebar} />

      <div
        className={`grid grid-rows-[1fr_10fr] place-items-center place-content-center top-0 left-0 w-[90vw] md:w-[23vw] bg-gray-100  p-10 pl-20 text-white fixed h-full z-40  ease-in-out duration-300 ${
          showSidebar ? "translate-x-0 " : "-translate-x-full"
        }`}
      >
        <h3 className="text-4xl text-gray-text font-bold font-el">pragma</h3>
        {/* display different routes if they're a hospital or buying the data  */}
        {console.log(asPath)}
        <div className="space-y-8">
          {asPath.includes("/hospital")
            ? hospitalRoutes.map(SidebarRoute)
            : buyRoutes.map(SidebarRoute)}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
