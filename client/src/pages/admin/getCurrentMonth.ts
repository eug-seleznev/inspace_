

const getCurrentMonth = (date: number) =>{

	if(date!==undefined){
		let date11 = new Date (date)
		
	  	let date22 =
			  date11.getMonth()+1===1?'январь':
			  date11.getMonth()+1===2?'февраль':
			  date11.getMonth()+1===3?'март':
			  date11.getMonth()+1===4?'апрель':
			  date11.getMonth()+1===5?'май':
			  date11.getMonth()+1===6?'июнь':
			  date11.getMonth()+1===7?'июль':
			  date11.getMonth()+1===8?'август':
			  date11.getMonth()+1===9?'сентябрь':
			  date11.getMonth()+1===10?'октябрь':
			  date11.getMonth()+1===11?'ноябрь':
			  date11.getMonth()+1===12?'декабрь':''
		// let date33 = date11.getFullYear()
			return (date22) 
}
}

export default getCurrentMonth