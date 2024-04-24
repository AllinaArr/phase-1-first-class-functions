function receivesAFunction(callback) {
  return callback();
}

function returnsANamedFunction() {
  return function named() {
    console.log("before all");
  };
}

function returnsAnAnonymousFunction() {
  return () => "before all";
}
