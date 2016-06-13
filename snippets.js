document.getElementById('filterStartDate').value = "01/03/2016"

document.getElementById('filterEndDate').value = "01/04/2016"

document.getElementsByName('timeSheet_worker_list_search')[0].click()

document.getElementsByClassName('archiveLink')

document.getElementsByClassName('archiveLink').length

document.getElementsByClassName('archiveLink')[0].click()

//<a href="/time_sheet_detail.do?id=z1604141012556957169990b&amp;buyerCode=PHIL&amp;sgjy=98ccf466-d314-48a8-9619-9560e8496b06" class="archiveLink">
//<a href="/time_sheet_detail.do?id=z1603280225248116519182d&amp;buyerCode=PHIL&amp;sgjy=98ccf466-d314-48a8-9619-9560e8496b06" class="archiveLink">

localStorage.setItem('timesheet1', "/time_sheet_detail.do?id=z1604141012556957169990b&amp;buyerCode=PHIL&amp;sgjy=98ccf466-d314-48a8-9619-9560e8496b06")
localStorage.getItem('timesheet1')

document.getElementsByClassName("grayLink backIcon")[0].click()

var script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'script.js';
document.head.appendChild(script);
