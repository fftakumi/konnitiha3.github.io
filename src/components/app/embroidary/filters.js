export const flattenFilter = (size) => [...Array(size)].map(() => Array(size).fill(1/size**2))
export const laplacianFilter = [[0, 1, 0], [1, -4, 1], [0, 1, 0]]
export const edgeX = [[1, 0, -1],[2, 0, -2],[1, 0, -1]]
export const edgeY = [[1, 2, 1],[0, 0, 0],[-1,-2,-1]]