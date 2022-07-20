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
        this.addAttrs(attrs);
    }

    /**
     * Добавление атрибутов в компонент
     * @param {Object} attrs 
     * @returns 
     */
    addAttrs(attrs) {
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

}
