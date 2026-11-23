/** @param {string} name */
export function greet(name) {
  const trimmed = name.trim();
  if (!trimmed) {
    throw new Error('name is required');
  }
  return `Hello, ${trimmed}! Ready to build games and apps.`;
}