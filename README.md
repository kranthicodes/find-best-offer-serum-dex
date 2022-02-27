
# Find best offer from the order book of serum dex
 A React JS web app to find best offer from the order book of serum dex with support to select Bid or Ask or Both and to enter desired Asset size filter.


## Technologies in use

- [ReactJS](https://reactjs.org/) - UI Library
- [@project-serum/serum](https://www.npmjs.com/package/@project-serum/serum) - Orderbook Data and Markets
- [@solana/web3.js](https://www.npmjs.com/package/@solana/web3.js) - Connection
- [styled-components](https://styled-components.com/) - Components Styling
- [zustand](https://zustand-demo.pmnd.rs/) - State management
- [immer](https://immerjs.github.io/immer/) - Immutability for state management
- [ViteJS](https://vitejs.dev/) - Next gen frontend build tool
- [Cypress](https://www.cypress.io/) - Test runner
- [react-select](https://react-select.com/) - Flexible select input control
- [Yarn](https://yarnpkg.com/) - Npm runner


## Working with this project

1. Clone this repository

2. Install the dependencies 

   `yarn install`
   
3. Start the ViteJS server in dev mode

    `yarn dev`
    
4. Build the project in production mode

    `yarn build`


That's it, you are all set!



## Project Structure

Breaking down the basic structure and the configurations

```bash
├── cypress
│   ├── downloads
│   ├── e2e                 # Current test cases folder
│   │   └── bestoffer.js    # Module test cases
│   ├── fixtures
│   │   └── example.json
│   ├── plugins
│   │   └── index.js
│   └── support
│       ├── commands.js
│       └── index.js
├── src
│   ├── App.jsx     # App layout wraps module here
│   ├── AppProviders.jsx    # Component to provide global level things separate from App
│   ├── main.jsx    # React App Entry point 
│   └── modules
│       ├── bestoffer   # Best Offer Module
│       │   ├── BestOffer.container.jsx  # Module entrypoint
│       │   ├── BestOffer.view.jsx  # Module View layer
│       │   ├── api  # Store and business logic
│       │   │   ├── orderBookHelpers.js
│       │   │   └── store.js
│       │   ├── components
│       │   │   ├── OfferResult.jsx  # Final Best offer result UI 
│       │   │   ├── OrderSideFilter.jsx  # Bid / Ask filter UI
│       │   │   ├── PairInput.jsx  # Asset pair selection UI
│       │   │   ├── index.js  # Export of all components
│       │   │   └── styled.js  # Styled components for the module
│       │   ├── hooks
│       │   │   ├── useBestOffer.js  # Gets the best offer from order book of serum dex
│       │   │   └── useMarkets.js  # Gets the assets data for market address and program address
│       │   ├── index.js  # Exports container as module
│       │   └── utils
│       │       ├── constants.js  # Module constants
│       │       ├── context.js  # Module context for provider pattern
│       │       └── iterableHelpers.js  # Helper util to work with bid or ask iterables
│       └── common  # Common Module
│           ├── components
│           │   ├── GlobalStyles.js  # App level global styles (eg: font-family)
│           │   └── Layout.js  # App level Layouts (Row, Col)
│           ├── index.js  # Exports common components as module
│           └── utils
│               └── constants.js  # Screen size and devices for media-queries
├── Instructions.md  # Task instructions
├── README.md  # Workspace-wide information. shown in github
├── cypress.json    #Cypress configuration
├── index.html      # Html template
├── jsconfig.json   # Common javascript configuration
├── package.json    # Common dev deps and workspace-wide scripts
├── .eslintrc.js  # Eslint (linter) configuration
├── .gitignore  # Github's default node gitignore
├── .prettierignore  # prettier ignored directories/files
├── vite.config.js  # ViteJS configuration
├── vite.config.js  # ViteJS configuration
├── vite.config.js  # ViteJS configuration
├── vite.config.js  # ViteJS configuration
└── yarn.lock  # Lock file of the repo.
```

## Testing

Test runner is [Cypress](https://cypress.io/).
To run tests with dev server:

  `
  yarn test:e2e:dev
  `

## Linting, Formatters and Ethics

Tools being used:
- [Prettier](https://github.com/prettier/prettier) - Opinionated Code Formatter.
- [ESlint](https://github.com/eslint/eslint) - Static code analysis tool for identifying and reporting problematic patterns found in JavaScript code.

*** 
