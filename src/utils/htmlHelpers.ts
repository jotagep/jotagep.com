export const replaceId = (html: string, id: string) => {
  const trimmedHtml = html.trim()
  const idRegex = new RegExp(`id="([^"]*)"`)
  const tagRegex = new RegExp(`<([a-z0-9]+)`)

  if (idRegex.exec(trimmedHtml)) {
    return trimmedHtml.replace(idRegex, `id="${id}"`)
  } else {
    return trimmedHtml.replace(tagRegex, `$& id="${id}"`)
  }
}
