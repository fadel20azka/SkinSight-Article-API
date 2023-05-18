const Joi = require('joi');
const {addArticle,getArticleData} = require('../src/handler');

const addArticleRoute = {
    method: 'POST',
    path: '/add-article',
    handler: async (request,h)=> {
      const {imageUrl,title,description,content} = request.payload;
      try{
        const article = await addArticle(imageUrl,title,description,content);
        return h.response({message:"article berhasil ditambah"}).code(201);
      } catch (error) {
        console.error('Error registering user:', error);
        return h.response({ message: error.message }).code(400);
      }
    }
}

const getArticleRoute = {
    method: 'GET',
    path: '/article/{uid}',
    handler: async (request, h) => {
      const { uid } = request.params;
      try {
        const data = await getArticleData(uid);
        if (data) {
          return h.response({imageUrl: data.imageUrl, title: data.title, description: data.description, content: data.content }).code(200);
        } else {
          return h.response('Artikel tidak ditemukan').code(404);
        }
      } catch (error) {
        console.error('Error saat mengambil data artikel:', error);
        return h.response('Error saat mengambil data artikel').code(500);
      }
    },
  };

module.exports = [addArticleRoute,getArticleRoute];