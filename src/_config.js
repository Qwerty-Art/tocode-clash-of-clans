export const process = {
  div: true,
};

export const site = {
  home: process.dev ? 'http://localhost:8080/' : 'http://test.ru'
}

export const app = {
  title: 'Clash of Clans',
}

export const links = [
  {
    title: 'Home',
    alias: 'home',
    url: '/'
  },
  {
    title: 'About',
    alias: 'about',
    url: '/about'
  },
]