function dataDecode(data) {
  let newData = [];
  data.forEach((row, index) => {
    newData[index] = newData[index] || [];
    row.forEach(list => {
      if (typeof list === 'number') {
        newData[index].push(list);
      } else {
        for (let i = 0; i < list[1]; i++) {
          newData[index].push(list[0] + i);
        }
      }
    });
  })
  return newData;
}

class MyMap {
  constructor(dom, config) {
    this.globalRawData = dataDecode([
      [
        [7, 2]
      ],
      [7],
      [
        [7, 2]
      ],
      [8],
      [],
      [],
      [
        [8, 3]
      ],
      [
        [6, 5], 12, 65
      ],
      [
        [6, 5]
      ],
      [
        [6, 6], 65
      ],
      [
        [6, 6], 26, 65
      ],
      [
        [6, 6], 65, 67
      ],
      [
        [6, 5], 65, 67
      ],
      [
        [6, 5],
        [65, 3]
      ],
      [
        [6, 4],
        [64, 4]
      ],
      [
        [6, 5],
        [64, 4]
      ],
      [
        [6, 5],
        [64, 4]
      ],
      [
        [7, 4],
        [64, 4]
      ],
      [
        [7, 4],
        [64, 4]
      ],
      [
        [7, 5],
        [64, 4]
      ],
      [
        [6, 7],
        [64, 4]
      ],
      [
        [6, 9],
        [64, 4]
      ],
      [
        [5, 10],
        [64, 4]
      ],
      [
        [5, 15],
        [64, 4]
      ],
      [3, 5, [7, 14],
        [64, 4]
      ],
      [
        [3, 3],
        [7, 14],
        [64, 4]
      ],
      [
        [4, 19],
        [64, 4]
      ],
      [
        [3, 21],
        [64, 4]
      ],
      [
        [3, 21],
        [64, 4]
      ],
      [
        [4, 21],
        [64, 4]
      ],
      [
        [5, 22],
        [64, 4]
      ],
      [
        [5, 22],
        [63, 5]
      ],
      [
        [4, 2],
        [7, 21],
        [63, 5]
      ],
      [
        [4, 24],
        [64, 4]
      ],
      [
        [2, 21], 27, [64, 4]
      ],
      [2, [4, 6],
        [11, 12],
        [27, 2],
        [63, 5]
      ],
      [
        [0, 3],
        [4, 2],
        [7, 2],
        [11, 12],
        [26, 3],
        [63, 5]
      ],
      [
        [0, 9],
        [12, 10], 26, 28, [63, 5]
      ],
      [
        [0, 9],
        [12, 11],
        [28, 3],
        [64, 4]
      ],
      [
        [0, 10],
        [12, 12], 25, 30, [64, 4]
      ],
      [
        [0, 7], 9, [14, 8],
        [23, 3], 31, [34, 3],
        [63, 5]
      ],
      [
        [0, 3],
        [5, 2],
        [8, 3],
        [12, 9],
        [24, 3],
        [31, 8],
        [64, 4]
      ],
      [
        [0, 3],
        [5, 14], 26, [30, 11],
        [53, 2],
        [64, 4]
      ],
      [
        [0, 3],
        [6, 12], 26, [30, 11],
        [48, 8], 64, [66, 2]
      ],
      [
        [0, 4],
        [6, 11], 26, [29, 28],
        [62, 3], 67
      ],
      [
        [0, 4],
        [6, 4],
        [11, 6],
        [30, 24], 56, [61, 4], 67
      ],
      [
        [0, 4],
        [7, 10],
        [30, 22], 56, [62, 3],
        [66, 2]
      ],
      [
        [0, 4],
        [11, 4], 16, [30, 21], 60, [62, 2],
        [66, 2]
      ],
      [
        [0, 4],
        [12, 3],
        [31, 19],
        [66, 2]
      ],
      [
        [0, 5],
        [12, 4],
        [32, 18], 67
      ],
      [
        [0, 6], 15, [32, 17], 67
      ],
      [
        [2, 7], 15, [32, 16],
        [66, 2]
      ],
      [
        [0, 10],
        [34, 13],
        [66, 2]
      ],
      [
        [0, 10],
        [35, 10],
        [65, 3]
      ],
      [
        [0, 11],
        [35, 9],
        [65, 3]
      ],
      [
        [0, 10],
        [35, 9], 67
      ],
      [
        [0, 9],
        [35, 8], 67
      ],
      [
        [0, 8],
        [36, 3], 67
      ],
      [
        [0, 8],
        [36, 2], 65, 67
      ],
      [
        [0, 8],
        [65, 3]
      ],
      [
        [0, 7],
        [65, 3]
      ],
      [
        [0, 7],
        [65, 3]
      ],
      [
        [0, 7],
        [65, 3]
      ],
      [
        [0, 7], 8, [65, 3]
      ],
      [
        [2, 3], 8, [64, 4]
      ],
      [2, 8, 28, [64, 4]],
      [8, [24, 6],
        [63, 5]
      ],
      [
        [23, 9],
        [63, 5]
      ],
      [13, [22, 10],
        [63, 5]
      ],
      [
        [12, 2],
        [17, 3],
        [21, 12],
        [63, 5]
      ],
      [
        [11, 4],
        [17, 16],
        [63, 5]
      ],
      [
        [11, 3], 15, [17, 16],
        [63, 5]
      ],
      [
        [13, 6],
        [20, 12],
        [63, 5]
      ],
      [
        [14, 4],
        [20, 12],
        [63, 5]
      ],
      [
        [9, 2],
        [13, 4],
        [20, 13],
        [62, 6]
      ],
      [
        [9, 2],
        [13, 4],
        [19, 14],
        [62, 6]
      ],
      [
        [9, 8],
        [18, 18],
        [62, 6]
      ],
      [2, [8, 10], 19, [21, 16],
        [39, 3],
        [62, 6]
      ],
      [
        [2, 2],
        [7, 5],
        [13, 7],
        [21, 24],
        [62, 6]
      ],
      [
        [2, 2],
        [7, 4],
        [12, 6],
        [22, 25],
        [62, 6]
      ],
      [2, [6, 3],
        [12, 7],
        [21, 27],
        [62, 6]
      ],
      [
        [2, 2],
        [6, 2],
        [9, 11],
        [21, 27],
        [62, 6]
      ],
      [2, [6, 12], 20, [22, 26],
        [62, 6]
      ],
      [
        [6, 4],
        [11, 9],
        [22, 26],
        [62, 6]
      ],
      [
        [6, 10],
        [18, 2],
        [22, 25],
        [62, 6]
      ],
      [
        [6, 11],
        [18, 3],
        [22, 24],
        [62, 6]
      ],
      [
        [7, 13],
        [21, 2],
        [24, 20],
        [62, 6]
      ],
      [
        [7, 10],
        [18, 7],
        [27, 15],
        [62, 6]
      ],
      [
        [7, 10],
        [18, 9],
        [28, 8],
        [38, 3],
        [62, 6]
      ],
      [
        [8, 27],
        [62, 6]
      ],
      [
        [7, 22],
        [30, 4],
        [41, 4],
        [61, 7]
      ],
      [2, [8, 8],
        [17, 12],
        [30, 3],
        [40, 4],
        [61, 7]
      ],
      [
        [7, 9],
        [18, 5],
        [24, 5], 30, [39, 2],
        [61, 7]
      ],
      [5, [7, 12],
        [20, 4],
        [25, 3],
        [61, 7]
      ],
      [5, [7, 21],
        [61, 7]
      ],
      [4, [7, 17],
        [25, 2],
        [61, 7]
      ],
      [4, [6, 18], 25, [61, 7]],
      [
        [6, 19],
        [61, 7]
      ],
      [
        [7, 17],
        [61, 7]
      ],
      [
        [6, 19],
        [61, 7]
      ],
      [
        [5, 21],
        [63, 5]
      ],
      [
        [5, 22],
        [63, 5]
      ],
      [
        [5, 25],
        [62, 6]
      ],
      [
        [5, 26],
        [62, 6]
      ],
      [
        [5, 27],
        [61, 7]
      ],
      [
        [5, 23],
        [61, 7]
      ],
      [
        [5, 22],
        [61, 7]
      ],
      [
        [4, 22],
        [61, 7]
      ],
      [
        [4, 22],
        [61, 7]
      ],
      [2, [4, 23],
        [61, 7]
      ],
      [2, [4, 24], 32, [61, 7]],
      [2, [4, 25],
        [32, 2],
        [61, 7]
      ],
      [2, [4, 26],
        [31, 4],
        [61, 7]
      ],
      [
        [3, 27],
        [32, 4],
        [60, 8]
      ],
      [
        [3, 28],
        [35, 2],
        [61, 7]
      ],
      [
        [4, 22],
        [28, 2], 37, [61, 7]
      ],
      [
        [4, 23],
        [34, 2], 37, [61, 7]
      ],
      [
        [4, 22],
        [33, 3], 37, [61, 7]
      ],
      [
        [5, 21],
        [32, 4], 37, [43, 5],
        [61, 7]
      ],
      [
        [5, 20],
        [32, 3],
        [42, 7],
        [61, 7]
      ],
      [
        [5, 13], 19, [21, 3], 25, [27, 2],
        [34, 3], 38, [42, 6],
        [61, 7]
      ],
      [
        [5, 15], 27, [30, 2],
        [36, 2],
        [41, 7],
        [61, 7]
      ],
      [
        [5, 15],
        [29, 3],
        [40, 8],
        [61, 7]
      ],
      [
        [5, 16],
        [33, 3],
        [40, 7],
        [61, 7]
      ],
      [
        [6, 12], 21, 35, [39, 8],
        [61, 7]
      ],
      [
        [6, 12], 20, [34, 2],
        [39, 8],
        [61, 7]
      ],
      [
        [6, 11], 20, [39, 9],
        [60, 8]
      ],
      [4, [6, 6],
        [13, 3],
        [19, 2],
        [35, 3],
        [41, 8],
        [61, 7]
      ],
      [
        [4, 7],
        [13, 2],
        [17, 4],
        [35, 3],
        [41, 9],
        [61, 7]
      ],
      [
        [4, 7],
        [13, 5],
        [36, 2],
        [39, 11],
        [61, 7]
      ],
      [
        [5, 6],
        [36, 2],
        [40, 10], 51, [61, 7]
      ],
      [
        [4, 7],
        [37, 2],
        [42, 8], 51, [61, 7]
      ],
      [4, [6, 5], 36, 38, [43, 6],
        [62, 6]
      ],
      [
        [6, 5],
        [44, 3],
        [62, 6]
      ],
      [
        [6, 4], 12, 36, [62, 6]
      ],
      [
        [6, 4],
        [11, 3],
        [62, 6]
      ],
      [
        [7, 6], 38, [62, 6]
      ],
      [
        [6, 6],
        [62, 4], 67
      ],
      [
        [7, 4], 63, 65, 67
      ],
      [
        [7, 4], 52, 63, 67
      ],
      [
        [6, 5],
        [51, 2], 63
      ],
      [
        [6, 4], 48, [50, 2]
      ],
      [
        [6, 4],
        [49, 2]
      ],
      [
        [7, 3], 41, 49
      ]
    ]);
    this.coordinate = { bbox: [-180, -85, 180, 85], grid: 2.5 }
    this.dom = document.getElementById(dom);
    // 
    this.config = Object.assign({
      mapBgColor: '#87bce1',
      eventPointColor: '#fefefe',
    }, config || {});
    //
    this.initCanvas();

    // 
    this.animation();
  }

