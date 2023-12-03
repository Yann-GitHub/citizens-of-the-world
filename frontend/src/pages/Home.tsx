import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>Home page content goes here.</p>
      <Link to="/country">Country</Link>
      <Link to="/all-citizens">All citizens</Link>
    </div>
  );
};

export default Home;
