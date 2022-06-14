import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  let divCard = document.createElement('div');
  let divHeadline = document.createElement('div');
  let divAuthor = document.createElement('div');
  let divImg = document.createElement('div');
  let imgPhoto = document.createElement('img');
  let spanBy = document.createElement('span');
  
  divCard.setAttribute('class', 'card');
  divHeadline.setAttribute('class', 'headline');
  divAuthor.setAttribute('class', 'author');
  divImg.setAttribute('class', 'img-container');
  imgPhoto.setAttribute('src', `${article.authorPhoto}`);

  divHeadline.textContent = `${article.headline}`;
  spanBy.textContent = `${article.authorName}`;

  divImg.appendChild(imgPhoto);
  divAuthor.appendChild(divImg); 
  divAuthor.appendChild(spanBy);
  divCard.appendChild(divHeadline);
  divCard.appendChild(divAuthor);

  return divCard;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
  console.log('selector:', selector);
  axios.get('http://localhost:5001/api/articles')
  .then(resp => {
    let dataArray = [
      resp.data.articles.javascript, 
      resp.data.articles.bootstrap,  
      resp.data.articles.technology, 
      resp.data.articles.jquery,
      resp.data.articles.node
    ];

    for (let index = 0; index < dataArray.length; index++) {
      dataArray[index].forEach(element => {
        document.querySelector(selector).appendChild(Card(element));
      })
    }
  });
}

export { Card, cardAppender }