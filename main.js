let mobiles={
	brand:"hp",
	model:"max",
	color:{
		red:"20",
		blue:"10",
		green:"5",
		yellow:"30",
		},
	welcome()
		{
		console.log("hello");
		},
	greet()
		{
		console.log("hai"+mobiles.brand);
		console.log("hai",mobiles.model);
		},
	hi()
		{
		let msg=this.model;
		return msg;
		},
	hello()
		{
		let message=this.brand;
		return message;
		}
	
}
console.log(mobiles);
console.log(Object.values(mobiles));

console.log(Object.keys(mobiles));

console.log(Object.entries(mobiles));
mobiles.welcome();
mobiles.greet();
console.log(mobiles.hi());
console.log(mobiles.hello());


let num=[1,2,3,4,5,6];
num.forEach(function(e,f,g)
	{
	console.log("hi");
	console.log(f);
	console.log(g);
	})
	

	
	
let number=[1,2,3,4,5,6,7,8];
for(sum in number)
	{
	console.log(sum);
	console.log(number[sum]);
	}
	
for(store in mobiles)
	{
	console.log(store);
	
	console.log(mobiles[store]);
	}