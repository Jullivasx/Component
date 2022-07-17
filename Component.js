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

    addAttrs(attrs) {
        Object.entries(attrs).forEach(([key, value]) => {
            this.element.setAttribute(key, value);
        }) 
        return this;
    }

    addClasses(classes = []) {
        if (typeof(classes) === 'string') {
            this.addClass(classes);
            return this;
        }
        classes.forEach(_class => this.addClass(_class))
        return this;
    }

    addClass(_class) {
        this.element.classList.add(_class);
        return this;
    }

    appendElement(element) {
        this.element.appendChild(element);
        return this;
    }

    appendToElement(element) {
        element.appendChild(this.element);
        return this;
    }

    append(component) {
        this.appendElement(component.element);
        return this;
    }

    appendTo(component) {
        component.appendElement(this.element);
        return this;
    }

    removeElement(element) {
        this.element.removeChild(element);
        return this;
    }

    removeToElement(element) {
        element.removeChild(this.element);
        return this;
    }

    remove(component) {
        this.removeElement(component.element);
        return this;
    }

    removeTo(component) {
        component.removeElement(this.element);
        return this;
    }

}
