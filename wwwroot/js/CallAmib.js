window.CallAmib = (objCal1) => {
    new AMIB.persianCalendar(objCal1,{
        onchange: function (pdate) {
            DotNet.invokeMethodAsync('ShamsiDatePickerBlazor', 'DateChanged', pdate.toString()).then(
                (date) => {
                    console.log(data);
                }
            );
        }
    });
}

//window.CallAmib = (objCal1) => {
//    new AMIB.persianCalendar(objCal1, {
//        onchange: function (pdate) {
//            invokeDotnetInstanceFunction: function (addressProvider) {
//                addressProvider.invokeMethodAsync("DateChanged").then((data) => {
//                    console.log(data);
//                });
//            }
//        }
//    });
//}

