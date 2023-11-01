module.exports = {
  eleventyComputed: {
    "author": data => (data.author) ? data.author : data.settings.author,
    "permalink": data => (data.permalink) ? data.permalink : filters.slugify(data.title) + "/",
  },
  "layout": "product.pug",
  "tags": ["product"],
  "alpine": true
};