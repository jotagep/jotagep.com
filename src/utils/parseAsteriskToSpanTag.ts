export default function parseAsteriskToSpanTag(str: string) {
  return str.replace(
    /\*{1,2}(.*?)\*{1,2}/g,
    `<span class="text-green-700 dark:text-orange-500
    }">$1</span>`,
  )
}
