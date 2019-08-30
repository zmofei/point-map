# Point-map
An elegant global view map.

[Live Demo](https://zmofei.github.io/point-map/dist/)

[How we mad this](https://www.himofei.com/blog/article/5d68d93223d760b4bf736014)

[相关介绍](https://www.zhuwenlong.com.com/blog/article/5d68d93223d760b4bf736014)

![bannber](doc/img/banner.gif)

## Usage

### 1. Install

You can use this library through `NPM`, Javascript `<Script>` tag from CDN.

#### 1.1 NPM

Use NPM install package

```bash
npm install point-map
```

import it in your .js file

```javascript
import PointMap from 'point-map'
```

#### 1.2 Script 

```html
<script src="https://unpkg.com/point-map/dist/mymap.min.js" crossorigin></script>
```


## Hello World

```html
<html>
  <head>
    <title>Point-map demo</title>
    <script src="https://unpkg.com/point-map/dist/pointmap.min.js" crossorigin></script>
  </head>
  <body>
    <div id="map"></div>
    <script type="text/javascript">
      // Create an instance
      let map = new PointMap('map');
      // Add event points 
      map.addEvents([{
        name: '上海',
        coordinate: [121.47, 31.233]
      }, {
        name: '北京',
        coordinate: [116.41, 39.90]
      }]);
      // regiest events
      map.on('mousemove', function(e, data) {
        console.log(data);
      })
    </script>
  </body>
</html>
```

## Interfaces

### PointMap(elementID)

Create an point map instances by given a DOM's id.

Example:

```javascript
new PointMap('map');
```

### PointMap.addEvent(EventObject)

Add a event on the map.

`EventObject.name` [String] The name of the Event, Could be anything.
`EventObject.coordinate` [Array] The Latitude and longitude of the Event [Latitude, Longitude]
`EventObject[others]` [Any] Other Customer propertis of the event;

Example:

```javascript
map.addEvents({
  name: 'Shanghia',
  coordinate: [121.47, 31.233]
})
```


### PointMap.addEvents([EventPoints])

Add many events on the map, This is a short cut of the PointMap.addEvent.

Example:

```javascript
map.addEvents([
  {
    name: 'Shanghia',
    coordinate: [121.47, 31.233]
  },
  {
    name: 'Beijing',
    coordinate: [116.41, 39.90]
  }
])
```

### PointMap.on(EventName, CallbackFunction)

Add an event on the map.

`EventName` [String] the event name could be `mousemove`,`click`

`CallbackFunction(event, Pointinfo)` When the event trigger, the 1st param is the DOM event, The 2nd param is object of the customer Point info.

Examples:

```
let map = new PointMap('map');
// Add event points 
map.addEvents({
  name: '上海',
  coordinate: [121.47, 31.233]
});

map.on('mousemove', function(e, data) {
    if (data) {
        console.log('you are move into a customer Event', data)
    } else {
        console.log('you are not on a custome')
    }
});
```


### PointMap.remove(EventName, EventFunction)

Remove an event on the map.

`EventName` [String] the event name

`EventFunction` The function Which we add to the map

Examples:

```
let map = new PointMap('map');
// Add event points 
map.addEvents({
  name: '上海',
  coordinate: [121.47, 31.233]
});

const fn = (e,data)=>{console.log('you are moving')};

map.on('mousemove', fn);
map.remove('mousemove', fn);
```
