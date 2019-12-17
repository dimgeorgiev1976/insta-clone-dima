import Page from './Page'

export default class Router {
    constructor () {
        this.routes = []
        this.route = null
        this.page = null
    }

    add (path, container ) {
        this.routes.push({
            path, container
        })
    }

    update () {
        // Пробежимся по все роуте 
        for (const route of this.routes) {
            // Если да то значит подходящий нам путь /route/
            if ( route.path.match(location.path ) ) {
                // Запоменаем роут, пут каторъй мъй нашли
                this.route = route
                // Oбновляем наша страница, как она въйгледит на данной момент
                this.page = new Page(route.container)
            }
        }
    }
}