	let SHEET_ID = '1RY6MBIJv6Vw6r4167p2-Jc7l-izYZAScMb_HONDiyxw'
	let SHEET_TITLE = 'BarCode'
	let SHEET_RANGE = 'A1:B2'
		let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);
	fetch(FULL_URL)
	.then(res => res.text())
	.then(rep => {
    let data = JSON.parse(rep.substr(47).slice(0,-2));
    console.log(rep)
 
})