import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      {/* router link digunakan untuk berpindah halaman */}
      <Link to="/">Welcome!</Link>
    </div>
  );
};

export default Home;
