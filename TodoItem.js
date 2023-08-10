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
      

            `

        const shadow = this.attachShadow({mode:"open"}) //open to make modifications to shadow dom with this.shadowRoot 
        shadow.append(template.content.cloneNode(true))
 
        // this.title.innerText =  this.innerText
}
}


customElements.define("todo-item", TodoItem );
export {
    TodoItem
};