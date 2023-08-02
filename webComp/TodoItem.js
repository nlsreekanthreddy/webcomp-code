class TodoItem extends HTMLElement{
    constructor(){
        super()

        const template = document.createElement("template");
        template.innerHTML = `
        <style>
            h3{color: green} 
            label{
                color: green;
                display: block ;
            }
            description{
                font-size : .65rem;
                font-weight:light;
            }
        </style>
            <label>
            <input type = "checkbox"/>
            <slot></slot>
            <span class="description">
            <slot name= "description"></slot>
            </span>
            </label>
            <h3> custom ele text</h3?
            

            `
// slot is a placeholder for content of html element 
// with web components , can do named slots 

        const shadow = this.attachShadow({mode:"open"}) //open to make modifications to shadow dom with this.shadowRoot 
        // this.innerHTML = "HTML custom element"
        // this.innerHTML = ` <h3>${this.innerText}</h3>` h3 style applied from index.html
        // this.innerHTML = ` <style >h3{color: green} </style><h3>${this.innerText}</h3>`
        //style applied to all h3 elements in dom    *to avoid this one should use shadow DOM
  
        shadow.append(template.content.cloneNode(true))
 
        this.title.innerText =  this.innerText
}
}

customElements.define("todo-item", TodoItem )