# Morgan Stanley UX JavaScript and CSS Challenge

## The input

The file `assets/C2TFlyout.psd` is a Photoshop file detailing a component that
exists in one of our trading systems, which initiates a Request for Quote from a
historical pricing grid. The two states (closed and open) are toggled using two
layer comps.

### Font

News Gothic is available, for free non-commercial use, on
[TypeKit](https://typekit.com/fonts/news-gothic-std).

## The output

Build a reusable, maintainable flyout component that implements the
functionality outlined in the PSD. It should best illustrate the look-and-feel
of the visual, and expose an API for setting data.

There are four buttons in the open flyout - you should raise an event when each
of these is clicked, passing the original data object.

Enclosed is a simple JSON data file - `data\prices.json`, which should be
loaded at runtime and used to populate two instances of your component.

### What you need to demonstrate

* Separation of concerns;
* portable, re-usable, and modular CSS, ideally demonstrating object-oriented abstractions;
* an eye for the visual details, and ability to pick apart what you need from a loosely organised PSD.

### Rules/constraints

* Include a DOM manipulation library of your choice - jQuery, MooTools, Prototype, etc:
    * the exception to that being if you want to build an Angular widget instead;
    * add an optional utility belt, such as Lodash if you find it of use;
* the generated markup is up to you;
* utilize a data driven approach to minimize hard-coding values into the DOM
* assume HTML5Shiv is in place and feel free to use features of ECMAScript 5;
* build your css from using a preprocessor such as SASS or LESS;
* finesse with transitions if you see fit - guide the user but don't over-embellish;
* work towards as usable a component as possible in a 2-4 hour window, but don't exceed that time frame.
* BONUS: build component using TDD/BDD

## To accompany your submission

Attach a short paragraph on each of the following questions:

* Given more time, how would you improve your solution?
* How would you distribute your component to other teams?

Please create a ZIP archive of all your files to send back to us. Before attaching the *.zip file to email, please rename the *.zip file extension to something like *.ux as this will help ensure that the attachment does not get automatically removed by our mailservers.