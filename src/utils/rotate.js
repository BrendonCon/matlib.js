export default (point, theta) => {
  let c = Math.cos(theta);
  let s = Math.sin(theta);
  let { x, y } = point; 
  point.x = x * c + y * s;
  point.y = x * s + y * c;
};