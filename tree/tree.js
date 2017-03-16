const data = [ 'Sciences, and Artes Mathematicall,',
  'are, either',
  [ 'Principall',
    'which are two, onely,',
    [ 'Arithmetike.', null,
      [ 'Simple,', 'Which dealeth with Numbers onely: and demonstrateth all their properties and appertenances : where, an Unit, is Indivisible.' ],
      [ 'Mixt,', 'Which with aide of Geometrie principall, demonstrateth some Arithmeticall Conclusion, or Purpose.' ],
    ],
    [ 'Geometrie.', null,
      [ 'Simple,', 'Which dealeth with Magnitudes, onely: and demonstrateth all their properties, passions, and appertenances : whose Point, is Indivisible.' ],
      [ 'Mixt,', 'Which with aide of Arithmetike principall, demonstrateth some Gemoetricall purpose: as EUCLIDES ELEMENTES.' ],
    ],
  ],
  [ 'Derivative',
    'fro the Principalls: of which, some have',
    [ 'The names of', 'the Principalls: as,',
      [ 'Arithmetike',
        'vulgar: which considereth',
        [ 'Arithmetike of most usual whole Numbers: And of Fractions to them appertaining.' ],
        [ 'Arithmetike of Proportions.' ],
        [ 'Arithmetike Circular.' ],
        [ 'Arithmetike of Radicall Nubers:Simple,Compound,Mixt: And of their Fractions.' ],
        [ 'Arithmetike of Cossike Nubers:with their Fractions: And the great Arte of Algiebar.' ],
      ],
      [ 'Geometrie',
        'vulgar:which teacheth Measuring',
        [ 'At hand' ],
        [ 'With distace', 'from the thing Measured, as,' ]
      ],
    ],
    [ 'Propre names as,', null,
      [ 'Perspective', 'Which demonstrateth the maners and properties of all Radiations:Directe, Broken, and Reflected.' ],
      [ 'Astronomie', 'Which demonstrateth the Distances, Magnitudes, and all Naturall motions, Apparences, and Passions, proper to the Planets and fixed Starres: for any time, past, present, and to come: in respecte of a certaine Horizon, or without respect of any Horizon.' ],
      [ 'Musike', 'Which demon­strateth by reason, and teacheth by sense, perfectly to iudge and order the diuer­sitie of Soundes, hie or low.' ],
      [ 'Cosmographie', 'Which, wholy and perfectly maketh description of the Heauenlym and also Elementall part of the World: and of these partes, maketh homologall appli­cation, and mutuall collation necessary.' ],
      [ 'Astrologie', 'Which reasonably demon­strateth the opera­tions and effectes of the naturall beames of light, and secrete Influence of the Planets, and fixed Starres, in euery Element and Elementall body: at all times, in any Horizon assigned.' ],
      [ 'Statike', 'Which demon­strateth the causes of heauines and lightnes of all thinges: and of the motions and properties to heauines and lightnes belonging.' ],
      [ 'Anthropographie', 'Which describeth the Nũber, Measure, Waight, Figure, Situation, and colour of euery diuers thing contained in the perfecte body of MAN: and geueth certaine knowledge of the Figure, Symmetrie, Waight, Charac­terization, & due Locall motion of any percell of the said body assigned: and of numbers to the said percell apper­taining.'],
      [ 'Trochilike', 'Which demon­strateth the properties of all Circular motions: Simple and Compound.' ],
      [ 'Helicosophie', 'Which demon­strateth the designing of all Spirall lines: in Plaine, on Cylinder, Cone, Sphære, Conoïd, and Sphæroid: and their properties.' ],
      [ 'Pneumatithmie', 'Which demon­strateth by close hollow Geometricall figures (Regular and Irregular) the straunge properties (in motion or stay) of the Water, Ayre, Smoke, and Fire, in their Conti­nuitie, and as they are ioyned to the Elementes next them.' ],
      [ 'Menadrie', 'Which demon­strateth, how, aboue Natures Vertue, and power simple: Vertue and force, may be multi­plied: and so to directe, to lift, to pull to, and to put or cast fro, any multi­plied, or simple deter­mined Vertue, Waight, or Force: naturally, not, so, direc­tible, or moueable.' ],
      [ 'Hypogeiodie', 'Which demon­strateth, how, vnder the Sphæricall Super­ficies of the Earth, at any depth, to any perpen­dicular line assigned (whose distance from the perpen­dicular of the entrance: and the Azimuth likewise, in respecte of the sayd entrance, is knowen) certaine way, may be prescribed and gone, &c.' ],
      [ 'Hydragogie', 'Which demon­strateth the possible leading of water by Natures law, and by artificiall helpe, from any head (being Spring, standing, or running water) to any other place assigned.' ],
      [ 'Horometrie', 'Which demon­strateth, how, at all times appointed, the precise, vsuall denomi­nation of time, may be knowen, for any place assigned.' ],
      [ 'Zographie', 'Which demon­strateth and teacheth, how, the Inter­section of all visuall Pyramids, made by any plaine assigned (the Center, distance, and lightes being deter­mined) may be, by lines, and proper colours repre­sented.' ],
      [ 'Architecture', 'Which is a Science garnished with many doctrines, and diuers Instructions: by whose iudgement, all workes by other workmen finished, are iudged.' ],
      [ 'Navigation', 'Which demon­strateth, how, by the Shortest good way, by the aptest direction, and in the shortest time: a suffi­cient Shippe, betwene any two places (in passage nauigable) assigned, may be conducted: and in all stormes and naturall distur­bances chauncing, how to vse the best possible meanes, to recouer the place first assigned.' ],
      [ 'Thaumaturgike', 'Which geueth certaine order to make straunge workes, of the sense to be perceiued: and of men greatly to be wondred at.' ],
      [ 'Archemastrie', 'Which teacheth to bring to actuall experience sensible, all worthy conclu­sions, by all the Artes Mathe­maticall purposed: and by true Naturall philo­sophie, concluded: And both addeth to them a farder Scope, in the termes of the same Artes: and also, by his proper Method, and in peculiar termes, procedeth, with helpe of the forsayd Artes, to the perfor­mance of complete Experi­ences: which, of no parti­cular Arte, are hable (Formally) to be challenged.'],
    ]
  ]
];

