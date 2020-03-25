import TAU from './constants/tau.js';
import PHI from './constants/phi.js';

import Circle from './geometry/2d/Circle.js';
import Ellipse from './geometry/2d/Ellipse.js';
import LineSegment from './geometry/2d/LineSegment.js';
import Point from './geometry/2d/Point.js';
import Polygon from './geometry/2d/Polygon.js';
import Rectangle from './geometry/2d/Rectangle.js';
import Square from './geometry/2d/Square.js';

import Cone from './geometry/3d/Cone.js';
import Cube from './geometry/3d/Cube.js';
import Cylinder from './geometry/3d/Cylinder.js';
import Sphere from './geometry/3d/Sphere.js';

import Mat2x2 from './matrices/Mat2x2.js';

import Polar2D from './polar/Polar2D.js';

import clamp from './utils/clamp.js';
import degrees from './utils/degrees.js';
import distance from './utils/distance.js';
import dot from './utils/dot.js';
import lerp from './utils/lerp.js';
import frac from './utils/frac.js';
import map from './utils/map.js';
import normalize from './utils/normalize.js';
import radians from './utils/radians.js';
import random from './utils/random.js';
import randomInt from './utils/randomInt.js';
import rotate from './utils/rotate.js';
import smoothstep from './utils/smoothstep.js';
import step from './utils/step.js';

import Vec2 from './vectors/Vec2.js';
import Vec3 from './vectors/Vec3.js';
import Vec4 from './vectors/Vec4.js';

export default {
  TAU,
  PHI,

  Circle,
  Ellipse,
  LineSegment,
  Point,
  Polygon,
  Rectangle,
  Square,

  Cone,
  Cube,
  Cylinder,
  Sphere,

  Mat2x2,

  Polar2D,

  clamp,
  degrees,
  distance,
  dot,
  lerp,
  frac,
  map,
  normalize,
  radians,
  random,
  randomInt,
  rotate,
  smoothstep,
  step,

  Vec2,
  Vec3,
  Vec4
};