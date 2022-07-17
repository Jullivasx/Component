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
        this.addClasses(classes);
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
     * Добавление классов в комнонент
     * @param {Array} classes 
     * @returns 
     */
    addClasses(classes = []) {
        if (typeof(classes) === 'string') {
            this.addClass(classes);
            return this;
        }
        classes.forEach(_class => this.addClass(_class))
        return this;
    }

    /**
     * Добавление класса в компонент
     * @param {string} _class 
     * @returns 
     */
    addClass(_class) {
        this.element.classList.add(_class);
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

}
