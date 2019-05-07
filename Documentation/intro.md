# Introduction

## What is Angular
Angular is a JavaScript framework for building client-side applications using HTMl, CSS and a programming language such as JavaScript.

## Why Angular?
- Expressive HTML - It powers up our HTML with features such as 'if' conditions, 'for' loops and local variables.
- Powerful Data Binding - We can easily display fields from our data models, track changes and process updates from the user.
- Modular By Design - Our application becomes a set of building blocks, making it easy to create and re-use content.
- Built-in Back-End Integration - This makes it easy for our web application to integrate with a back-end service to get and post data or execute server side business logic.

## Why Angular over Angular JS?
- Built for Speed - Faster initial load, faster change detection, and improved rendering times.
- Modern - It takes advantage of features provided in the latest JavaScript standards and beyond, such as classes, modules, and decorators, yet it supports both greenfield and legacy browsers.
- Simplified API - Fewer built-in Directives to learn, simpler bindings and a lower overall concept count.
- Enhances Productivity - Improves our day-to-day workflow by establishing a consistency of patterns for building the blocks that form an Angular application.

## Anatomy of an Angular Application
In Angular, an application is comprised of a set of components and services that provide functionality across those components.

## What is an Angular Component?
Each component is comprised of a:
- **Template** - the HTML for the user interface fragment defining a view for the application. 
- **Class** - the code associated with the view. The class contains: 
  - **Properties** of data elements available for use in the view.
  - **Methods** which perform action for the view such as responding to a button click. 
- **Metadata** - which provides additional information about the component to Angular. It is this metadata that identifies the class as an Angular component.
> So a **component** is a view defined with a **template**, its associated code, defined with a **class** and additional information defined with **metadata**.

## Angular Modules
Angular Modules help us organize our application into cohesive blocks of functionality. Every Angular application has at least one Angular module called the application's root module. An application can have any number of additional Angular modules, including feature modules that consolidate the components for a specific application feature.