import { Outlet } from 'react-router-dom';
import './home.styles.scss';
import Directory from '../../components/directory/directory';

const Home = () => {
  const categories = [
    {
      id: 1,
      title: 'Weapons',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'Armors',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'Accessories',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'Supplies',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'Decorations',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <div>
      <Outlet />
      <div className="home">
        <Directory categories={categories} />
      </div>
    </div>
  );
};

export default Home;
