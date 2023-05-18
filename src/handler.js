const { doc, setDoc, getDoc} = require('firebase/firestore');
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
      const userDoc = doc(db, 'articles', uid);
      const docSnap = await getDoc(userDoc);
      if (docSnap.exists()) {
        return docSnap.data();
      }
      return null;
    } catch (error) {
      console.log('Error mendapatkan data artikel:', error);
      throw error;
    }
  };
  
module.exports = { addArticle, getArticleData};
