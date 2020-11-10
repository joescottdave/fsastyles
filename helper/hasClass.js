function hasClass (elem, cls) {
  const str = ' ' + elem.className + ' '
  const testCls = ' ' + cls + ' '
  return (str.indexOf(testCls) !== -1)
}

module.exports = hasClass
