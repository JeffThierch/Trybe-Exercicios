const tokenGenerator = (tokenLength) => {
  let token = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  const characterLength = characters.length;
  
  for(let index = 0; index < tokenLength; index += 1 ) {
    token += characters.charAt(Math.floor(Math.random() * characterLength))
  }

  return token
}

module.exports = {tokenGenerator};