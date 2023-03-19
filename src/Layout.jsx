import { NavLink, Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        {/* <NavLink onClick={"Main page"} to="/">
          Main page
        </NavLink> */}
        <h1>Courses</h1>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
