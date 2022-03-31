import React from "react";
import { Link } from "react-router-dom";
import { PathStrings } from "../../lib/urls";

const Home: React.FC = () => (
  <div>
    <Link to={PathStrings.AUTH as unknown as string}>auth</Link>
    <p>home</p>
  </div>
);

export default Home;
