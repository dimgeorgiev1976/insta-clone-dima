import Component from '../Component'
import htmlTemplate from './index.html'

export default class Header extends Component {
    constructor () {
        super ('header')
    }

    // Meтод въйзъйват строчку Html 
    getHtmlTemplate () {
        return  htmlTemplate
    }
}  