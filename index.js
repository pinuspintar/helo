hargaSusu = 100000
jumlah = 2
voucher = "diskon10"
totalBayar = hargaSusu * jumlah
diskon = totalBayar * (50/100)
if(diskon > 20000) {
	diskon = 20000
}
if(jumlah > 1) {
	totalBayar = totalBayar + 1000
}
if(voucher == "diskon10") {totalBayar = totalBayar - 10000}
totalBayar = totalBayar - diskon
console.log("totalBayar ", totalBayar)