	const SHEET_ID = '1RY6MBIJv6Vw6r4167p2-Jc7l-izYZAScMb_HONDiyxw';
	const SHEET_TITLE = 'BarCode';
	const SHEET_RANGE = 'A:B';
	const queryString = window.location.search;
	const urlParams = new URLSearchParams(queryString);
	let QUE_CODE = urlParams.get('barCode')
	console.log(QUE_CODE);
	let QUE = 'Select * WHERE A = ' + QUE_CODE + '';
	const query = encodeURIComponent(QUE);
	const FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&tq=' + query );
	console.log(FULL_URL);
	fetch(FULL_URL)
	.then(res => res.text())
	.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    console.log(data)
 
})
