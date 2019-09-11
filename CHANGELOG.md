# Changelog

## 12/09/2019
### Added
- Area, perimeter methods to varying geometry classes

### Update 
- Renamed points to vertices for `Polygon` type

### Fixed
- Build wasnt building due to typo in `index.js`

### Notes
- Will need to abstract some base types here

## 02/09/2019
### Added
- 2D distance function
- distance function spec
- step function from GLSL
- spec for step function

## 30/08/2019
### Added
- To the changelog finally, sorry I forgot about all this.
- Additional specs for `Vec2` class
- Added `cross` to `Vec3` class, static as well
- Added a bunch of common operations and methods to the `Vec4` class
  - Definitely need a parent class of some sort here.

### Update
- Update to `Vec3` class for `limit` method, looking like a parent abstraction isn't a base idea

### Notes
- Matrix and Vector classes may need abstract parents, will think on this.
