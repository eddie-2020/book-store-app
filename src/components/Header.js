import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Header = () => {
  const navLinks = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categories',
      text: 'CATEGORIES',
    },
  ];
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        padding: '10px 50px',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          fontFamily: 'cursive',
        }}
      >
        <div>
          <h2>Bookstore CMS</h2>
        </div>
        <nav style={{ margin: 20 }}>
          {navLinks.map((link) => (
            <NavLink
              style={{ margin: 20, textDecoration: 'none' }}
              key={link.path}
              to={link.path}
              className="links"
            >
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <div>
        <ImUser />
      </div>
    </header>
  );
};

export default Header;