  animation() {
    requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // run the draw function one by one,
      // if the function return canvas add the canvas to the main canvas
      ['drawBasicMap', 'drawEventPoint', 'drawEventPointWave'].forEach(funcName => {
        const canvas = this[funcName]();
        if (canvas) {
          this.ctx.drawImage(canvas, 0, 0, canvas.width / this.screenRatio, canvas.height / this.screenRatio);
        }
      });

      // loop
      this.needRedraw = false;
      this.animation();
    })
  }

  initCanvas() {
    const coordinateRatio = (Math.abs(this.coordinate.bbox[1]) + Math.abs(this.coordinate.bbox[3])) / (Math.abs(this.coordinate.bbox[0]) + Math.abs(this.coordinate.bbox[2]));
    this.canvasWidth = Math.min(parseInt(getComputedStyle(this.dom).width), 1200);
    this.scale = this.canvasWidth / ((Math.abs(this.coordinate.bbox[0]) + Math.abs(this.coordinate.bbox[2])) / this.coordinate.grid);

    this.dom.style.textAlign = 'center';
    this.screenRatio = window.devicePixelRatio;
    this.needRedraw = true;

    // Prepare Canvas
    // we create multi canvas the first is render on the screen,
    // and the other is render off screen to improve performance
    // 
    // canvas-map is for basic map and the event map
    // canvas-wave is for active wave
    ['canvas', 'canvas-map', 'canvas-wave'].forEach(cname => {
      const canvas = this[cname] = document.createElement('canvas');
      canvas.style.width = `${this.canvasWidth}px`;
      canvas.style.height = `${this.canvasWidth * coordinateRatio}px`;
      canvas.width = `${this.canvasWidth * this.screenRatio}`;
      canvas.height = `${this.canvasWidth * coordinateRatio * this.screenRatio}`;
      const ctx = this[`ctx-${cname}`] = canvas.getContext('2d');
      ctx.scale(this.screenRatio, this.screenRatio);
    });
    this.canvas.style.margin = '0 auto';
    this.ctx = this.canvas.getContext('2d');

    this.dom.appendChild(this.canvas);
  }

  drawBasicMap() {
    const canvas = this['canvas-map'];
    if (this.needRedraw) {
      const ctx = this['ctx-canvas-map'];
      ctx.fillStyle = this.config.mapBgColor;
      this.globalRawData.forEach((row, x) => {
        row.forEach(y => {
          ctx.fillRect(x * this.scale, y * this.scale, this.scale * 0.4, this.scale * 0.4);
        })
      });
    }
    return canvas;
  }

  drawEventPoint() {
    if (this.needRedraw) {
      const ctx = this['ctx-canvas-map'];
      const events = this.events || {};
      Object.keys(events).forEach(x => {
        Object.keys(events[x]).forEach(y => {
          const pixelX = x * this.scale;
          const pixelY = y * this.scale;
          ctx.beginPath();
          ctx.fillStyle = this.config.eventPointColor;
          ctx.moveTo(pixelX, pixelY);
          ctx.arc(pixelX, pixelY, this.scale / 1.5, 0, Math.PI * 2)
          ctx.fill();
        })
      });
    }
  }

  drawEventPointWave() {
    this._waveRadius = this._waveRadius || 0;
    const canvas = this['canvas-wave'];
    const ctx = this[`ctx-canvas-wave`];
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = 'rgba(0, 0, 0, .08)';
    ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineWidth = 1;

    const events = this.events || {};
    ctx.save();
    ctx.beginPath();
    ctx.globalAlpha = 0.1;
    Object.keys(events).forEach(x => {
      Object.keys(events[x]).forEach(y => {
        ctx.strokeStyle = this.config.eventPointColor;
        const pixelX = x * this.scale;
        const pixelY = y * this.scale;
        ctx.moveTo(pixelX + this._waveRadius, pixelY);
        ctx.arc(pixelX, pixelY, this._waveRadius, 0, Math.PI * 2);
      })
    });
    this._waveRadius += 0.1;
    ctx.stroke();
    ctx.restore();

    if (this._waveRadius > 15) {
      this._waveRadius = 0;
    }

    return canvas;
  }

  addEvent(data) {
    const x = Math.round((data.coordinate[0] + Math.abs(this.coordinate.bbox[0])) / this.coordinate.grid);
    const y = Math.round(Math.abs(data.coordinate[1] - this.coordinate.bbox[3]) / this.coordinate.grid);
    this.events = this.events || {};
    this.events[x] = this.events[x] || {};
    this.events[x][y] = data;

    this.needRedraw = true;
  }
}

let map = new MyMap('map');
map.addEvent({
  name: '上海',
  coordinate: [121.47, 31.233]
});