import config from '../config';

const URL_VIDEOS = `${config.URL_BACKEND}/videos`;

function getAll() {
  return fetch(URL_VIDEOS)
    .then(async (resposta) => {
      if (resposta.ok) {
        const json = await resposta.json();
        return json;
      }
      throw new Error('Não foi possivel pegar os dados');
    });
}

function create(video) {
  return fetch(URL_VIDEOS, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
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
  create,
};
