import { ref } from "vue";

import { projectFirestore } from "../firebase";

import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);
  const url = "http://localhost:3000/posts";

  const load = async () => {
    try {
      console.log();
      const refs = collection(projectFirestore, "posts");
      const q = query(refs, orderBy("createdAt", "desc")); // git docs by timestamp

      // onSnapshot to git real-time data ;

      onSnapshot(q, (snapshot) => {
        posts.value = snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      });

      // const postsSnapshot =
      // await getDocs(q).then((querySnapshot) => {
      //   querySnapshot.forEach((doc) => {
      //     posts.value.push({ ...doc.data(), id: doc.id });
      //   });
      // console.log(posts.value);
      // });
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { posts, error, load };
};

export default getPosts;
