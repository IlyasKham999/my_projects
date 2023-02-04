myButtons = document.querySelectorAll('.mybtn');

let form1 = document.querySelector('.myForm1');
let form2 = document.querySelector('.myForm2');

myButtons.forEach((button) => {
	button.addEventListener('click', () => {
        event.preventDefault();

		form1.classList.toggle('hidden');
		form2.classList.toggle('hidden');
	})
})

let myform = document.getElementById("FormId");
    document.getElementById("ButtonId").addEventListener("click", function () {
        
        let C = document.getElementById('text0').value
        let Not = document.getElementById('text1').value
        let Tobot = document.getElementById('text2').value
        let Trem = document.getElementById('text3').value
        let Z0 = document.getElementById('text4').value
        let Zr = document.getElementById('text5').value
        let Tc = document.getElementById('text6').value
        let D1 = document.getElementById('text7').value
        let E1 = document.getElementById('text8').value
        let Ctraf1 = document.getElementById('text9').value
        let Tcm = document.getElementById('text10').value
        let N = document.getElementById('text11').value
        
        let Tn = Tc * Tcm * N
        let Tprost = Tobot * Not * Tc + Trem * Not * Tc
        let Tfact = Tn - Tprost

        let Z1 = Tobot * Not * Tc * Z0
        let Z2 = Trem * Not * Tc * Zr
        let E = Tfact * E1

        let Ctraf = Tprost * Ctraf1
        let Z = Z1 + Z2 + E + Ctraf

        let D = Tfact * D1
        let P = D - Z -C

        let ex0 = document.getElementById('ex0');
        ex0.value = Tn
        let ex1 = document.getElementById('ex1');
        ex1.value = Tprost
        let ex2 = document.getElementById('ex2');
        ex2.value = Tfact
        let ex3 = document.getElementById('ex3');
        ex3.value = Z1
        let ex4 = document.getElementById('ex4');
        ex4.value = Z2
        let ex5 = document.getElementById('ex5');
        ex5.value = E
        let ex6 = document.getElementById('ex6');
        ex6.value = Ctraf
        let ex7 = document.getElementById('ex7');
        ex7.value = Z
        let ex8 = document.getElementById('ex8');
        ex8.value = D
        let ex9 = document.getElementById('ex9');
        ex9.value = P
    });
