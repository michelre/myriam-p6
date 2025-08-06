import './style.css'
import { getTitles } from './api.js'

const createMovieList = (titles) => {
    const app = document.querySelector('#app')
    const listTitles = document.createElement('ul')
    titles.forEach(title => {
      const element = document.createElement('li')
      element.innerText = title.title
      listTitles.appendChild(element)
    });
    app.appendChild(listTitles)
}


getTitles(3).then(response => {
  createMovieList(response.results)
})
