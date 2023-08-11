class Popup {
    constructor() {
        this.popup = document.createElement('div');
        this.popup.classList.add("popupjs");
        this.availableThemes = ['dark', 'light'];
    }
    /**
     * Updates the content of the popup element with the provided message.
     * @param {string} msg - The message to be displayed in the popup element.
     * @return {Popup} - Returns the updated instance of the object.
    */
    update(msg) {
        this.popup.innerHTML = msg;
        return this;
    }
    /**
     * Set the theme for the popup.
     * @param {string} theme - The theme to set for the popup.
     * @return {Popup} - Returns the current instance of the object.
    */
    theme(theme) {
        this.popup.classList.add("popup-theme-"+theme);
        return this;
    }
    /**
     * Sets the CSS properties of the popup element.
     * @param {string|object} css - The CSS properties to set. 
     *     If a string is provided, it is treated as the innerHTML of the popup element.
     *     If an object is provided, its properties are used to set the style of the popup element.
     * @throws {Error} Invalid CSS object
     * @return {Popup} - Returns the instance of the class for method chaining.
    */
    CSS(css) {
        const nativeType = Object.prototype.toString.call(css);
        if (nativeType === '[object String]') {
            this.popup.innerHTML = css;
        } else if (nativeType === '[object Object]') {
            for (const key in css) {
                this.popup.style[key] = css[key];
            }
        } else {
            throw new Error('Invalid CSS object');
        }
        return this;
    }
    /**
     * Animate the popup element with the specified keyframesId.
     * @param {string} keyframesId - The identifier of the keyframes to be applied to the animation.
     *                              Must be either "bottom" or "top".
     * @throws {Error} Invalid keyframesId - If the keyframesId is not a string or is not "bottom" or "top".
     * @return {Popup} The current instance of the object.
    */
    animate(keyframesId) {
        if (typeof keyframesId !== 'string') throw new Error('Invalid keyframesId');
        if (keyframesId !== "bottom" && keyframesId !== "top") throw new Error('Invalid keyframesId');
        this.popup.classList.add("popup-animation-"+keyframesId);
        return this;
    }
    
    /**
     * Sets the position of the popup based on the given side.
     *
     * @param {string} side - The side of the popup. Possible values are 'top left', 'top right', 'bottom right', 'bottom left'.
     * @throws {Error} Invalid side
     * @return {Popup} The current instance of the object.
    */
    displaySide(side) {
        switch (side) {
            case 'top left':
                this.popup.classList.add("popup-top-left");
                break;
            case 'top right':
                this.popup.classList.add("popup-top-right");
                break;
            case 'bottom right':
                this.popup.classList.add("popup-bottom-right");
                break;
            case 'bottom left':
                this.popup.classList.add("popup-bottom-left");
                break;
            default:
                throw new Error('Invalid side');
        }
        return this;
    }
    /**
     * Initializes the function with the given settings object.
     *
     * @param {object} settings - The settings object.
     * @param {string} settings.msg - The message.
     * @param {string} [settings.theme="light"] - The theme.
     * @param {string} [settings.side="top right"] - The display side.
     * @param {string} [settings.animation="bottom"] - Animates from bottom.
     * @param {string} [settings.animation="top"] - Animates from top.
     * @param {object|string} [settings.css] - The CSS styles.
     * @throws {Error} Invalid settings object if the settings parameter is not an object.
     * @throws {Error} Invalid msg if the msg property is not a string.
     * @returns {Popup} The initialized object.
    */
    init(settings) {
        const nativeType = Object.prototype.toString.call(settings);
        if (nativeType !== '[object Object]') throw new Error('Invalid settings object');
        if (typeof settings.msg !== 'string') throw new Error('Invalid msg');
        if (typeof settings.theme !== 'string') this.theme("light"); else this.theme(settings.theme);
        if (typeof settings.side !== 'string') this.displaySide('top right'); else this.displaySide(settings.side);
        if (typeof settings.animation !== 'string') this.animate("top"); else this.animate(settings.animation);
        this.update(settings.msg);
        if ("css" in settings && (Object.prototype.toString.call(settings.css) === "[object Object]" || typeof settings.css === 'string')) this.CSS(settings.css);
        return this;
    }
    /**
     * Appends the popup element to the specified root element or to the document body if no root element is provided.
     * @param {Element} [root=document.body] - The root element to which the popup element will be appended.
     * @throws {Error} Invalid root - If the root element is provided and is not an instance of Element.
     * @return {Popup} - Returns the current object for method chaining.
    */
    append(root) {
        if (!root) root = document.body;
        if (!(root instanceof Element)) throw new Error('Invalid root');
        root.appendChild(this.popup);
        return this;
    }
    /**
     * Displays the popup.
     * @returns {Popup} - The current object.
    */
    show() {
        this.popup.classList.add('popup-show');
        return this;
    }
    /**
     * Hides the popup element.
     * @return {Popup} - The instance of the object to allow method chaining.
    */
    hide() {
        this.popup.classList.remove('popup-show');
        return this;
    }
}

export default Popup;