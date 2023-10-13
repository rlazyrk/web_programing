function Tabs_control(evt, element) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(element).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  document.addEventListener("DOMContentLoaded", function() {
    Tabs_control({ currentTarget: document.getElementById("home_tab_button") }, "Main_page");
  });


  class Voucher {
    constructor(id, title, price, duration, country) {
        this.id = id;
        this.title = title;
        this.price = price;
        this.duration = duration;
        this.country = country;
    }
}

const vouchers = [
    new Voucher(1, "Default Voucher 1", 100, 7, "Ukraine"),
    new Voucher(2, "Default Voucher 2", 200, 10, "Poland"),
    new Voucher(3,"asd",3000,500,"Ukraine"),
    new Voucher(4,"asdf",1000,200,"USA")

];

let voucherIdCounter = vouchers.length + 1;

function displayVouchers(voucherList) {
  const cardField = document.querySelector(".card_field");
  cardField.innerHTML = "";

  const vouchersToDisplay = voucherList || vouchers;

  vouchersToDisplay.forEach((voucher, index) => {
    const listItem = document.createElement("li");
    listItem.innerHTML =  `
    <img src="./img/voucher.png" class="card-img" alt="card"/>
    <div class="card_body">
        <h4 class="card-title">Title: ${voucher.title}</h4>
        <p class="card-price">Price: $${voucher.price}</p>
        <p class="card-duration">Duration: ${voucher.duration} days</p>
        <p class="card-country">Country: ${voucher.country}</p>
    </div>
    <div class="card_buttons">
        <button class="edit_button" data-voucher-id="${index}">Edit</button>
        <button class="delete_button" data-voucher-id="${index}">Delete</button>
    </div>
    `;
    cardField.appendChild(listItem);

    const editButton = listItem.querySelector(".edit_button");
    const deleteButton = listItem.querySelector(".delete_button");

    editButton.addEventListener("click", function(event) {
      let voucherIndex = event.target.getAttribute("data-voucher-id");
      console.log(voucherIndex);
      editVoucher(voucherIndex);
    });

    deleteButton.addEventListener("click", function(event) {
      const voucherId = event.target.getAttribute("data-voucher-id");
      deleteVoucher(voucherId);
    });
  });
}


function deleteVoucher(index) {
  vouchers.splice(index, 1);
  displayVouchers();
}

function addVoucher(event) {
    event.preventDefault();

    const title = document.getElementById("title_input1").value;
    const price = parseFloat(document.getElementById("price_input1").value);
    const duration = parseInt(document.getElementById("duration_input1").value);
    const country = document.getElementById("Country1").value;

    const newVoucher = new Voucher(voucherIdCounter, title, price, duration, country);
    vouchers.push(newVoucher);
    voucherIdCounter++;

    displayVouchers();

    document.getElementById("title_input1").value = "";
    document.getElementById("price_input1").value = "";
    document.getElementById("duration_input1").value = "";
    document.getElementById("Country1").value = "select";
    Tabs_control({ currentTarget: document.getElementById("submit") }, "Main_page");
}
function editVoucher(index) {
  let selectedVoucher = vouchers[index];
  document.getElementById("title_input2").value = selectedVoucher.title;
  document.getElementById("price_input2").value = selectedVoucher.price;
  document.getElementById("duration_input2").value = selectedVoucher.duration;
  document.getElementById("Country2").value = selectedVoucher.country;
  Tabs_control({ currentTarget: document.getElementById("create_tab_button") }, "Edit_voucher");

  let editForm = document.getElementById("add_form2");

  editForm.removeEventListener("submit", editFormSubmitHandler);

  editForm.addEventListener("submit", editFormSubmitHandler);

  function editFormSubmitHandler(event) {
      event.preventDefault();

      let newTitle = document.getElementById("title_input2").value;
      let newPrice = parseFloat(document.getElementById("price_input2").value);
      let newDuration = parseInt(document.getElementById("duration_input2").value);
      let newCountry = document.getElementById("Country2").value;

      selectedVoucher.title = newTitle;
      selectedVoucher.price = newPrice;
      selectedVoucher.duration = newDuration;
      selectedVoucher.country = newCountry;

      displayVouchers();

      editForm.removeEventListener("submit", editFormSubmitHandler);
      Tabs_control({ currentTarget: document.getElementById("submit") }, "Main_page");
  }
}


document.addEventListener("DOMContentLoaded", function() {

  const sortButton = document.getElementById("sort_button");
  sortButton.addEventListener("click", function() {
      const visibleVouchers = getVisibleVouchers();
      visibleVouchers.sort((a, b) => b.price - a.price);
      displayVouchers(visibleVouchers);
});

});

function getVisibleVouchers() {
  const visibleVouchers = [];
  vouchers.forEach((voucher, index) => {
    const listItem = document.querySelectorAll(".card_field li")[index];
    if (listItem.style.display !== "none") {
      visibleVouchers.push(voucher);
    }
  });
  return visibleVouchers;
}

function searchVouchers() {
  const searchInput = document.querySelector(".Search_vouchers");
  const searchValue = searchInput.value.toLowerCase();
  vouchers.forEach((voucher, index) => {
    const listItem = document.querySelectorAll(".card_field li")[index];
    const title = voucher.title.toLowerCase();
    if (title.includes(searchValue)) {
      listItem.style.display = "block";
    } else {
      listItem.style.display = "none";
    }
  });
}

function clearSearch() {
  const searchInput = document.querySelector(".Search_vouchers");
  searchInput.value = "";
  const listItems = document.querySelectorAll(".card_field li");
  listItems.forEach((listItem) => {
    listItem.style.display = "block";
  });
  displayVouchers();
}

document.addEventListener("DOMContentLoaded", function() {

  const searchButton = document.getElementById("search_button");
  searchButton.addEventListener("click", searchVouchers);

  const clearButton = document.getElementById("clear_button");
  clearButton.addEventListener("click", clearSearch);

  const countButton = document.getElementById("count_button");
  const totalPriceElement = document.getElementById("price");

  countButton.addEventListener("click", function() {
    const visibleVouchers = getVisibleVouchers();
    const totalCost = visibleVouchers.reduce((accumulator, voucher) => accumulator + voucher.price, 0);
    totalPriceElement.innerText = `$${totalCost}`;
});
});


window.onload = displayVouchers();
const addForm = document.getElementById("add_form1");
addForm.addEventListener("submit", addVoucher);