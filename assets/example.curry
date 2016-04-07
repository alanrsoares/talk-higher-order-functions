// allows any function of fixed arity to be partially applicable
function curry (f, ...args) {
  const c = (...fArgs) =>
    (fArgs.length >= f.length)
      ? f.apply(this, fArgs)
      : (...cArgs) => c(...fArgs, ...cArgs)

  return c(...args)
}
