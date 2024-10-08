function loadPosts(){
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => displayPosts(data))
}

function displayPosts(posts){
 const postsContainer = document.getElementById('posts-container');
  for(const post of posts){
    console.log(post);
   const div = document.createElement('div');
   div.classList.add('post')
   div.innerHTML =`
   <h3>UserId:${post.userId}</h3>
   <h4>Post Title:${post.title}</h4>
   <p>Post Description:${post.body}</p>
   `
   postsContainer.appendChild(div)
  }
}

loadPosts()

