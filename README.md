# Angular-event-component
Experimenting new CSS architecture, Angular 1.5 component architecture, and RxJs for event base communication.
Node, Express and MongoDB as BackEnd.

# run server services
> npm start  
npm run-script db  
npm run-script debug

# Services fix
database is not running because is lock
> ps -ax | grep mongo  
kill <number>  

# build FE assets
> gulp

# CSS Architecture
Folder structure product oriented.
Separate Vendor and App CSS.
The following flavor are used: vendor-style, tag element style, ECSS, ATOMIC CSS.

## Vendor
* Vendor
* Extension

## App
###### Core
* Setting  
* Tool  
* Base
* Object
* Component

    ###### Module
    * Section  
    * Component  


* Trump


# Project requirement
- Home
- Movie list page,  
- Movie Profile page  
- Admin movie list  
- Admin add/edit movie  

#### Create SPA  
- Admin search feature (title)  
- Admin filter feature (sort new-old, country, year)  

#### Other feature
- Sign up modal  
- JWT  
- Auth  
- lazy load  


# Tech task:
- create UI with HTML and CSS
- create component with Angular 1.5
- communicate with RxJs
- create Jasmine test and Protractor test
- create SPA
- API with Node
- get data from MongoDB