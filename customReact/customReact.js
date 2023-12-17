function customRender(reactElement,container){

    /*
    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href',reactElement.prpos.href)
    domElement.setAttribute('target', reactElement.prpos.target)
    container.appendChild(domElement);
    */

    const domElement=document.createElement(reactElement.type);
    domElement.innerHTML= reactElement.children;
    for (const prop in reactElement.prpos) {
        if (prop == 'children') {
            continue;
        }
        domElement.setAttribute(prop,reactElement.prpos[prop])
    }
    container.appendChild(domElement);
}

const reactElement ={
    type: "a",
    prpos: {
        href: 'https://google.com',
        target: "_blank"
    },
    children: 'click me to visit Google'
}

// React treat like below code
// const reactElement =React.createElement(
//     "a",
//     {
//         href: 'https://google.com',
//         target: "_blank"
//     },
//     'click me to visit Google'
//     )

const mainContainer = document.querySelector("#root");

customRender(reactElement,mainContainer)