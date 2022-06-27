window.CallCall = (objCal1) => {
    new AMIB.persianCalendar(objCal1,{
        onchange: function() {
            DotNet.invokeMethodAsync('ShamsiDatePickerBlazor', 'DateChanged').then(
                (date) => {
                    console.log(data);
                }
            );
        }
    });
}