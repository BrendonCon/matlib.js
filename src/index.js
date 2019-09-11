import TAU from './constants/tau.js';
import PHI from './constants/phi.js';

import Circle from './geometry/Circle.js';
import Ellipse from './geometry/Ellipse.js';
import Line from './geometry/Line.js';
import Point from './geometry/Point.js';
import Polygon from './geometry/Polygon.js';
import Rectangle from './geometry/Rectangle.js';
import Square from './geometry/Square.js';

import Mat2x2 from './matrices/Mat2x2.js';

import Polar2D from './polar/Polar2D.js';

import clamp from './utils/clamp.js';
import degrees from './utils/degrees.js';
import distance from './utils/distance.js';
import lerp from './utils/lerp.js';
import frac from './utils/frac.js';
import map from './utils/map.js';
import normalize from './utils/normalize.js';
import radians from './utils/radians.js';
import random from './utils/random.js';
import randomInt from './utils/randomInt.js';
import step from './utils/step.js';

import Vec2 from './vectors/Vec2.js';
import Vec3 from './vectors/Vec3.js';
import Vec4 from './vectors/Vec4.js';

export default {
  TAU,
  PHI,

  Circle,
  Ellipse,
  Line,
  Point,
  Polygon,
  Rectangle,
  Square,

  Mat2x2,

  Polar2D,

  clamp,
  degrees,
  distance,
  lerp,
  frac,
  map,
  normalize,
  radians,
  random,
  randomInt,
  step,

  Vec2,
  Vec3,
  Vec4
};