const uppercase = (str, callback) => {
  setTimeout(() => {
    callback(str.toUpperCase());
  }, 500);
};

uppercase('1', console.log)


test('Testa a funcao Uppercase com retorno correto', (done) => {
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

test('Testa a funcao Uppercase com retorno de numero', (done) => {
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