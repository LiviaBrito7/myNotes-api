function isValidContent(content) {
    if (content.length > 300) {
        return false;
    }
    return true;
}

  function validateNoteData(data) {
    if (!data.content) {
      throw new Error('O conteúdo é obrigatório');
    }
    if (!data.title) {
      throw new Error('O título é obrigatório.');
    }
    if (!data.userId) {
      throw new Error('Usuário Inválido');
    }
    if (!isValidContent(data.content)) {
      throw new Error('A nota só pode conter até 300 caracteres');
    }
  }
  
  module.exports = { isValidContent, validateNoteData };