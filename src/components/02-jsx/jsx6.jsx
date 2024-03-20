import React from "react";

const users = [
	{ id: 1, firstName: "Ali", lastName: "Gel" },
	{ id: 2, firstName: "Veli", lastName: "Gel" },
	{ id: 3, firstName: "Ayşe", lastName: "Gel" },
	{ id: 4, firstName: "Fatma", lastName: "Gel" },
	{ id: 5, firstName: "Kemal", lastName: "Gel" },
];

const Jsx6 = () => {
	/* 
    BIR ZAMANLAR JAVASCRIPT TE BOYLEYDI
    let strList = "";
    users.forEach( item=> {
        strList += `<li>${item.firstName} ${item.lastName}</li>`
    });
    document.getElementById("list").innerHTML = strList;
    */

	// JSX bolumunde geriye deger dondurebilen iteratin method lari kullanilir: MAP

	// map ile iterate edilirken, return ile dondurulen bloktaki en distaki elemente unique olarak bir deger iceren KEY prop u verilmelidir.

	// map dongulerinde KEY kisminda index deger olarak kullanilmamalidir. Cunku index degeri aradan bir eleman silinirse dongu tekrar bastan dondurelecegi icin index degeri degisen elemenalar tekrar olusturulur bu da performans akybina neden olur

	return (
		<div>
			<ul>
				{users.map((item) => (
					<li key={item.id}>
						<a href="#home">
							{item.firstName} {item.lastName}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Jsx6;
