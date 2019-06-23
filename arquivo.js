let BotaoEl = document.querySelector('#botao');
let DeltaEl = document.querySelector('#delta');
let AEl = document.querySelector('#coeficiente-a');
let BEl = document.querySelector('#coeficiente-b');
let CEl = document.querySelector('#coeficiente-c');
let X1El = document.querySelector('#x1');
let X2El = document.querySelector('#x2');
let ConcavidadeEl = document.querySelector('#concavidade');
let XvEl = document.querySelector('#xis');
let YvEl = document.querySelector('#ipslon');


function calcula()
{
  let A = AEl.value;
  let B = BEl.value;
  let C = CEl.value;

if (A != 0)
{
  DeltaEl.value = (B*B) -4*(A)*(C);
  let Delta = DeltaEl.value;

    if (Delta >= 0)
    {
      X1El.value = (-B + Math.sqrt(Delta))/(2*A);
      X2El.value = (-B - Math.sqrt(Delta))/(2*A);
    }
    else
    {
      X1El.value = " ";
      X2El.value = " ";
    }

    if (A > 0)
    {
      ConcavidadeEl.value = "Para cima"
    }
    else
    {
      ConcavidadeEl.value = "Para baixo"
    }

    XvEl.value = -B/(2*A);
    YvEl.value = -Delta/(4*A);
}

else
{
  window.alert('Não é uma função do segundo grau. Lembre-se que é imprescindível que o coeficiente "a" não seja nulo para este tipo de função!!')
}

}


BotaoEl.addEventListener('click', calcula);
