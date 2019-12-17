import Component from '../Component'
import htmlTemplate from './index.html'

export default class Post extends Component {
    constructor (originalArgs = {}) {
        super ('post')
        //  Условия по умолчание 
        const args = {
            user : {
                name : 'NotName',
                family : 'NotFamily',
                image : 'Oops'
            }, 
            content : {
                description : '',
                image : 'Oops',
                tags : []
            },
            comments : [],

            ...originalArgs
        }
        // создаем свой собственнъй обекте и кланируем все даннъй
        this.user = {
            name :  args.user.name ,
            family : args.user.family ,
            image : args.user.image
        }

        this.content = {
            description : args.content.description,
            image : args.content.image,
            tags : args.content.tags.slice() ,
        }

        this.comments = args.comments.map( x => ({
            user : {
                name : x.user.name ,
                family : x.user.family ,
                image : x.user.image
            },
            content : x.content
        }))
    }

    // Meтод въйзъйват строчку Html 
    getHtmlTemplate () {
        // заменят строчку чут-чут переопределяем render
        // въйзъйват супер рендер и его-же возвращат но в 
        // промеждутке будет вставлят коментарий
        
               return  htmlTemplate
            .replace(/{%user.name%}/g, this.user.name)
            .replace(/{%user.family%}/g, this.user.family)
            .replace(/{%user.image%}/g, this.user.image)
            .replace(/{%content.image%}/g, this.content.image)
            .replace(/{%comments.image%}/g, this.comments.image)
    }

}  