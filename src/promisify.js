function promisify(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      const cb = (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      };

      const _args = args.concat([cb]);

      fn.apply(null, _args);
    });
  };
}

module.exports = promisify;
