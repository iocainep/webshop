const select1 = new CustomSelect(".select", {
    defaultValue: "Trending now",
    data: ["Black", "Grey", "White"],
    onSelected(item) {
      console.log(`Выбранное значение: ${item.textContent}`);
    },
  });
  document
    .querySelector(".select")
    .addEventListener("select.change", (e) => {
      console.log(
        `Выбранное значение: ${
          e.target.querySelector(".select__item_selected").textContent
        }`
      );
    });

  const select2 = new CustomSelect(".select2", {
    defaultValue: "Size",
    data: ["XS", "S", "M", "L"],
    onSelected(item) {
      console.log(`Выбранное значение: ${item.textContent}`);
    },
  });
  document
    .querySelector(".select")
    .addEventListener("select.change", (e) => {
      console.log(
        `Выбранное значение: ${
          e.target.querySelector(".select__item_selected").textContent
        }`
      );
    });

  const select3 = new CustomSelect(".select3", {
    defaultValue: "Price",
    data: ["1", "2", "3", "4", "5"],
    onSelected(item) {
      console.log(`Выбранное значение: ${item.textContent}`);
    },
  });
  document
    .querySelector(".select")
    .addEventListener("select.change", (e) => {
      console.log(
        `Выбранное значение: ${
          e.target.querySelector(".select__item_selected").textContent
        }`
      );
    });