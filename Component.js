class Component {
    /**
     * Создание комнопента
     * @param {Object} param
     *      {
     *          tag:string - тип элемента по-умолчанию 'div'
     *          classes:[] - список класов
     *          attrs:{} - список атрибутов
     *      }
     */
    constructor({tag='div', classes=[], attrs={}} = {}) {
        this.element = document.createElement(tag);
        this.addClass(classes);
        this.setAttrs(attrs);
    }

    /**
     * Установка атрибутов в компонент
     * @param {Object} attrs 
     * @returns 
     */
    setAttrs(attrs) {
        Object.entries(attrs).forEach(([key, value]) => {
            this.element.setAttribute(key, value);
        }) 
        return this;
    }

    /**
     * Добавляет стиль
     * @param {String | Array} nameOrNames 
     */
    addClass(nameOrNames) {
        if (typeof(nameOrNames) === 'string') {
            this.element.classList.add(nameOrNames);
        }

        if (Array.isArray(nameOrNames)) {
            nameOrNames.forEach((name) => {
                this.element.classList.add(name);
            });   
        }
        return this;
    }

    /**
     * Удаляет стиль
     * @param {String | Array} nameOrNames 
     */
    removeClass(nameOrNames){
        if (typeof(nameOrNames) === 'string') {
            this.element.classList.remove(nameOrNames);
        }

        if (Array.isArray(nameOrNames)) {
            nameOrNames.forEach((name) => {
                this.element.classList.remove(name);
            });   
        }
        return this;
    }

    /**
     * Добавление элемента в компонент
     * @param {HTMLElement} element 
     * @returns 
     */
    appendElement(element) {
        this.element.appendChild(element);
        return this;
    }

    /**
     * Добавление компонента в элемент
     * @param {HTMLElement} element 
     * @returns 
     */
    appendToElement(element) {
        element.appendChild(this.element);
        return this;
    }

    /**
     * Добавления компонента
     * @param {Component} component 
     * @returns 
     */
    append(component) {
        this.appendElement(component.element);
        return this;
    }

    /**
     * Добавление в компонент
     * @param {COmponent} component 
     * @returns 
     */
    appendTo(component) {
        component.appendElement(this.element);
        return this;
    }

    /**
     * Удаление элемента
     * @param {HTMLElement} element 
     * @returns 
     */
    removeElement(element) {
        this.element.removeChild(element);
        return this;
    }

    /**
     * Удаление из элемента
     * @param {HTMLElement} element 
     * @returns 
     */
    removeToElement(element) {
        element.removeChild(this.element);
        return this;
    }

    /**
     * Удаление компонета
     * @param {Component} component 
     * @returns 
     */
    remove(component) {
        this.removeElement(component.element);
        return this;
    }

    /**
     * Удаление из компонета
     * @param {Component} component 
     * @returns 
     */
    removeTo(component) {
        component.removeElement(this.element);
        return this;
    }

    /**
     * Установить фоновое изображение компонента
     * @param {String} src 
     * @returns 
     */
    backgroundImage(src) {
        this.element.style.backgroundImage = `url(${src})`;
        this.element.style.backgroundPosition = 'center center';
        this.element.style.backgroundSize = 'cover'
        return this;
    }

    /**
     * Установить текст
     * @param {String} text 
     * @returns 
     */
    setText(text) {
        this.element.textContent = text;
        return this;
    }


    #events = {}

    /**
     * Установка события
     * @param {String} name 
     * @param {CallableFunction} callback 
     * @returns 
     */
    addEvent(name, callback) {
        //this.element.addEventListener(name, callback);
        if (!Array.isArray(this.#events[name])) {
            this.#events[name] = [];
            this.element.addEventListener(name, (e) => {
                this.emitEvent(name, e);
            });
        }
        this.#events[name].push(callback);
        return this;
    }

    /**
     * Эмит события
     * @param {String} name 
     * @returns 
     */
    emitEvent(name) {
        if (!Array.isArray(this.#events[name])) return this;
        this.#events[name].forEach(callback => {
            callback();
        })
        return this;
    }

    /**
     * Удаление события
     * @param {String} name 
     * @param {CallableFunction} callback 
     * @returns 
     */
    removeEvent(name, callback) {
        //this.element.removeEventListener(name, callback);
        if (!Array.isArray(this.#events[name])) return this;
        this.#events[name] = this.#events[name].filter(_callback => _callback !== callback);
        return this;
    }

    /**
     * Удаление всех событий
     * @param {String} name 
     * @returns 
     */
    removeEventAll(name) {
        if (!Array.isArray(this.#events[name])) return this;
        this.#events[name] = [];
        return this;
    }

    /**
     * Установить стили элемента
     * @param {Object} styles 
     * @returns 
     */
    setStyle(styles) {
        Object.entries(styles).forEach(([key, value]) => {
            this.element.style[key] = value;
        });
        return this;
    }

    /**
     * Скрыть элемент
     * @returns 
     */
    hide() {
        this.element.hidden = true;
        return this;
    }

    /**
     * Показать элемент
     * @returns
     */
    show() {
        this.element.hidden = false;
        return this;
    }

    /**
     * Установка значения src элемента
     * @param {String} src 
     * @returns 
     */
    setSrc(src) {
        this.element.src = src;
        return this;
    }

    /**
     * Загрушка для метода обновления данных
     * @param {any} data 
     * @returns 
     */
    update(data) {
        return this;
    }

}
