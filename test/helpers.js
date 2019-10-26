const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Karan Ahuja',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Karan Ahuja',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Karan Ahuja',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Karan Ahuja',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Karan Ahuja',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
