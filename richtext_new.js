const getSelection = function () {
    if (window && window.getSelection) {
        return window.getSelection();
    } else if (document && document.getSelection) {
        return document.getSelection();
    } else if (document && document.selection) {
        return document.selection.createRange().text;
    } else {
        return null;
    }
}

async function execCommandStyle() {
    const selection = getSelection();
    console.log(selection);
    if (!selection) {
        return;
    }
    const anchorNode = selection.anchorNode;

    if (!anchorNode) {
        return;
    }
    const container =
        anchorNode.nodeType !== Node.TEXT_NODE
            && anchorNode.nodeType !== Node.COMMENT_NODE ?
            anchorNode : anchorNode.parentElement;
}

const boldButton = document.querySelector("button.btn[data-command-value=\"format:bold\"]");
boldButton.addEventListener("click",()=>{
    execCommandStyle();
})

