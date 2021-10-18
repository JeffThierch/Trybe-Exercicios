const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};
it('Testa a funcao Uppercase toBe BLA', (done) => {
  uppercase('bla', (result)  => {
    try {
      expect(result).toBe('BLA');
      done()
    }
    catch (err) {
      done(err)
    }
  })
})

it('Testa a funcao Uppercase toBe "1" ', (done) => {
  uppercase('1', (result)  => {
    try {
      expect(result).toBe('1');
      done()
    }
    catch (err) {
      done(err)
    }
  });
});