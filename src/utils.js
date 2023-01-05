function secondsToTime(seconds) {
  return new Date(1000 * seconds)
  .toISOString()
}

export {
    secondsToTime
}