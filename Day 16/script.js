const fetchPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await response.json();
    console.log(posts);

    const postList = document.querySelector("#posts_list");
    posts.forEach((el, ind) => {
      const li = document.createElement("li");
      li.textContent = el.title;
      postList.appendChild(li);
    });
  } catch (err) {
    console.log("Unable to get the Data", err.message);

    const postList = document.querySelector("#posts_list");
    const li = document.createElement("li");
    li.textContent = "Data not loaded";
    postList.appendChild(li);
  }
};

fetchPosts();
