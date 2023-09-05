# Consumer App Vue

Get Started

```bash
   # Install all dependencies
   yarn

   # Start the application on Dev Mode
   yarn dev
```

### Git Control

```bash
   git flow init
```

### Ideia concept

After setup the project using Vue 3 (installed with Vite), TailwindCSS, I choose the Pinia for State Managment.
Why? Pinia improves the Vuex implementation but at the same time they both are too similar, making easy to work in projects using each one.
These libs for management of the state helps the code to not be a lot of events emmiteds along the Parent Components and Children. You create stores to keep each Entity's logic and actions isolated on one file, making easier to keep, maintain and test.
