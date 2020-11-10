function checkMediaQuery () {
  let currentBreakpoint = null

  // Function for detecting breakpoint from the content of pseudo element
  const checkBreakpoint = function (element) {
    const breakpoint = window.getComputedStyle(document.body, ':after').content.replace(/['"]+/g, '')
    if (currentBreakpoint != null && currentBreakpoint === breakpoint) {
      return false
    }
    currentBreakpoint = breakpoint
    return currentBreakpoint
  }

  return checkBreakpoint()
}

module.exports = checkMediaQuery
