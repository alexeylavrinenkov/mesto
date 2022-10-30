export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items;
    this._renderer = renderer;
    this._containerElement = document.querySelector(containerSelector);
  }

  // Отрисовывает все DOM-элементы по данным
  renderItems() {
    this._items.forEach((item) => {
      this._renderer(item);
    })
  }

  // Добавляет DOM-элемент в контейнер
  addItem(element) {
    this._containerElement.prepend(element);
  }
}
