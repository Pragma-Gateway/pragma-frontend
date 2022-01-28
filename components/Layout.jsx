import Head from "next/head";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

// the nav, sidebar and title (generalized page components) component
const Layout = ({ children, title, className }) => {
  return (
    <>
      <Head>
        <title>Pragma | {title}</title>
      </Head>
      <Sidebar />
      <Topbar />
      <div className={className}>{children}</div>
    </>
  );
};

export default Layout;
