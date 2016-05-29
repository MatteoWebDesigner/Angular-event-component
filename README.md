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
    * Setting
    * Tool
    
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

http://flexboxgrid.com/

# Priorities:
- create UI with HTML and CSS
- create component with Angular
- communicate with RxJs
- serve API with Node
- get data from MongoDB
- create Jasmine test and Protractor test