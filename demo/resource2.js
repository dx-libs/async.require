const fn = new Promise((resolve, reject) => {
  const ms = 100 + (Math.random() * 500);
  
  setTimeout(() => resolve(`RESOURCE 2 timeout:${ms.toFixed(2)}ms`), ms);
});

module.exports = await fn;