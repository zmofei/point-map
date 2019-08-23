import coordinate from './coordinate';
import { dataDecode } from './helper';

export class MyMap {
  constructor(dom, config) {
    this.globalRawData = dataDecode(coordinate);
    this.coordinate = { bbox: [-180, -85, 180, 85], grid: 2.5 }
    this.dom = document.getElementById(dom);
    // 
    this.config = Object.assign({
      mapBgColor: '#87bce1',
      mapActiveBgColor: '#87BCE1',
      eventPointColor: '#fefefe',
      activePointColor: '#3bc705'
    }, config || {});
    //
    this.initCanvas();
    this.initEvents();
    // 
    this.animation();
  }

  animation() {
    requestAnimationFrame(() => {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // run the draw function one by one,
      // if the function return canvas add the canvas to the main canvas
      ['drawBasicMap', 'drawEventPointWave'].forEach(funcName => {
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

  initEvents() {
    this.canvas.addEventListener('mousemove', e => {
      const x = Math.round(e.offsetX / this.scale);
      const y = Math.round(e.offsetY / this.scale);
      this.activePoint = [x, y];

      const data = this.events && this.events[x] && this.events[x][y];
      // 
      if (data) {
        this.canvas.style.cursor = 'pointer';

      } else {
        this.canvas.style.cursor = 'default';
      }

      const events = this.customerEvents && this.customerEvents.mousemove || [];
      events.forEach(fn => fn(e, data));

      this.needRedraw = true;
    });
    this.canvas.addEventListener('click', e => {
      const x = Math.round(e.offsetX / this.scale);
      const y = Math.round(e.offsetY / this.scale);
      if (this.events && this.events[x] && this.events[x][y]) {
        const events = this.customerEvents && this.customerEvents.click || [];
        events.forEach(fn => fn(e, this.events[x][y]));
      }
      this.needRedraw = true;
    });
  }

  drawBasicMap() {
    const canvas = this['canvas-map'];
    if (this.needRedraw) {
      const ctx = this['ctx-canvas-map'];
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.fillStyle = this.config.mapBgColor;
      let activePoint = null;
      let radius = this.scale * 0.4;
      this.globalRawData.forEach((row, x) => {
        row.forEach(y => {
          const isActive = this.activePoint && this.activePoint[0] === x && this.activePoint[1] === y;
          if (isActive) {
            activePoint = [x, y];
          } else {
            ctx.fillRect(x * this.scale - radius / 2, y * this.scale - radius / 2, radius, radius);
          }
        })
      });
      ctx.fillStyle = this.config.mapActiveBgColor;
      radius = this.scale * 0.8;
      if (activePoint) {
        ctx.fillRect(activePoint[0] * this.scale - radius / 2, activePoint[1] * this.scale - radius / 2, radius, radius);
      }
      ctx.restore();

      this.drawEventPoint();
    }
    return canvas;
  }

  drawEventPoint() {
    if (this.needRedraw) {
      const ctx = this['ctx-canvas-map'];
      const events = this.events || {};
      let activePoint = null;
      let redius = this.scale / 2;
      ctx.beginPath();
      Object.keys(events).map(x => Number(x)).forEach(x => {
        Object.keys(events[x]).map(y => Number(y)).forEach(y => {
          const isActive = this.activePoint && this.activePoint[0] === x && this.activePoint[1] === y;
          if (isActive) {
            activePoint = [x, y];
          } else {
            const pixelX = x * this.scale;
            const pixelY = y * this.scale;
            ctx.beginPath();
            ctx.fillStyle = this.config.eventPointColor;
            ctx.moveTo(pixelX, pixelY);
            ctx.arc(pixelX, pixelY, redius, 0, Math.PI * 2)
            ctx.fill();
          }
        })
      });

      if (activePoint) {
        const pixelX = activePoint[0] * this.scale;
        const pixelY = activePoint[1] * this.scale;
        ctx.beginPath();
        ctx.fillStyle = this.config.activePointColor;
        ctx.moveTo(pixelX, pixelY);
        ctx.arc(pixelX, pixelY, redius * 1.382, 0, Math.PI * 2)
        ctx.fill();
      }
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
    this.events[x][y] = this.events[x][y] || [];
    this.events[x][y].push(data);

    this.needRedraw = true;
  }

  addEvents(dataArr) {
    dataArr.forEach(d => {
      this.addEvent(d);
    })
  }

  on(event, fn) {
    this.customerEvents = this.customerEvents || {};
    this.customerEvents[event] = this.customerEvents[event] || [];
    this.customerEvents[event].push(fn);
  }

  remove(event, fn) {
    this.customerEvents = this.customerEvents || {};
    this.customerEvents[event] = this.customerEvents[event] || [];
    const index = this.customerEvents[event].indexOf(fn);
    if (index !== -1) {
      this.customerEvents[event].splice(index, 1);
    }
  }
}