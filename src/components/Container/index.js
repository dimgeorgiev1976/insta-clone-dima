import Component from '../Component'
import htmlTemplate from './index.html'

export default class Container extends Component {
    constructor () {
        super ('container')

        // Поле для добавление какие - то дочернеми елеменетъй нашего Container
        this.components = []
    }

    add (component, comment) {
        this.components.push(component)
    }

    // Eто render не позволит въйзаваться метод render у 
    // class Component
    render () {
        // въйзаваeм родительски метод render
        const element = super.render()
        // Хачу дабавит всю что находиться в components ,
        // добавляем все виртуальнъй дерeва в append 
        element.append(...this.components.map( x => x.render()))
        return element
    }

    // Meтод въйзъйват строчку Html 
    getHtmlTemplate () {
        return  htmlTemplate
    }
}  