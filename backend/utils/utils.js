export function getNextResetDate() {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 1);
}

export function isEmpty(value) {
  return (
    value === undefined ||
    value === null ||
    value === "" ||
    (typeof value === "string" && value.trim() === "")
  );
}

export function sanitizeAppName(value) {
  return value
    .replace(/^['"]+|['"]+$/g, "") // remove wrapping quotes
    .trim();
}
