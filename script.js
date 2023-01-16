window.onload = () => {

    const toolBar = document.getElementById("toolbar");
    const actionButtons = toolBar.querySelectorAll(".btn[data-command-type=\"action\"]");
    const rtEditorElement = document.getElementById("richtext-editor");
    const rtEditableAreaElement = rtEditorElement.querySelector(".input-output");
    const mdEditorElement = document.getElementById("markdown-editor");
    const mdEditableAreaElement = mdEditorElement.querySelector(".input-output");

    let editorType = "rt";
    rtEditableAreaElement.focus();

    toolBar.addEventListener("click", async (e) => {

        const eventPath = e.composedPath();
        let targetActionButton = null;
        for (let i = 0; i < eventPath.length; i++) {
            if (eventPath[i].nodeType === 1 &&
                eventPath[i].nodeName.toLowerCase() === "button" &&
                eventPath[i].dataset.commandType === "action") {
                targetActionButton = eventPath[i];
                break;
            }
        }

        if (targetActionButton === null) return;

        let commandValuesArr = targetActionButton.dataset.commandValue.split(":");

        switch (commandValuesArr[0]) {
            case "format":
                document.execCommand(commandValuesArr[1]);
                break;
            case "formatBlock":
                document.execCommand("formatBlock", false, "<" + commandValuesArr[1] + ">");
                break;
            case "insertFormat":
                console.log(commandValuesArr[1]);
                break;

            default:
                break;
        }

    })

    rtEditableAreaElement.addEventListener("focus", () => {
        console.log("Focus in richText editor");
        editorType = "rt";
    })
    rtEditableAreaElement.addEventListener("blur", () => {
        console.log("Focus out richText editor");
    })

    mdEditableAreaElement.addEventListener("focus", () => {
        console.log("Focus in markDown editor");
        editorType = "md";
    })
    mdEditableAreaElement.addEventListener("blur", () => {
        console.log("Focus out markDown editor");
    })


}

// const turndownService = new TurndownService();

// const editorInstance = init({
//     element: rtEditableAreaElement,
//     onChange: function (html) {

//         var markdown = turndownService.turndown(html);
//         mdEditableAreaElement.innerText = markdown;
//     }
// });





