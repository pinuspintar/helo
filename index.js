hargaBaju = 100000
jumlahBeli = 4

totalBayar = hargaBaju * jumlahBeli

if(totalBayar > 10000) {
	diskon = totalBayar * (20/100)

}

totalBayar = totalBayar - diskon
console.log("totalBayar:", totalBayar);
