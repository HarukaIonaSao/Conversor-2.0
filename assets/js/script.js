function Converter() {
    var valEle = document.getElementById("valor");
    var val = valEle.value;
    var valDolNum = parseFloat(val);
  
    var valReal = valDolNum * 5.08;
  
    var eleValCon = document.getElementById("valorConvertido");
    var valCon =   "O valor em real é R$ " + valReal.toFixed(2)  ;
    eleValCon.innerHTML = valCon;
  }

  function ConverterBnb() {
    var valEle = document.getElementById("valor");
    var val = valEle.value;
    var valBnbNum = parseFloat(val);
    
  
    var valReal = valBnbNum * 1590.06;
  
    var eleValCon = document.getElementById("valorConvertido");
    var valCon = "O valor em real é R$ " + valReal.toFixed(2);
    eleValCon.innerHTML = valCon;
  }
  
  function ConverterIen() {
    var valEle = document.getElementById("valor");
    var val = valEle.value;
    var valIenNum = parseFloat(val);
    
  
    var valReal = valIenNum * 0.039;
  
    var eleValCon = document.getElementById("valorConvertido");
    var valCon = "O valor em real é R$ " + valReal.toFixed(2);
    eleValCon.innerHTML = valCon;
  }
  