import React, { useEffect } from "react";
// import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
// import { auth } from "../../firebase/clientApp";
// import { useUser } from "./user-context";
import Header from "./Header";
import Footer from "./Footer";
import { useRouter } from "next/router";
import classNames from "../../src/utils/className";

function Layout({ children }) {
  // Google Auth (needs to be enabled in Firebase Console - https://console.firebase.google.com)
  // const googleAuthProvider = new GoogleAuthProvider();
  // const { user } = useUser();
  const { pathname } = useRouter();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return (
    <div
      className={classNames(
        pathname === "/" ? "bg-home" : "bg-others",
        "min-h-screen w-full bg-no-repeat bg-fixed text-default antialiased font-body text-body sm:text-body-sm lg:text-body-lg"
      )}
    >
      <Header />
      <div className="p-5 min-h-screen max-w-3xl mx-auto">
        {children}
        <Footer />
      </div>
    </div>
  );
}

export default Layout;
