# Material-UI Selectable Menu List
[![Build Status][travis-image]][travis-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![License][license-image]][license-url]
[![Code Coverage][coverage-image]][coverage-url]
[![Code Style][code-style-image]][code-style-url]

## Table of Contents

- [Description](#description)
- [Installation](#instalaltion)
- [Usage](#usage)
- [Contributing](#contributing)


## Description

Material-UI Selectable Menu List is a React-Redux component that uses [Material-UI](http://www.material-ui.com/) to create a List from a Array.
Ihe array should contain only the props used for the ListItems and they can have one parameter more `visible`. This will define if the ListItem will be displayed or not. It should make creating dynamic Menues easyer becaus you don't habe to take care of every ListItem seperately.

Nesting is also supported. Adding subheadrs and dividers is also no problem. More about that we will see in the [Usage](#usage) part.

Managin an List with only one poroperty as array list of ListItems allowes us to move the array in a seperate file and this way to make the code much easyer to read.

You can try it out the [DEMO](https://tarikhuber.github.io/material-ui-selectable-menu-list/).

## Installation

This project can be istalled as npm module using following command:

```bash
npm i -S material-ui-selectable-menu-list
```

## Usage

To use it just import the component and set as property a list of menu items:

```js

import {SelectableMenuList} from 'material-ui-selectable-menu-list'

const folders_list=[
  {
    subheader: 'Folders',
  },
  {
    value:'/photos',
    primaryText: 'Photos',
    secondaryText: 'Jan 9, 2014',
    leftAvatar: <Avatar icon={<FileFolder />} />,
    rightIcon: <ActionInfo/>
  },
  {
    value:'/recipes',
    primaryText: 'Recipes',
    secondaryText: 'Jan 17, 2014',
    leftAvatar: <Avatar icon={<FileFolder />} />,
    rightIcon: <ActionInfo/>
  },
  {
    value:'/work',
    primaryText: 'Work',
    secondaryText: 'Jan 28, 2014',
    leftAvatar: <Avatar icon={<FileFolder />} />,
    rightIcon: <ActionInfo/>
  },
  {
    divider: true,
  },
  {
    subheader: 'Files',
  },
  {
    value:'/vacation_itinerary',
    primaryText: 'Vacation itinerary',
    secondaryText: 'Jan 20, 2014',
    primaryTogglesNestedList: false,
    leftAvatar: <Avatar icon={<ActionAssignment />} backgroundColor={blue500} />,
    rightIcon: <ActionInfo/>
  },
  {
    value:'/kitchen_remodel',
    primaryText: 'Kitchen remodel',
    secondaryText: 'Jan 10, 2014',
    leftAvatar: <Avatar icon={<EditorInsertChart />} backgroundColor={yellow600} />,
    rightIcon: <ActionInfo/>
  },
]

...

//then in your component
  <SelectableMenuList
    items={folders_list}
    onIndexChange={this.handleChange}
    index={index}
  />

...

```

Because it is selectable you will have to send a `index` (string) parameter witch defines witch ListItem should be selected and `onIndexChange` callback witch will handle the ListItem Click event. In the demo applicatgion I use it together with the redux-router to go to another application part and the `index` value comes from the `redux-router` path. That way i have complete navigation menu :)

Every value in the array elements will be send to the ListItem as prop. You can also send `inline` and `style` to change those properties for each ListItem. The Divider and Subheader elements can also recieve this kind of properties.

As you can see from the example to add a divider we just have to add one item more with the value `divider: true`.

For the Subheader just add the value `subheader: "Some text"`.

An complete example can be found in the [App.js](https://github.com/TarikHuber/material-ui-selectable-menu-list/blob/master/demo/src/App.js) of the demo part of this project.


## Contributing

Every help no mather if it is a kritik, suggestion or pull request is welkome :)

[travis-image]: https://travis-ci.org/TarikHuber/material-ui-selectable-menu-list.svg?branch=master
[travis-url]: https://travis-ci.org/TarikHuber/material-ui-selectable-menu-list
[daviddm-image]: https://img.shields.io/david/TarikHuber/material-ui-selectable-menu-list.svg?style=flat-square
[daviddm-url]: https://david-dm.org/TarikHuber/material-ui-selectable-menu-list
[coverage-image]: https://img.shields.io/codecov/c/github/TarikHuber/material-ui-selectable-menu-list.svg?style=flat-square
[coverage-url]: https://codecov.io/gh/TarikHuber/material-ui-selectable-menu-list
[license-image]: https://img.shields.io/npm/l/express.svg
[license-url]: https://github.com/TarikHuber/material-ui-selectable-menu-list/master/LICENSE
[code-style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square
[code-style-url]: http://standardjs.com/
