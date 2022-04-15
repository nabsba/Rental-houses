# 🚀  Rental Houses 🚀 

This repo houses the assets used to build the [**Rental houses**](
https://rental-houses.vercel.app) website.

## Technologies 


- Main library: [**Next.js**](https://reactjs.org/docs/getting-started.html).
- Redux:[**Redux**](https://redux.js.org/).
- Linter: [**Eslint**](https://eslint.org/).  
- Typing: [**Typescript**](https://www.typescriptlang.org/). 
- Version control: [**GIT**](https://git-scm.com/doc). 
- Search Engine Optimisation: [**SEO**](https://developers.google.com/search/docs). 
- WPA: [**Workbox**](https://developers.google.com/web/tools/workbox/). 

## Structure

### Frontend
The **frontend** is implemented as following:

- public/asset: images, videos (which is not used for this app).
- component: components of the app.
- pages: pages of the app
- service: services related to components with their logics, data, reducer & type.

The following picture shows how **components** have been implemented:

![nab](https://miro.medium.com/max/1400/1*fOVQj8dgr1Oobj3Uta24JQ.png)

>*Pages are hydrated with datas ([**redux**](https://redux.js.org/) is used to manage datas) that will then be passed throw the different steps of the **atomic design** .*

 ### Version control

**Git: workflow**
### The application

#### Features:
- Rental houses show.
- Display houses (shoes) & filtering them.
- Some SEO features: 
  - In header; <title> <meta description> 
  - [**Structure data markup**](https://developers.google.com/search/docs/advanced/structured-data/intro-structured-data).
  - image optimisation
  - mobile friendly
  - canonical page
	- wpa: workbox cache
  - ...

## Installation
#### Terminal
```
# Install dependencies at root directory:
yarn  
```
#### Configuration

Create **.env.local** at root directory:
```
NEXT_PUBLIC_KEY_GOOGLE=#########Your key############
NEXT_PUBLIC_KEY_HOUSES_API=#########Your key############
NEXT_PUBLIC_KEY_HOST_HOUSES=zoopla.p.rapidapi.com
NEXT_PUBLIC_KEY_DEVELOPMENT=false
```

## Usage

- At the root of the application
```
yarn dev
```
## Contributing
Pull requests or advises are always welcome. 


