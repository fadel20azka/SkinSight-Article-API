const { doc, setDoc, getDoc, collection,getFirestore,getDocs} = require('firebase/firestore');
const { auth, db } = require('../src/db/firebase');


const addArticle = async (imageUrl, title, description, content) => {
    const docRef = await db.collection('articles').add({
    imageUrl: imageUrl,
    title: title,
    description: description,
    content: content,
  })
    
}

const getArticleData = async (uid) => {
    try {
      const articleDoc = doc(db, 'articles', uid);
      const docSnap = await getDoc(articleDoc);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      return null;
    } 
    catch (error) {
      console.log('Error mendapatkan data artikel:', error);
      throw error;
    }
};


const getAllArticles = async () => {
    try {
      const articlesCollection = collection(db, 'articles');
      const articleSnapshot = await getDocs(articlesCollection);
      const articleList = articleSnapshot.docs.map(doc => {
        return {
          id: doc.id,
          ...doc.data()
        }
      });
      return articleList;
    } catch (error) {
      console.log('Error getting all articles:', error);
      throw error;
    }
  };    

  
module.exports = { addArticle, getArticleData, getAllArticles};
