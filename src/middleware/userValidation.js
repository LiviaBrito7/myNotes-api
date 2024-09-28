function isValidEmail(email) {
    //deve conter @, texto antes e depois dele e não deve ter espeaços
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
  
  function isValidPassword(password) {
    // deve conter 8 digitos, numero, caractere especial e letra
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&.])[A-Za-z\d@$!%*#?&.]{8,}$/; 
    return passwordRegex.test(password);
  }
  
  function validateUserData(data) {
    if (!data.name) {
      throw new Error('Nome é obrigatório.');
    }
    if (!data.email) {
      throw new Error('Email é obrigatório.');
    }
    if (!isValidEmail(data.email)) {
      throw new Error('Formato de email inválido.');
    }
    if (!data.password) {
      throw new Error('Senha é obrigatória.');
    }
    if (!isValidPassword(data.password)) {
      throw new Error('A senha deve ter no mínimo 8 caracteres, incluindo um número e um caractere especial.');
    }
  }
  
  module.exports = { isValidEmail, isValidPassword, validateUserData };