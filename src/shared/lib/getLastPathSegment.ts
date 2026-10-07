export const getLastPathSegment = (pathname: string) => {
  return pathname.split('/').filter(Boolean).at(-1)
}
