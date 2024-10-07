# Interview app for Klapper / L2C

This is a very basic Expo app.

**Fork the repo**, clone it, create a new branch then install everything with `yarn` and start doing the exercises :

- Every exercise should be a commit.
- Once you've finished, open a Pull Request on the forked repo and send us the link !

Install Expo GO on your smartphone, launch the server with `yarn start` and scan the QR Code to get the app started !

## Create a component

As you can see, the current page is empty and uses 'Button' component :

- Create a custom button component to replace it.
- Design the counter to be more visible.

## Connect press to redux

Currently, pressing the UP and DOWN button doesn't change the counter. Using REDUX, implement actions that will change the value and store it.

## Create a new page with navigation

Create a second page and implement the navigation using REACT NAVIGATION

## Call an API

In the new page, implement a call to an API using [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) and display the result.

You can use https://fakestoreapi.com/ which is already in the constants.ts file or any other API of your choice.
