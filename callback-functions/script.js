const sivaAnnaPelli = {
  date: "06-06-2018",
  address: {
    city: "mydukur",
    district: "Kadapa",
  },
  waitingForGiftPackingStatus: function (flowers, fun) {
    console.log(`preparing boque using ${flowers}`);
    fun("completed boque preparation");
  },
};

const result = sivaAnnaPelli.waitingForGiftPackingStatus(
  "red roses",
  function (msg) {
    console.log(msg);
    console.log("will come to your home, we both will go");
  }
);
console.log(result);
console.log("Bathing");
console.log("Dressing");
