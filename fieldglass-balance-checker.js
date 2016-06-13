var today = new Date();
dd_year_start = "01/01/"+today.getFullYear();
function getToday(){
  var dd = today.getDate();
  var mm = today.getMonth()+1;
  var yyyy = today.getFullYear();
  var full_dd = dd+'/'+mm+'/'+yyyy;
  return full_dd  
}
dd_today = getToday();

document.getElementById('filterStartDate').value = dd_year_start;
document.getElementById('filterEndDate').value = today;
document.getElementsByName('timeSheet_worker_list_search')[0].click();

var hh_count_atwork = 0;
var dd_count_atwork = 0;
var dd_count_nationalholiday = 0;

function isNationalHolidayButNotWeekend(){
}
