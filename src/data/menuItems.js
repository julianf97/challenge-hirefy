import { 
  faHouse,
  faQuestion,
  faUsers,
  faFile,
  faShapes
} from '@fortawesome/free-solid-svg-icons';

export const menuItems = [
  {
    title: 'Home',
    link: '/',
    icon: faHouse
  },
  {
    title: 'How it works',
    link: '/howitworks',
    icon: faQuestion
  },
  {
    title: 'Marketplace',
    link: '/marketplace',
    icon: faUsers
  },
  {
    title: 'For Talents',
    link: '/fortalents',
    icon: faFile
  },
  {
    title: 'Categories',
    icon: faShapes,
    children: [
      {
        title: 'Lorem Ipsum',
        link: '/category1',
      },
      {
        title: 'Lorem Ipsum',
        link: '/category2',
      },
      {
        title: 'Lorem Ipsum',
        link: '/category3',
        children: [
          {
            title: 'Lorem Ipsum',
            link: '/category4',
          },
          {
            title: 'Lorem Ipsum',
            link: '/category5',
          },
          {
            title: 'Lorem Ipsum',
            link: '/category6',
          },
        ]
      },
      {
        title: 'Lorem Ipsum',
        link: '/category7',
      },
      {
        title: 'Lorem Ipsum',
        link: '/category8',
        children: [
          {
            title: 'Lorem Ipsum',
            link: '/category9',
          },
          {
            title: 'Lorem Ipsum',
            link: '/category10',
          },
        ]
      }
    ]
  }
];