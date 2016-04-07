function curry (f, ...args) {
  const c = (...fArgs) =>
    (fArgs.length >= f.length)
      ? f.apply(this, fArgs)
      : (...cArgs) => c(...fArgs, ...cArgs)

  return c(...args)
}
