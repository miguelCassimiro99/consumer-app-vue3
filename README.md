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

As we define a simple screen to display a customers table data, we can start to fetch these customers to create the CRUD.
I'm currently using the json-server because it's a little test but it can be made using advanced features as:

- Supabase to auth and Customer List
- Define the API URL by environment, so we can use the API of development and set the env for production mode

### Customer

The Customer Form contains all the data to create or edit a new customer using the same Form Component and sharing the data alongside the application (onWorkingCustomer)
Then, I put a multiselect component to add new products to these customer. You can only add active products

### Product

The Product Form only contains the name and option to activate or not.
To minimize the number of view (or screens) I decided to keep it more simple and on the customer's form you can also add the product.
