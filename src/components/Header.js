import { NavLink } from 'react-router-dom';
import { ImUser } from 'react-icons/im';

const Header = () => {
  const links = [
    {
      id: 1,
      path: '/',
      text: 'BOOKS',
    },
    {
      id: 2,
      path: '/categorie',
      text: 'CATEGORIES',
    },
  ];
  return (
    <header
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 50px',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div>
          <h2 style={{ color: '#007bff' }}>Bookstore CMS</h2>
        </div>
        <nav>
          {links.map((link) => (
            <NavLink style={{ margin: 20, textDecoration: 'none', fontWeight: 700 }} key={link.path} to={link.path} className="links">
              {link.text}
            </NavLink>
          ))}
        </nav>
      </div>
      <div>
        <ImUser className="imUser" />
      </div>
    </header>

  );
};

export default Header;
