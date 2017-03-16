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
  angles: [
    'CGF', 'BGC', 'ADB', 'ABD', 'CGB', 'GBC',
    'KBC', 'GCB', 'CGK', 'GKB',
  ]
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
const _labelHighlights = {};
const _lineHighlights = {};
const _angleHighlights = {};
const _quadHighlights = {};

const alphabetize = s => s.split('').sort().join('');
const point = id => points[id];

const lightblue = 'rgba(0, 200, 255, 0.75)';
const darkblue = '#1C75BC';
const colors = {
  point: 'rgb(251, 244, 185)',
  line: 'rgb(22, 89, 223)',
  angle: 'rgb(178, 151, 98)',
  quad: 'rgb(178, 185, 222)',
};

const rect = ({ h, w, x, y, fill, stroke, type }) => {
  const r = two.makeRectangle(x, y, w, h);
  if (type) {
    r.fill = colors[type];
    r.opacity = 0;  // Starting opacity
    r.noStroke();
  } else {
    if (fill) { r.fill = fill; }
    if (stroke) { r.stroke = stroke; }
  }
  return r;
}

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

    // Create a highlight for the line...
    const lineHighlight = l.clone();
    lineHighlight.linewidth = 3;
    lineHighlight.opacity = 0;
    lineHighlight.stroke = colors['line'];
    _lineHighlights[id] = lineHighlight;

    result = l;
  }
  return result;
};

const angleHighlight = id => {
  const l1 = id.substring(0, 2);
  const l2 = id.substring(1, 3);
  const keys = [l1, l2].map(alphabetize);
  const result = [];

  for (const k of keys) {
    const endpoints = k.split('');
    const [ p1, p2 ] = endpoints.map(point);
    const hl = two.makeLine(...p1, ...p2);
    hl.linewidth = 3;
    hl.opacity = 0;
    hl.stroke = colors['angle'];
    // Peak jank. Angle highlihgts should obviously be indexed
    // by angle, not individual line segments.
    _angleHighlights[k] = hl;
    result.push(hl);
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
    let alignment = 'right';
    let labelOffset = -5;
    if (x === 100) {
      alignment = 'left';
      labelOffset = 5;
    }
    const options = {
      baseline: 'bottom',
      alignment,
      family: '"Georgia", serif',
    };
    const labelHighlight = rect({
      x: x + labelOffset, y: y - 5,
      h: 15, w: 15,
      stroke: 'rgba(0,0,0,0)',
      fill: 'rgba(0,0,0,0)',
    });
    _labelHighlights[id] = labelHighlight;
    const t = two.makeText(id, x, y, options);
    labels[id] = t;
    result = t;
  }
  return result;
};

// Oh my god this is so jank
const angleHls = data.angles.map(angleHighlight)
  .reduce((memo, [a, b]) => [...memo, a, b], []);

const shortenQuadKey = id => ({
  ABDE: 'AE',
  BCGK: 'CK',
}[alphabetize(id)]);

const quad = id => {
  let twoCharId;
  if (id.length === 4) {
    // Never talk to me again
    twoCharId = shortenQuadKey(alphabetize(id));
  } else {
    twoCharId = alphabetize(id);
  }
  // Split into top left and bottom right, and compute
  // the width.
  const [ p1, p2 ] = twoCharId.split('').map(point);
  const w = Math.abs(p2[0] - p1[0]);
  const h = Math.abs(p2[1] - p1[1]);
  const x = Math.min(p1[0], p2[0]) + 0.5 * w;
  const y = Math.max(p1[1], p2[1]) - 0.5 * h;
  const r = rect({ h, w, x, y, type: 'quad' });
  const key = twoCharId;
  _quadHighlights[key] = r;
  return r;
};

