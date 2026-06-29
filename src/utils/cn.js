/**
 * Merges multiple class names into a single space-separated string, filtering out falsy values.
 * @param {...(string|boolean|undefined|null)} classes - The class names to merge.
 * @returns {string} The merged class names string.
 */
export function cn(...classes) {
  return classes.filter(Boolean).join(' ').trim()
}
