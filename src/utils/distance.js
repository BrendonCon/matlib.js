export default (u, v) => {
  return Math.hypot(
    u.x - v.x, 
    u.y - v.y
  );
};