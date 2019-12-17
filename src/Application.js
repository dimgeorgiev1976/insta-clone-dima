
import Router from './Router'

export default class Application {
    constructor (args = {}) {
        this.root = args.el

        this.router = new Router
    }
    // Обновяем ту картиничку каторую у нас есть
    update () {
        this.router.update()
        // Очищаем сначале
        this.root.innerHTML = ''
        // Добавляем в this root вот ето страничку через route и 
        // просто отображает
        this.root.append(this.router.page.fragment)
    }
}