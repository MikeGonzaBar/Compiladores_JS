import { News } from './news.js';

const news = new News;
declare let Handlebars

news.getAll().then(response =>{
  console.log('Response: ', );
  const templateSource = document.getElementById('newsFormat').innerHTML;
  const template = Handlebars.compile(templateSource);
  document.getElementById('news-container').innerHTML = template({
  news: response.data.articles
});
}).catch(err =>{
  console.error('Algo Falló');
})

const searchbttn = document.getElementById("searchButton");

  function search_News() {
    let input = document.getElementById('searchbar').value
    input=input.toLowerCase();
    let x = document.getElementsByClassName('animals');
    news.getOne(x).then(response =>{
    console.log('Response: ', );
    const templateSource = document.getElementById('newsFormat').innerHTML;
    const template = Handlebars.compile(templateSource);
    document.getElementById('news-container').innerHTML = template({
    news: response.data.articles
  });
  }).catch(err =>{
    console.error('Algo Falló');
  })
}