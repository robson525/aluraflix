import config from '../config';

const URL_CATEGORIAS = `${config.URL_BACKEND}/categorias`;

function getAll() {
  return fetch(URL_CATEGORIAS)
    .then(async (resposta) => {
      if (resposta.ok) {
        const json = await resposta.json();
        return json;
      }
      throw new Error('Não foi possivel pegar os dados');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIAS}?_embed=videos`)
    .then(async (resposta) => {
      if (resposta.ok) {
        const json = await resposta.json();
        return json;
      }
      throw new Error('Não foi possivel pegar os dados');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
