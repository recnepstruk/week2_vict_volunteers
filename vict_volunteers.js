angular.module('VictApp', []).controller('victimController', victimFunction);


//ask for the initial number of victims and print to page

function victimFunction() {
    var vctCtrl = this;
    vctCtrl.victims = [];
    vctCtrl.askNum = '';

    vctCtrl.ask = function() {
        console.log(vctCtrl.askNum);
        for (var i = 0; i < vctCtrl.askNum; i++) {
            // ask for victim info
            var vname = prompt("What is the vicitms name?");

            var vphone = prompt("What is the victims phone number?");

            var vstreet = prompt("What is the victims street address?");
            vctCtrl.victims.push({
                name: vname,
                phone: vphone,
                street: vstreet
            });
        };
        vctCtrl.askNum = '';

    };


};

















//put entered info on page
// document.getElementById("names").innerHTML = (name);
// document.getElementById("phones").innerHTML = (phone);
// document.getElementById("streets").innerHTML = (street);
