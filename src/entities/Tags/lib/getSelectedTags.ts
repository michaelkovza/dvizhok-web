export function getSelectedTags(tags: string[], id: string): string[] {
  let result: string[] = []

  if (tags.includes(id)) {
    result = tags.filter((_) => _ !== id)
  } else {
    result = [...tags, id]
  }

  return result
}
