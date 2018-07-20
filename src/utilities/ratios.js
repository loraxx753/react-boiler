const metallicMeans = x => (Math.sqrt(x ** 2 + 4) - x) / 2
const goldenRatio = x => metallicMeans(x || 1)
const goldenRatioFrom = x => Math.abs(x - goldenRatio) / 2

export default metallicMeans
export { goldenRatio, goldenRatioFrom }
