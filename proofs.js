/**
 * Raw data for the proof.
 */
const data = {
  points: {
    A: [0, 0],        C: [75, 0],   B: [100, 0],
    H: [0, 25],       G: [75, 25],  K: [100, 25],

    D: [0, 100],      F: [75, 100], E: [100, 100],
  },
  lines: [
    'AB', 'BA', 'CA', 'DA', 'CB', 'DB',
    'EB', 'KB', 'FC', 'GC', 'ED', 'KG',
    'GH', 'KH',
  ],
  quads: [
    'AB', 'AC', 'ADEB', 'CGKB', 'HF',
    'CK', 'AG', 'GE',
  ],
};

/**
 * Initialize a new Two.js instance.
 */
const container = document.querySelector('[data-proof-figure="ii-iv"]');
const two = new Two({
  width: 300,
  height: 250
}).appendTo(container);

const { points } = data;
const { A, B, C, D, E, F } = points;  // convenience
const lines = {};
const quads = {};
const labels = {};

const alphabetize = s => s.split('').sort().join('');
const point = id => points[id];

// 'BA' -> Two.Line
const line = id => {
  // ['A', 'B']
  const endpoints = id.split('').sort();
  const key = endpoints.join('');
  let result;
  if (lines[key]) {
    result = lines[key];
  } else {
    // [ Point, Point ]
    const [ p1, p2 ] = endpoints.map(point);
    const l = two.makeLine(...p1, ...p2);
    lines[key] = l;
    result = l;
  }
  return result;
};

// 'B' => Two.Text
const label = id => {
  let result;
  if (labels[id]) {
    result = labels[id];
  } else {
    const [ x, y ] = points[id];
    const options = {
      baseline: 'bottom',
      alignment: x === 100 ? 'left' : 'right',
      family: '"Georgia", serif',
    };
    const t = two.makeText(id, x, y, options);
    labels[id] = t;
    result = t;
  }
  return result;
};

// Initialization code
let groupies = [
  ...Object.keys(points).map(label),  // has side effects. v impure
  ...data.lines.map(alphabetize).map(line),  // also has side effects lmao
];
const group = two.makeGroup(groupies);

group.translation.set(50, 25);
group.scale = 2;
group.linewidth = 1;

lines.AB.stroke = 'rgb(255, 0, 0)';

two.update();


// const rect = ({ h, w, x, y, fill, stroke }) => {
//   const shape = two.makeRectangle(x, y, w, h);
//   if (fill) {
//     shape.fill = fill;
//   }
//   if (stroke) {
//     shape.stroke = stroke;
//   }
//   return shape;
// }
// const lightblue = 'rgba(0, 200, 255, 0.75)';
// const darkblue = '#1C75BC';

// const r = rect({
//   x: 0, y: 0, h: 200, w: 100,
//   fill: lightblue, stroke: darkblue,
// });


