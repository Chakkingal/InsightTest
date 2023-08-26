// menu bar hide toggle
const toggler = document.querySelector(".menu-btn");
toggler.addEventListener("click", function () {
  document.querySelector("#sidebar").classList.toggle("collapsed");
});

const ExpEntryQty = document.querySelector("#expentryqty");
const ExpEntryRateUnit = document.querySelector("#expentryraterperunit");
const ExpEntryOtherExp = document.querySelector("#expentryothercharges");
const ExpEntryTotalAmt = document.querySelector("#expentrytotalamt");
const ExpEntryPaidAmt = document.querySelector("#expentryraterpaidamount");
const ExpEntryBalanceAmt = document.querySelector("#expentrybalance");
const restrictInvalidNumber = document.querySelectorAll(".invalidNumericEntry");

for (let inputEntry of restrictInvalidNumber) {
  // let y = 0;
  inputEntry.addEventListener("input", function (e) {
    // let x = y;
    // y = e.target.value;
    // if (e.target.value > 100 || e.target.value < 0) {
    //   inputEntry.value = x;
    //   y = x;
    //   x = 0;
    // }
    totalAmountExpEntry();
  });
}
for (let inputEntry of restrictInvalidNumber) {
  inputEntry.addEventListener("change", function (e) {
    totalAmountExpEntry();
  });
}
for (let inputEntry of restrictInvalidNumber) {
  inputEntry.addEventListener("blur", function (e) {
    totalAmountExpEntry();
  });
}




function totalAmountExpEntry() {
  let qty = parseFloat(ExpEntryQty.value || 0);
  console.log(`qty is ${qty}`);
  let rate = parseFloat(ExpEntryRateUnit.value || 0);
  console.log(`rate is ${rate}`);
  let otherxp = parseFloat(ExpEntryOtherExp.value || 0);
  console.log(`otherxp is ${otherxp}`);
  let paidamount = parseFloat(ExpEntryPaidAmt.value || 0);
  console.log(`paidamount is ${paidamount}`);
  let total = (qty * rate) + otherxp;
  // total = parseFloat(total);
  console.log(`total is ${total}`);
  let balance = total - paidamount
  if (total !== 0) {
    ExpEntryTotalAmt.value =total.toFixed(2);
    ExpEntryBalanceAmt.value = balance;
  } else {
    ExpEntryTotalAmt.value = "";
    if (balance === 0) {
      ExpEntryBalanceAmt.value = "";
    } else {
      ExpEntryBalanceAmt.value = balance
    }
  }
}
