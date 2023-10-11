function itemPrice() {
  document.getElementById("totItem1").innerHTML = Number(
    document.getElementById("qtdItem1").value * 2500
  );
  document.getElementById("totItem2").innerHTML = Number(
    document.getElementById("qtdItem2").value * 5300
  );
  document.getElementById("totItem3").innerHTML = Number(
    document.getElementById("qtdItem3").value * 8800
  );
}

function summary() {
  document.getElementById("tot1").value = Number(
    document.getElementById("qtdItem1").value * 2500
  );
  document.getElementById("tot2").value = Number(
    document.getElementById("qtdItem2").value * 5300
  );
  document.getElementById("tot3").value = Number(
    document.getElementById("qtdItem3").value * 8800
  );
  document.getElementById("qtd1").value = Number(
    document.getElementById("qtdItem1").value
  );
  document.getElementById("qtd2").value = Number(
    document.getElementById("qtdItem2").value
  );
  document.getElementById("qtd3").value = Number(
    document.getElementById("qtdItem3").value
  );

  const item1 = Number(document.getElementById("qtdItem1").value * 2500);
  const item2 = Number(document.getElementById("qtdItem2").value * 5300);
  const item3 = Number(document.getElementById("qtdItem3").value * 8800);
  const itemsTotal = item1 + item2 + item3;
  document.getElementById("tot4").value = itemsTotal;
}

function validation() {
  if (
    Number(document.getElementById("qtd1").value) == 0 &&
    Number(document.getElementById("qtd2").value) == 0 &&
    Number(document.getElementById("qtd3").value) == 0
  ) {
    alert("Por favor selecione algum produto.");
    return false;
  }
}
