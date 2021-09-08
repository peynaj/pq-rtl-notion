console.log("===> Hello Notion from background.js of pq-rtl-notion.")

const horizontalScroller = document.getElementsByClassName("notion-scroller vertical horizontal");
console.log("pq-rtl-notion", {horizontalScroller, length: horizontalScroller.length});
for (let i = 0; i < horizontalScroller.length; i++) {
    let div = horizontalScroller[i];
    div.scrollLeft = 1_000_000;  // not work before page full load

    let scrollElem1 = document.createElement("button");
    scrollElem1.innerText = ">"
    scrollElem1.classList.add("scroll-to-right")
    scrollElem1.title = ">> Scroll To Right >>"
    scrollElem1.onclick = () => {
        div.scrollLeft = 1_000_000;
    }
    div.appendChild(scrollElem1)

    let scrollElem2 = document.createElement("button");
    scrollElem2.innerText = "^"
    scrollElem2.classList.add("scroll-to-top")
    scrollElem2.title = "^^ Scroll To Top ^^"
    scrollElem2.onclick = () => {
        div.scrollTop = 0;
    }
    div.appendChild(scrollElem2)
}


let extensionNameElem = document.createElement("a");
extensionNameElem.innerText = "pq"
extensionNameElem.title = "pq-rtl-notion is loaded"
extensionNameElem.href = "https://github.com/peynaj/pq-rtl-notion"
extensionNameElem.target = "_blank"
extensionNameElem.classList.add("extension-name")
document.body.appendChild(extensionNameElem)