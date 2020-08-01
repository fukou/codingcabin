// https://github.com/tumblr/docs/blob/master/api.md

const name = "codingcabin";
const tags = "cabin-themes";
const apiKey = "EygUfFKmzfMHjUFCtqLwa3K6i8SGLJsiiozHyPEWNFfRrb6O4W";

// https://api.tumblr.com/v2/blog/pitchersandpoets.tumblr.com/posts/photo?tag=new+york+yankees
const url =
  "https://api.tumblr.com/v2/blog/" +
  name +
  ".tumblr.com/posts/photo?api_key=" +
  apiKey;

console.log(url);
const container = document.querySelector(".wrapper__featured--inner__content");

fetch(url)
  .then((res) => res.json())
  .then((data) => {
    let read = data.response;
    console.log(read);

    for (let i = 1; i <= 2; i++) {
      let posts = read.posts[i];
      let { caption, photos } = posts;

      const article = document.createElement("div");
      article.className = "grid-content";
      article.innerHTML = '<div class="body__text">' + caption + "</div>";

      container.appendChild(article);

      const tumblr_blog = document.querySelectorAll(".tumblr_blog");
      for (let j = 0; j < tumblr_blog.length; j++) {
        tumblr_blog[j].parentNode.parentNode.removeChild(
          tumblr_blog[j].parentNode
        );
      }
    } // end of response
  })
  .catch((err) => console.log(err));
