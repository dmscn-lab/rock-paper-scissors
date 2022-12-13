export const status = document.querySelector('.status');
export const showStatus = () => status.showModal();
export const closeStatus = () => status.close();

HTMLElement.prototype.updateStatus = function (firstClass, secondClass, removeAllClass = false) {
  if (removeAllClass === true) {
    this.classList.remove(firstClass);
    this.classList.remove(secondClass);
  } else {
    this.classList.add(firstClass);
    this.classList.remove(secondClass);
  }
}