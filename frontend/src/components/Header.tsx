import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <h1>
        <Link to="/">Citizens of the world</Link>
      </h1>
    </header>
  );
};

export default Header;