const replacer = (sub) => {
  const regex = new RegExp(Object.keys(sub).join('|'), 'g');
  const fn = (match) => sub[match];

  return (text) => text.replace(regex, fn);
};

const convertText = (str) => {
  const charSub = {
    "s": 'ſ',
  };
  const ligSub = {
    'ſt': 'ﬅ',
  };
  const charReplacer = (s) => s.replace(/s(?!\b|'|f|k)/g, (match) => charSub[match]);
  const ligReplacer = replacer(ligSub);
  const result = ligReplacer(charReplacer(str));

  return result;
};

const makeElement = (name, className) => {
  const el = document.createElement(name);
  el.className = className || '';
  return el;
};

const makeBracePart = (part) => {
  const chars = {
    top: '\u23a7',
    middle: '\u23a8',
    bottom: '\u23a9',
    repeat: '\u23aa',
  };
  const el = document.createElement('div', `tree__left-brace--${part}`);
  el.textContent = chars[part];

  return el;
};

const buildTree = (node) => {
  const [ title, subtitle, ...children ] = node;
  const el = makeElement('div');

  const nodeText = makeElement('div', 'tree__node-text');
  el.appendChild(nodeText);

  const titleSpan = makeElement('span', 'tree__node-title');
  titleSpan.innerHTML = convertText(title);
  nodeText.appendChild(titleSpan);

  if (subtitle) {
    const subtitleSpan = makeElement('span', 'tree__node-subtitle');
    subtitleSpan.innerHTML = convertText(subtitle);
    nodeText.appendChild(subtitleSpan);
  }

  if (children.length) {
    el.className = 'tree__fork';
    el.appendChild(makeElement('div', 'tree__left-brace'));
    const childContainer = makeElement('div', 'tree__node-children');

    children.map(buildTree).forEach((childNode) => {
      childContainer.appendChild(childNode);
    });

    el.appendChild(childContainer);
  } else {
    el.className = 'tree__leaf';
  }

  return el;
};

const makeLeftBrace = (height) => {
  const el = makeElement('div', 'tree__left-brace');
  const fontSize = 36;  // px
  const baseHeight = 3 * fontSize;
  let repeatsEachSide = 0;

  if (height > baseHeight) {
    const difference = height - baseHeight;
    const repeats = Math.ceil(difference / fontSize);
    repeatsEachSide = Math.ceil(repeats / 2);
  }
  el.appendChild(makeBracePart('top'));
  for (let i = 0; i < repeatsEachSide; i += 1) {
    el.appendChild(makeBracePart('repeat'));
  }
  el.appendChild(makeBracePart('middle'));
  for (let i = 0; i < repeatsEachSide; i += 1) {
    el.appendChild(makeBracePart('repeat'));
  }
  el.appendChild(makeBracePart('bottom'));

  return el;
};

const addBraces = (node) => {
  const childContainer = node.querySelector('.tree__node-children');

  if (childContainer !== null) {
    const { children } = childContainer;
    const firstChild = children[0];
    const lastChild = children[children.length - 1];

    const braceParts = makeLeftBrace(childContainer.offsetHeight);

    requestAnimationFrame(() => {
      const braceContainer = node.querySelector('.tree__left-brace');
      braceContainer.innerHTML = braceParts.innerHTML;
    });

    for (let i = 0; i < children.length; i += 1) {
      addBraces(children[i]);
    }
  }
};

const container = document.getElementById('tree');

const drawTree = () => {
  const tree = buildTree(data);
  container.appendChild(tree);
  requestAnimationFrame(() => {
    const root = container.querySelector('.tree__fork');
    addBraces(root);
  });
};

requestAnimationFrame(drawTree);

const textNodes = document.getElementsByClassName('tree__node-text');
for (let i = 0; i < textNodes.length; i++) {
  const tn = textNodes[i];
  tn.addEventListener('click', (evt) => {
    console.log('click');
    if (evt.currentTarget.classList.contains('tree__fork')) {
      const currentTarget = evt.currentTarget;
      const children = currentTarget.querySelector('.tree__node-children');
      if (children.classList.contains('collapsed')) {
        children.classList.remove('collapsed');
      } else {
        children.classList.add('collapsed');
      }
    }
    evt.stopPropagation();
    return false;
  });
}
