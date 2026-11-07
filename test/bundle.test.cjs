const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { test } = require('node:test');
const vm = require('node:vm');

test('browser bundle draws a map and preserves point event APIs', () => {
  let frame;
  let draws = 0;
  const listeners = {};
  const container = { style: {}, appendChild(canvas) { this.canvas = canvas; } };
  const sandbox = {
    window: { devicePixelRatio: 2 },
    document: {
      getElementById: () => container,
      createElement() {
        const canvas = { style: {}, addEventListener(name, fn) { listeners[name] = fn; } };
        const ctx = { canvas, scale() {}, clearRect() {}, save() {}, restore() {},
          beginPath() {}, moveTo() {}, arc() {}, fill() {}, stroke() {},
          fillRect() { draws++; }, drawImage() { draws++; } };
        canvas.getContext = () => ctx;
        return canvas;
      }
    },
    getComputedStyle: () => ({ width: '800px' }),
    requestAnimationFrame(fn) { frame = fn; }
  };
  sandbox.self = sandbox;
  vm.runInNewContext(readFileSync('dist/pointmap.min.js', 'utf8'), sandbox);
  assert.equal(typeof sandbox.PointMap, 'function');
  const map = new sandbox.PointMap('map');
  assert.equal(Number(container.canvas.width), 1600);
  const point = { name: 'Shanghai', coordinate: [121.47, 31.233] };
  map.addEvents([point]);
  let received;
  const callback = (event, points) => { received = points; };
  map.on('click', callback);
  const event = { offsetX: Math.round((121.47 + 180) / 2.5) * map.scale,
    offsetY: Math.round((85 - 31.233) / 2.5) * map.scale };
  listeners.mousemove(event);
  listeners.click(event);
  assert.equal(received[0], point);
  assert.equal(container.canvas.style.cursor, 'pointer');
  frame();
  assert.ok(draws > 100, 'map and animation layers should draw');
  map.remove('click', callback);
  received = undefined;
  listeners.click(event);
  assert.equal(received, undefined);
});
