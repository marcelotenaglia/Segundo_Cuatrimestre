export function getItem () {

    const itemFromStorage = JSON.parse(window.localStorage.getItem("todo-list"))

    return itemFromStorage || []

}