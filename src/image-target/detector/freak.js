// 37 points = 6 rings x 6 points per ring + 1 center
const FREAK_RINGS = [
  // ring 5
  {
    sigma: 0.55,
    points: [
      [-1.0, 0.0],
      [-0.5, -0.866025],
      [0.5, -0.866025],
      [1.0, -0.0],
      [0.5, 0.866025],
      [-0.5, 0.866025],
    ],
  },
  // ring 4
  {
    sigma: 0.475,
    points: [
      [0.0, 0.930969],
      [-0.806243, 0.465485],
      [-0.806243, -0.465485],
      [-0.0, -0.930969],
      [0.806243, -0.465485],
      [0.806243, 0.465485],
    ],
  },
  // ring 3
  {
    sigma: 0.4,
    points: [
      [0.847306, -0.0],
      [0.423653, 0.733789],
      [-0.423653, 0.733789],
      [-0.847306, 0.0],
      [-0.423653, -0.733789],
      [0.423653, -0.733789],
    ],
  },
  // ring 2
  {
    sigma: 0.325,
    points: [
      [-0.0, -0.741094],
      [0.641806, -0.370547],
      [0.641806, 0.370547],
      [0.0, 0.741094],
      [-0.641806, 0.370547],
      [-0.641806, -0.370547],
    ],
  },
  // ring 1
  {
    sigma: 0.25,
    points: [
      [-0.595502, 0.0],
      [-0.297751, -0.51572],
      [0.297751, -0.51572],
      [0.595502, -0.0],
      [0.297751, 0.51572],
      [-0.297751, 0.51572],
    ],
  },
  // ring 0
  {
    sigma: 0.175,
    points: [
      [0.0, 0.362783],
      [-0.314179, 0.181391],
      [-0.314179, -0.181391],
      [-0.0, -0.362783],
      [0.314179, -0.181391],
      [0.314179, 0.181391],
    ],
  },
  // center
  {
    sigma: 0.1,
    points: [[0, 0]],
  },
];
const FREAKPOINTS = [];
for (let r = 0; r < FREAK_RINGS.length; r++) {
  const sigma = FREAK_RINGS[r].sigma;
  for (let i = 0; i < FREAK_RINGS[r].points.length; i++) {
    const point = FREAK_RINGS[r].points[i];
    FREAKPOINTS.push([sigma, point[0], point[1]]);
  }
}
export { FREAKPOINTS };
export default {
  FREAKPOINTS,
};
