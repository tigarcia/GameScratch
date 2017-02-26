# React Native - Guess that Song

### Objectives

1. Setup react-native toolchain, and walk through the files in a new application
2. Create scene with basic react native components (Text, View, Button, TouchableOpacity)
3. Get familiar with styling in react native (flex, flexDirection, justifyContent, alignItems)
4. Use props, state to make app welcome page
5. Debug your react-native app
6. Practice ES2015 syntax for classes, import, arrow functions, const, let, string templates, spread operator 
7. Use lifecycle events like `componentDidMount`, `componentWillUnmount`, and `shouldComponentUpdate`


## Toolchain Setup

The [react native docs](https://facebook.github.io/react-native/docs/getting-started.html) have a great break down of what to do on each platform.  Here are the highlights:

__For Everyone__:

* Install [nodejs](https://nodejs.org/en/)
* Run `npm install -g react-native-cli` to install the command line tool for react native
* Run `brew install node && brew install watchman` (On mac)

__iOS__:

* Make sure you have xcode installed.  If you do not, start downloading now!!

__Android__:

* Download and install android studio.  Follow the direction in the facebook docs.

## First App!

![facebook thumbs up](https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Facebook_logo_thumbs_up_like_transparent_SVG.svg/2000px-Facebook_logo_thumbs_up_like_transparent_SVG.svg.png)

In your terminal, run:

```
react-native init SongGuessingGame
```

Note that `SongGuessingGame` is the name of our project and can be anything.

### Important Files

The cli will create a folder and install the files you need inside.  Here are some important ones:

* __package.json__: Lists our javascript dependencies.  This is what gets edited when you do `npm install --save <module_name>`
* __index.ios.js__: The entry point to our ios app.  We can put ios specific setup here.
* __index.android.js__: The entry point to our android app.  Android specific setup can go here
* __.babelrc__: The config file for babel (a transpiling library)
* __.flowconfig__: Flow is a static type checker than you can use in your app.  Find out more from [facebook](https://flowtype.org/)
* __node_modules__: A directory that contains all of our JS dependencies.
* __ios__: A directory that contains build settings for iOS. The xcode project will be found here.
* __android__: A directory that contains build settings for android. The gradle build scrips will be in here.


## Basic Components

React native does not use the DOM, so no html.  Instead we must use native components.  We'll start with:

* __Text__: For putting text on the screen
* __View__: A generic component that holds other components
* __Button__: A non customizable button that attempts to look and feel like a native on iOS and android.
* __TouchableOpacity__:  A touchable wrapper that is typically used to make custom buttons

Take a look at the code that was generated in _index.ios.js_ (or similarly in _index.android.js_).  Try to figure out what it does:

```js
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SongGuessingGame extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('SongGuessingGame', () => SongGuessingGame);
```


### First Component

For our first component, create a directory in the root of your project called `src`. Inside of `src`, create a file called `Welcome.js`.


```js
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

export default class Welcome extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello React-Native</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  }
});
```

Now change your _index.ios.js_ and _index.andriod.js_ to use welcome:

```js
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Welcome from './src/Welcome'

export default class SongGuessingGame extends Component {
  render() {
    return (
      <Welcome />
    );
  }
}

AppRegistry.registerComponent('SongGuessingGame', () => SongGuessingGame);
```


__EXERCISE__

Checkout the `style-exercise` branch:

```
git fetech
git checkout style-exercise
```

Then get the ui to look like the mock up below:

![](./react-native-styling-mock.png)

To see a solution:

```
git fetch
git checkout style-exercise-solution
```


## React Native Basics: Props And State

One of the core concepts of react native (and react for the web) is props and state.

* __props__ - data that is passed to a component that cannot be changed by the component (read only)
* __state__ - data that can be changed by a component

In practice, a prop is something that is passed into a component as an attribute.  For example, the button has the props _title_, _onPress_, and _color_:

```
<Button
  title="SIMPLE BUTTON"
  onPress={() => null}
  color="blue"/>
```

In contrast, state is owned by a component and may be changed by that component but by no other components.  If other components need to read state information, the data should be passed to the child component as a prop.

A component's state is defined in the constructor.  In the example, the state property `color` is changed every 2 seconds to a new random color:

```js
import React, { Component } from 'react'
import {Text} from 'react-native'

export default class RandomColor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    };
    setInterval(() => {
      const colors = ['red', 'green', 'blue', 'yellow', 'indigo'];
      const color = colors[Math.floor(Math.random()*colors.length)];
      this.setState({color});
    }, 2000);
  }

  render() {
    return <Text style={{color: this.state.color}}>Text Changes Colors</Text>
  } 
}
```

### Creating a Custom Button

Let's create a customized button that we'll use throughout our app.  The button will look similar to our mockup above:

```
git checkout custom-button-starter
```

We'll want to add some styling to the button so that it looks a little nicer.  Let's add the following:

* borderRadius - rounded corners
* backgroundColor - the background of our button
* padding - padding around the text
* color - applied to the text component
* fontSize - applied to the text component

Also, our custom button needs to handle `onPress`.

To see a solution:

```
git checkout custom-button-solution
```

__EXERCISE__

Using 3 components `Welcome`, `GameContainer`, and `SongGame` (plus the custom button we just created), make a UI in which the user sees the welcome screen first, then clicks a button to start the game.  The game can just say hello world for now.

Your starter code is at:

```
git checkout start-game-exercise
```

_It's important to pay attention to binding for this example._


And a solution is at:

```
git checkout start-game-solution
```

## Debugging

In the developer menu (Control + D on iOS simulator), there are lots of useful debugging tools

* Reload - does a full reload of the app.  You can also do CMD + R on a mac
* Enable/Disable Remote Debugging - allows you to debug your app in chrome and set break points
* Enable/Disable Live Reload - automatically reloads your app whenever you change a file
* Enable/Disable Hot Reload - tries to swap out the code in one part of your app without a full reload.  This can get confused.  I typically use this when I'm styling
* Inspector - Allows you to see margin, padding, size, etc for components.


## Lifecycle Events

Throughout the lifetime of your react native component, you may want to run code on specific events.  For our app, we will use:

* __componentDidMount__ - common for making http requests
* __componentWillUnMount__ - used to do cleanup. In our case, we will use it to release our playing song resource
* __shouldComponentUpdate__ - used to optimize re-renders.  Typically react is very good at this, so only do this when you are aware that there is an issue.

You can see the complete list of [lifecycle events](https://facebook.github.io/react/docs/react-component.html) in the react docs.

## Native Dependencies

There are many 3rd party npm modules to choose from for react-native.  Many of them take advantage of native components.  To add those components as a dependency, you will usually need to link.  Let's add `react-native-fs` and `react-native-sound` for our song guessing game:

```
npm install --save react-native-fs react-native-sound
```

This command has downloaded the javascript that our react components will depend on, but the native libraries still need to be linked into our app.  To link the libararies:

```
react-native link
```

### Downloading a Random Song

We will be using the itunes affiliate api to download music.  Below is a preset list of song.  Create a file called `SongData.js` and add this class:

```js
export default class SongData {
  static randomSongId() {
    const songIds = ["995535015", "966411602", "823593456", "956689796", "943946671",
                     "982388023", "907242704", "201281527", "656801339", "910038357",
                     "250038575", "878000348",  "794095205",  "1645339",  "400835962",
                     "325618",  "169003415",  "51958108", "192688540", "684811768",
                     "344799464", "217633921", "192811017", "71068886", "640047583",
                     "517438248", "656479859", "310237", "991390352",  "344799727",
                     "162337613", "121695005", "159293848", "305118379",
                     "1193701392" ];

    const id = Math.floor(Math.random() * songIds.length);
    return songIds[id]; 
  }
}
```

Notice a static method is used here just for fun.  It allows us to call `SongData.randomSongId()` without having to create an instance of `SongData`.

#### Fetch

To get JSON data for a song, we need to make a GET request to `https://itunes.apple.com/us/lookup?id=<SONGID>`. In react-native, the `fetch` api is used, which is a javascript standard!  To use fetch, we need to understand promises:

```
const songId = SongData.randomSongId();
fetch(`https://itunes.apple.com/us/lookup?id=${songId}`) // returns promise
      .then(d => d.json()) // gives back an object which we need to convert to json.  
      .then((d) => {
        console.warn(d.results[0]);
        return song;  // returning the song for the next .then method
      });
```

__EXERCISE__

Use the `fetch` api and `RNFS.downloadFile` (docs can be found [here](https://github.com/johanneslumpe/react-native-fs)) to make a GET request to get the song data, then anther GET request to download the audio file.  Once the audio file is download, display the artist and track info. The information that we want from the itunes api is:

* artist
* id
* album
* trackName
* audioUrl

Which lifecycle method would be appropriate for this request?




