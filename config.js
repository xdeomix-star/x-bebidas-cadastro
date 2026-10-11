/* Configuração ÚNICA do sistema X Bebidas (tela do cliente + aplicativo do balcão).
   Para ligar a planilha, troque SÓ a linha EXEC_URL (o endereço que termina em /exec). Nada mais.
   Este arquivo é público: NUNCA coloque aqui a senha do balcão nem token. */
window.XB_CONFIG = {
  EXEC_URL: 'https://script.google.com/macros/s/AKfycbyFHytAqpg5vxTr3Z2AvbhGNoN1eRFKNDV5jHJPhi5eu5J8sqZ9jWDA0dsOnv1so-GG6Q/exec',                       /* endereço /exec do Apps Script. Vazio = modo de teste (tela) e "não ligado" (balcão) */
  GRUPO_URL: 'https://chat.whatsapp.com/EyL7zeLceuK9L5CiU1uvio',
  GRUPO_TIPO: 'grupo',                /* 'grupo' ou 'canal' */
  BALCAO_URL: 'https://xdeomix-star.github.io/x-bebidas-cadastro/balcao/',
  PCT: 5, DIAS: 7, LIMITE: 6          /* iguais ao script da planilha */
};
