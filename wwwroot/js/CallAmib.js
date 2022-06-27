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