<h1 align="center">
  Pokédex
</h1>

<p align="center">
  <a href="#-about-the-project">About the project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
</p>

## 👨🏻‍💻 About the project

Based on the [figma design](https://www.figma.com/design/93B3kixUybydmxNFU3ByQ2/Pok%C3%A9dex-(Community)-(Copy)?node-id=314-3&t=g4in5Iw1ypMcQbKZ-0) created by Ricardo Schiniegoski

You can see the frontend working on production [here](https://pokedex-pied-chi.vercel.app/)

This project was developed following the figma design mentioned above, but since this design It's for a mobile version, I decided to code the project with a "mobile first" approach, and then just adapt the interface for desktop later. 

I ended up running out of time to fully implement a completely responsive and adaptive interface, so the interface looks really nice on mobile, but It's a little janky on desktop.

The project currently returns a list of every pokemon, so it may take a while before everything appears.
Fortunately cache is implemented, so the application doesn't need to do unnecessary api requests everytime.

### features
  - users can see a list of every pokemon
  - users can search for a specific pokemon (user need to type a valid pokemon name on searchBar and hit the button)
  - users can see detailed information about a specific pokemon
  - users can see the sum of all the base stats

## 🚀 Technologies

Technologies that I used to develop this web client

- [ReactJS](https://react.dev/)
- [Vite](https://vitejs.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [React Router DOM](https://reactrouter.com/en/main)
- [Material Design](https://mui.com/)
- [Pokenode-ts](https://pokenode-ts.vercel.app/)

## 💻 Getting started

### Requirements

**Clone the project and access the folder**

```bash
$ git clone https://github.com/stelianok/pokedex && cd pokedex
```

**Follow the steps below**

```bash
# Install the dependencies
$ npm i

# Running the application
$ npm run dev
```