// Initialization code
let groupies = [
  ...Object.keys(points).map(label),  // has side effects. v impure
  ...data.lines.map(alphabetize).map(line),  // also has side effects lmao
  ...Object.keys(_labelHighlights).map(k => _labelHighlights[k]),
  ...Object.keys(_lineHighlights).map(k => _lineHighlights[k]),
  ...Object.keys(_angleHighlights).map(k => _angleHighlights[k]),
  ...data.quads.map(quad),
];
const group = two.makeGroup(groupies);

group.translation.set(50, 25);
group.scale = 2;

two.update();

/**
 * Event listeners for interactive updates.
 */
const highlightContainer = document.querySelector('[data-highlight-container]');
const activeHighlights = new Map();

const toggleHighlight = ({ type, key }) => {
  let isHighlighted;
  if (type === 'quad') {
    isHighlighted =
      activeHighlights.get(shortenQuadKey(key)) === type
      || activeHighlights.get(alphabetize(key)) === type;
  } else {
    isHighlighted = activeHighlights.has(key.toString())
      && activeHighlights.get(key.toString()) === type;
  }
  const highlightStores = {
    point: _labelHighlights,
    line: _lineHighlights,
    angle: _angleHighlights,
    quad: _quadHighlights,
  };
  const store = highlightStores[type];
  if (isHighlighted) {
    if (type === 'angle') {
      const [ k1, k2 ] = key;
      store[k1].opacity = 0;
      store[k2].opacity = 0;
      activeHighlights.delete(key.toString());
    } else if (type === 'quad') {
      const shortKey = key.length > 2
        ? shortenQuadKey(key)
        : alphabetize(key);
      store[shortKey].opacity = 0;
      activeHighlights.delete(shortKey);
    } else if (type === 'point') {
      store[key].stroke = 'rgba(0,0,0,0)';
      activeHighlights.delete(key);
    } else {
      store[key].opacity = 0;
      activeHighlights.delete(key);
    }
    // Update view regardless
    two.update();
  } else {
    if (type === 'angle') {
      const [ k1, k2 ] = key;
      store[k1].opacity = 1.0;
      store[k2].opacity = 1.0;
      activeHighlights.set(key.toString(), type);
    } else if (type === 'quad') {
      const shortKey = key.length > 2
        ? shortenQuadKey(key)
        : alphabetize(key);
      store[shortKey].opacity = 0.9;
      activeHighlights.set(shortKey, type);
    } else if (type === 'point') {
      store[key].stroke = 'red';
      activeHighlights.set(key, type);
    } else {
      const opacity = type === 'POINT' ? 0.6 : 1.0;
      store[key].opacity = opacity;
      activeHighlights.set(key, type);
    }
    // Again, update regardless of type
    two.update();
  }
};

const onMathHover = evt => {
  const el = evt.target;
  const type = el.getAttribute('data-math-type');
  const dispatch = {
    point: value => {
      const key = alphabetize(value);
      const what = { type: 'point', key };
      toggleHighlight(what);
    },
    angle: value => {
      const l1 = value.substring(0, 2);
      const l2 = value.substring(1, 3);
      const keys = [l1, l2].map(alphabetize);
      const what = { type: 'angle', key: keys };
      toggleHighlight(what);
    },
    line: value => {
      const key = alphabetize(value);
      const what = { type: 'line', key };
      toggleHighlight(what);
    },
    quad: value => {
      const what = { type: 'quad', key: alphabetize(value) };
      toggleHighlight(what);
    },
    default: value => {
      console.log('Unrecognized action type with value', value);
    },
  };
  const action = dispatch[type] || dispatch['default'];
  const value = el.getAttribute('data-math-value');
  action(value);
};

const mathData = document.querySelectorAll('[data-math-type]');

for (const el of mathData) {
  el.addEventListener('mouseover', onMathHover);
  el.addEventListener('mouseout', onMathHover);
}



// const r = rect({
//   x: 0, y: 0, h: 200, w: 100,
//   fill: lightblue, stroke: darkblue,
// });


