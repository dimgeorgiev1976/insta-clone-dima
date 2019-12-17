import Component from '../Component'
import htmlTemplate from './index.html'

export default class Comment extends Component {
    constructor () {
        super ('comment')
        //  Условия по умолчание 

        }
    // Meтод въйзъйват строчку Html 
    getHtmlTemplate () {
        return  htmlTemplate
    }
}  