import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <>
      <header>
        <h1>Courses</h1>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};
