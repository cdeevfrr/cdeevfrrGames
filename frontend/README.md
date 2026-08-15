### Frontend organization

The frontend handles login and a landing page that lets users pick which game they want to play.

In the code, each game should be entirely self-contained in its own folder. 

Each game gets to make a single top-level react component which will be a page in the react router, make sure to update App.tsx when making a new game.




# Our (optional) Game design framework:

We have adopted this framework to maximize emergent strategic depth while minimizing software implementation and maintenance complexity.

We organize game concepts into primitives, each with a category, like this:

| **Spatial** | **Temporal** | **Economic** |
| :--- | :--- | :--- |
| Distance, position, AEO, elevation, line-of-sight, directional facing ... | cooldown, duration, rate of fire, cast delay, ...| HP, gold, mana, shield/armor/defense, durability, color/damage type | 

To make a new effect type, combine primitives from two categories. Eg, you can combine duration and HP to have the concept of poison damage. Or, you could combine gold and position to make the monster reward go up further from the base.

To design a game, pick a very _narrow_ set of primitives and intentionally _exclude_ all the others as out-of-scope. Add mechanics and complexity by combining primitives, not adding new primitives. And especially things tradeoffs - as the HP impact increases, the duration decreases, or similar.

This helps create a lot of strategic interactions for players, using a very concise codebase.


## Development
CreateReactApp default readme:

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
