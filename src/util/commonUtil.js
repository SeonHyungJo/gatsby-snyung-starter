export function classNames (classList) {
  if (classList === null || classList === undefined) {
    return ''
  }

  const textList = classList.split(', ')
  return textList.join(' ')
}
