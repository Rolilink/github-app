# Github App
This is a React Native App created to explore repositories contributors and repositories owners

## Setup
- Install node and yarn
- Install dependencies running `yarn install`.

## Run App on IOs Device with Expo + react-native-debugger
- Update commented lines on `App.js` and `Store.js` when switching between debugging and production.
- Update react-native localhost with the ip of your computer when debugging using expo + react-native-debugger following this [instruction](https://github.com/jhen0409/react-native-debugger).
- Run `yarn debug` to open the app on expo

## Run App on IOs simulator with Expo + react-native-debugger
- Update commented lines on `App.js` and `Store.js` when switching between debugging and production.
- Update react-native localhost with the ip of your computer when debugging using expo + react-native-debugger following this [instruction](https://github.com/jhen0409/react-native-debugger).
- Run `yarn ios` to open the app on the simulator through expo

## Run App on Ios simulator through xcode
- Create a new git branch `git checkout -b temp-eject`
- Update commented lines on `App.js` and `Store.js` when switching between debugging and production.
- Comment and uncomment the lines on `App.js` refering to expo so it will not load expo
- Run `yarn eject` to build the project
- Open XCode and select `open another project`
- Navigate into the `/ios` folder and select and open `githubapp.xcodeproj`
- Run the simulator

## Known issues
Since this is my second app using React Native there are some issues, but I wanted to showcase my skills as a react engineer, my experience architecting react apps and my skills to learn new stacks fast.

- There is an performance issue on the InfiniteListComponent when rendering a lot of records.
- There is also a touch issue on the search page and the back link on the list views just double click, tested on my iphone 6.
- Request are Throttled because of github rate-limiting for non authenticated accounts, sometimes when scrolling lists will not update because request are being throttled.
- This app haven't been tested on android but it should work fine since it uses native-base on most of the views.

## Things I would have done better
Since time runout for me working on this test there where some stuff that I think I would have done better with a little more time:

- Researching more into `FlatList` component to improve performance within the `InfiniteListComponent` also I found there is a [known issue](https://github.com/facebook/react-native/issues/14015) on the implementation on the method `onEndReached` that make me follow a different approach during the implementation using `onScroll` instead, I think using `onEndReached` would be a better alternative.
- Add testing to the component and modules
- Decouple a little more the react components
- Configure a build process
- Test it on more iOs devices
- Test it on android devices
