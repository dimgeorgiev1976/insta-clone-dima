import Application from  './Application'

import Header from './components/Header'
import Container from './components/Container'
import Post from './components/Post'
import Comment from './components/Comment'

import store from './fakedata.json'

const app = new Application ({
    el: document.querySelector('#app')
})
const header = new Header
const container = new Container 

// Пробегаемся по масиву, создадем отдельнъй екземпляр 
// класса Post и передаюм етих даннъй

for ( const post of store.posts ) {
    // добавляем содержимое в посту
    container.add(new Post(post))
}

// передаем не масив а сразу ленивую генерацию екземпляра post
// app.router.add('/', () => require('./pegaes/IndexPage') )
app.router.add('/', [header, container] )

app.update() 

console.log(app)
