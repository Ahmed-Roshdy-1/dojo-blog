import { ref } from "vue";
import { projectFirestore } from "../firebase";
import { doc, getDoc } from "firebase/firestore";

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);
  const url = "http://localhost:3000/posts/" + id;

  const load = async () => {
    const documentRef = doc(projectFirestore, "posts", id);
    getDoc(documentRef).then((docSnapshot) => {
      if (docSnapshot.exists()) {
        // console.log(docSnapshot.data());
        post.value = { ...docSnapshot.data(), id: docSnapshot.id };
        console.log(post.value);
      } else {
        error.value = "The post does not exists";
      }
    });
    try {
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { post, error, load };
};

export default getPost;
