# React Basics

## Week 1 Notes

### React Overview

React uses single page application **SPA**, a one page website which differs from traditional websites where each webpage needs to loaded on navigation.

Traditional websites can be considered inefficient due to reloading of same components (e.g. headers and footers) on navigation.

SPA offers:

- Rich user interfaces
- Speed
- Scalability and flexibility

React revolves around the use of components. Which gives ability for developers to work on separate components on the same project without interference with each other. Think of an entire website as loads of components.

![Ability to work on separate components on the same project/web page](assets/components-advantage-pic.png "Ability to work on separate components on the same project/web page")

Each component are self-contained, which means they each contain its own HTML, CSS, and JS/TS.

Traditionally, when building loads of components on a single page. It required complex DOM manipulation, complex layouts resulting in whats known as 'spaghetti code'. React prevents this by preventing manipulation of the DOM. Instead, it provides a virtual DOM - an in memory representation of the real DOM, used to update the browser DOM when needed, increasing the application speed and performance.

### Functional Components

React provides two types of components:

- Functional components
- Class components

In the default react application, only one component is rendered - App component. This is located in the index.ts file. Thie is the root component.

![App component in index file](assets/app-component-index.png "App component in index file")

Root components can contain other components needed for the web application.

![Nested Component](assets/nested-component.png "ANested Component")

This is converted into a DOM fragment and placed into the existing DOM under the div tag with `id="root"`

A typical react component module contains the component and how its rendered, and an export to make it available for use by the application.

TSX is a syntax extension to typescript containing HTML and TS to make the website more dynamic. You can place this syntax inside a return statement of a functional component.

React components won't render until its used as a tsx element.

React components must be capitalised e.g. `Heading.ts` as react treats lower case components as regular HTML elements.

```
<CustomInput></CustomInput>

-vs-

<input></input>
```

The ability to write TS and HTML in the TSX file is made possible with transpiling - interpreting a programming language and translating it to a specific target language.

## Creating React Components
