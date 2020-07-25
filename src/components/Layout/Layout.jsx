import React from "react";

import Navigation from "./Navigation/Navigation";

const Layout = (props) => {
  return (
    <>
      <div>
        <Navigation />
      </div>

      <main>{props.children}</main>
    </>
  );
};

export default Layout;
