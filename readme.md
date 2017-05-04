# gCoaster Tycoon

This is a project intended to give students an idea of MVC architecture using Node, Express, Knex, and ES6 Classes.


## Getting Started

1. Fork & clone this repository
1. `yarn` or `npm install`
1. `createdb coaster_tycoon_dev`
1. `npm run knex migrate:latest`
1. `npm run knex migrate:seed`
1. To run the server with nodemon, run `npm run dev`


## Existing Code

Currently two routes exist: `/parks` and `/parks/:id`. Look in the `models/`, `controllers/`, and `routes/` folders and answer the following guiding questions:

* That does the `static` keyword do?
* What type of object does `Park.all()` return?
* What does `ctrl` represent in the `routes/parks.js` file?

## Task List

### Step 1

Begin by finishing basic CRUD routes for the park resource. Add relevant view where necessary.

- [ ] Add static methods for all CRUD actions to the model
  ```js
  Park.destroy(id) // deletes the specified park
  Park.create(body) // creates a new park
  Park.update(id, body) // updates the specified park
  ```

- [ ] Add route handlers for all CRUD actions to the controller
  ```js
  function destroy () {} // deletes and redirects to /parks
  function newForm () {} // renders a form to create a new park
  function create () {} // creates and redirects to /parks/:id
  function editForm () {} // renders a populated form to edit an existing park
  function update () {} // updates and redirects to /parks/:id
  ```

- [ ] Add all necessary views

> **Note:** You will not be able to currently delete parks that have any rides associated with them because of the foreign key constraint. For now, ignore this bug.

### Step 2

Create your own model and controller for the **rides** resource and make similar methods and views. The code should be very similar.  :)

- [ ] Add static methods for all CRUD actions to the model

- [ ] Add route handlers for all CRUD actions to the controller

- [ ] Add all necessary views

> **Note:** For now, on the new form allow for a field where you would enter the ID of the associated park. We will update this to be more dynamic moving forward.

### Step 2B (Optional)

These models are _pretty_ similar at this point. What if created a new class called `Resource` that had all the basic CRUD actions on it and our individual models extended from that?

- [ ] Create a `Resource` class that is used by our other models

### Step 3

We're going to now combine the two models we have created in order to add new features:

* On the ride show page we want to provide a link back to the park where it is located.
* On the parks index page we want to show the number of rides that park has.
* On the parks show page, we want to list all the rides at the park with a link to each ones show page.
* Update the parks destroy handler so that we delete rides associated with that park when we delete the park. You will likely need to use `Promise.all()` and/or the Knex.js [whereIn](http://knexjs.org/#Builder-whereIn) method. Alternatively, you can look into the [CASCADE](https://www.postgresql.org/docs/8.2/static/ddl-constraints.html) constraint.
* Update the rides new and edit pages so that the parks are dynamically pulled from the database.


As our views get more complicated, we want our logic for how to render the view to go into the controller.

- [ ] Update the rides `show` handler and view to provide a link to the park the ride is a part of with its name.

- [ ] Update the parks `index` handler and view to also show the number of rides each park listing. You should not need to update the model.

- [ ] Update the parks `show` handler and view to show all the rides for that individual park. Each one should link to a ride show page.

- [ ] Update the parks `destroy` handler so that it deletes all dependent rides for the given park.

- [ ] Update the rides `new` and `edit` handler so that it pulls a list of parks from the database.
