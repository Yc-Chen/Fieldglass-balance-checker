document.getElementById('filterStartDate').value = "01/03/2016"

document.getElementById('filterEndDate').value = "01/04/2016"

document.getElementsByName('timeSheet_worker_list_search')[0].click()

document.getElementsByClassName('archiveLink')

document.getElementsByClassName('archiveLink').length

// document.getElementsByClassName('archiveLink')[0].click() // not necessary to click into

// take one time sheet and examine the content.
tt = document.getElementsByName('timeSheet_worker_list_search')[0]
tt.parentElement.parentElement.parentElement.children // check what is inside
var hh = tt.parentElement.parentElement.parentElement.children[7].title // hour
var ds = tt.parentElement.parentElement.parentElement.children[5].title // starting day
var de = tt.parentElement.parentElement.parentElement.children[6].title


localStorage.setItem('timesheet1', "/time_sheet_detail.do?id=z1604141012556957169990b&amp;buyerCode=PHIL&amp;sgjy=98ccf466-d314-48a8-9619-9560e8496b06")
localStorage.getItem('timesheet1')

document.getElementsByClassName("grayLink backIcon")[0].click()

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'http://yc-chen.github.io/public/js/fieldglass-balance-checker.js';
document.head.appendChild(script);

var then = new Date(2013,2,2)
then.getDay()
function check_holiday (dt_date) {



	// check simple dates (month/date - no leading zeroes)

	var n_date = dt_date.getDate(),

		n_month = dt_date.getMonth() + 1;

	var s_date1 = n_month + '/' + n_date;

		

	if (   s_date1 == '1/1'   // New Year's Day

		|| s_date1 == '6/14'  // Flag Day

		|| s_date1 == '7/4'   // Independence Day

		|| s_date1 == '11/11' // Veterans Day

		|| s_date1 == '12/25' // Christmas Day

	) return true;

	

	// weekday from beginning of the month (month/num/day)

	var n_wday = dt_date.getDay(),

		n_wnum = Math.floor((n_date - 1) / 7) + 1;

	var s_date2 = n_month + '/' + n_wnum + '/' + n_wday;

	

	if (   s_date2 == '1/3/1'  // Birthday of Martin Luther King, third Monday in January

		|| s_date2 == '2/3/1'  // Washington's Birthday, third Monday in February

		|| s_date2 == '5/3/6'  // Armed Forces Day, third Saturday in May

		|| s_date2 == '9/1/1'  // Labor Day, first Monday in September

		|| s_date2 == '10/2/1' // Columbus Day, second Monday in October

		|| s_date2 == '11/4/4' // Thanksgiving Day, fourth Thursday in November

	) return true;



	// weekday number from end of the month (month/num/day)

	var dt_temp = new Date (dt_date);

	dt_temp.setDate(1);

	dt_temp.setMonth(dt_temp.getMonth() + 1);

	dt_temp.setDate(dt_temp.getDate() - 1);

	n_wnum = Math.floor((dt_temp.getDate() - n_date - 1) / 7) + 1;

	var s_date3 = n_month + '/' + n_wnum + '/' + n_wday;

	

	if (   s_date3 == '5/1/1'  // Memorial Day, last Monday in May

	) return true;



	// misc complex dates

	if (s_date1 == '1/20' && (((dt_date.getFullYear() - 1937) % 4) == 0) 

	// Inauguration Day, January 20th every four years, starting in 1937. 

	) return true;

		

	if (n_month == 11 && n_date >= 2 && n_date < 9 && n_wday == 2

	// Election Day, Tuesday on or after November 2. 

	) return true;

	

	return false;

}


// copied from internet
function check_holiday (dt_date) {
	// check simple dates (month/date - no leading zeroes)

	var n_date = dt_date.getDate(),

		n_month = dt_date.getMonth() + 1;

	var s_date1 = n_month + '/' + n_date;

		

	if (   s_date1 == '1/1'   // New Year's Day

		|| s_date1 == '6/14'  // Flag Day

		|| s_date1 == '7/4'   // Independence Day

		|| s_date1 == '11/11' // Veterans Day

		|| s_date1 == '12/25' // Christmas Day

	) return true;

	

	// weekday from beginning of the month (month/num/day)

	var n_wday = dt_date.getDay(),

		n_wnum = Math.floor((n_date - 1) / 7) + 1;

	var s_date2 = n_month + '/' + n_wnum + '/' + n_wday;

	

	if (   s_date2 == '1/3/1'  // Birthday of Martin Luther King, third Monday in January

		|| s_date2 == '2/3/1'  // Washington's Birthday, third Monday in February

		|| s_date2 == '5/3/6'  // Armed Forces Day, third Saturday in May

		|| s_date2 == '9/1/1'  // Labor Day, first Monday in September

		|| s_date2 == '10/2/1' // Columbus Day, second Monday in October

		|| s_date2 == '11/4/4' // Thanksgiving Day, fourth Thursday in November

	) return true;



	// weekday number from end of the month (month/num/day)

	var dt_temp = new Date (dt_date);

	dt_temp.setDate(1);

	dt_temp.setMonth(dt_temp.getMonth() + 1);

	dt_temp.setDate(dt_temp.getDate() - 1);

	n_wnum = Math.floor((dt_temp.getDate() - n_date - 1) / 7) + 1;

	var s_date3 = n_month + '/' + n_wnum + '/' + n_wday;

	

	if (   s_date3 == '5/1/1'  // Memorial Day, last Monday in May

	) return true;



	// misc complex dates

	if (s_date1 == '1/20' && (((dt_date.getFullYear() - 1937) % 4) == 0) 

	// Inauguration Day, January 20th every four years, starting in 1937. 

	) return true;

		

	if (n_month == 11 && n_date >= 2 && n_date < 9 && n_wday == 2

	// Election Day, Tuesday on or after November 2. 

	) return true;

	

	return false;

}
