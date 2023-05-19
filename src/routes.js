const Joi = require('joi');
const {addArticle,getArticleData, getAllArticles} = require('../src/handler');

const addArticleRoute = {
    method: 'POST',
    path: '/add-article',
    handler: async (request,h)=> {
      const {imageUrl,title,description,content} = request.payload;
      try{
        const article = await addArticle(imageUrl,title,description,content);
        const response = h.response({
            status: 'Success',
            message: 'artikel berhasil ditambah',
          }
          );
          response.code(200);
          return response;
      } catch (error) {
        const response = h.response({
            status: 'Failed',
            message: 'Error menambahkan artikel',
        })
        response.code(500);
        return response;
    }
    }
}

const getArticleRoute = {
    method: 'GET',
    path: '/article/{uid}',
    handler: async (request, h) => {
      const { uid } = request.params;
        try {
          const article = await getArticleData(uid);
          const response = h.response({
            status: 'Success',
            message: 'Mendapatkan data artikel berhasil',
            data:{
              imageUrl: article.imageUrl,
              title: article.title,
              description: article.description,
              content: article.content
            }});
            response.code(200);
            return response;
        } 
      catch (error) {
      const response = h.response({
          status: 'Failed',
          message: 'Error mendapatkan data artikel',
      })
      response.code(500);
      return response;
    }
  },
};




const getAllArticlesRoute = {
  method: 'GET',
  path: '/article',
  handler: async (request, h) => {
     const article = await getAllArticles();
    try {
      const article = await getAllArticles();
      const response = h.response({
        status: 'Success',
        message: 'Mendapatkan data seluruh artikel berhasil',
        data:article
      });
      response.code(200);
      return response;
    }  catch (error) {
      const response = h.response({
          status: 'Failed',
          message: 'Error mendapatkan data seluruh artikel',
      })
      response.code(500);
      return response;
    }
  },
};



module.exports = [addArticleRoute,getArticleRoute,getAllArticlesRoute];