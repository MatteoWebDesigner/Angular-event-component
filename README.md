# angular-event-component
use Angular 1.5 component feature + RxJs

# start server
> npm start
> npm run-script start-db
> npm run-script start-debugger
> node-inspector

# build
> gulp

# CSS Architecture
Folder structure product oriented.
Separate Vendor from App.
Going in order the CSS name class applied are:
vendor-style, tag element style, ECSS, ATOMIC CSS.

// VENDOR
    * Vendor
    * Extension

// APP
    // Core
    * Setting
    * Tool
    
    * Base
    * Object
    * Component

    // Module
    * Product
        * Section
        * Component

    // Core
    * Trump

# project requirement
Movie list page,
Movie Profile page
Admin movie list
Admin add/edit movie

Create SPA
Admin search feature (title)
Admin filter feature (sort new-old, country, year)

Sign up modal
JWT
Auth
lazy load


# Tech task:
- create UI with HTML and CSS
- create component with Angular 1.5
- communicate with RxJs
- create Jasmine test and Protractor test
- create SPA
- API with Node
- get data from MongoDB