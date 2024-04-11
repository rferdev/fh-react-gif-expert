export const getGifts = async category => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=gbQDuSCAVQ8zJBgFe4nBKmnBDYAf4XN3&q=${category}&limit=10`;
  const resp = await fetch(url);
  const { data } = await resp.json();

  const gifts = data.map(({ id, title, images }) => ({
    id,
    title,
    url: images.fixed_width.url,
  }));

  return gifts;
};
