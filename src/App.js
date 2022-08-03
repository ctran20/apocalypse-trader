import Directory from './components/directory/directory';
import './App.css';

const App = () => {
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

  return <Directory categories={categories} />;
};

export default App;
