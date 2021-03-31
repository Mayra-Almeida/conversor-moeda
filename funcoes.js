// Função de conversão de moeda
function convert() {
    // Declaração de variáveis
    var val, selMoeda1, selMoeda2, result;

    // Atribuição de valores às variáveis
    val = document.getElementById("valor").value;
    selMoeda1 = document.getElementById("selectMoeda1").value;
    selMoeda2 = document.getElementById("selectMoeda2").value;

    // Verificação de número válido/não válido
    if (isNaN(val) || val < 0) {
        alert("Digite um número válido.");
        result = 0
    } else if (val == null || val == "") {
        alert("Digite um número.");
        result = 0
    } else {
        // Conversão Real
        if (selMoeda1 == "brl") {
            if (selMoeda2 == "usd") {
                result = parseFloat(val * 0.17);
            } else if (selMoeda2 == "eur") {
                result = parseFloat(val * 0.15);
            } else if (selMoeda2 == "gbp") {
                result = parseFloat(val * 0.13);
            } else if (selMoeda2 == "jpy") {
                result = parseFloat(val * 19.17);
            } else if (selMoeda2 == "brl") {
                result = parseFloat(val);
            }
        // Conversão Dólar Americano
        } if (selMoeda1 == "usd") {
            if (selMoeda2 == "brl") {
                result = parseFloat(val * 5.77);
            } else if (selMoeda2 == "eur") {
                result = parseFloat(val * 0.85);
            } else if (selMoeda2 == "gbp") {
                result = parseFloat(val * 0.73);
            } else if (selMoeda2 == "jpy") {
                result = parseFloat(val * 110.70);
            } else if (selMoeda2 == "usd") {
                result = parseFloat(val);
            }
        // Conversão Euro
        } if (selMoeda1 == "eur") {
            if (selMoeda2 == "brl") {
                result = parseFloat(val * 6.78);
            } else if (selMoeda2 == "usd") {
                result = parseFloat(val * 1.17);
            } else if (selMoeda2 == "gbp") {
                result = parseFloat(val * 0.85);
            } else if (selMoeda2 == "jpy") {
                result = parseFloat(val * 129.89);
            } else if (selMoeda2 == "eur") {
                result = parseFloat(val);
            }
        // Conversão Libra
        } if (selMoeda1 == "gbp") {
            if (selMoeda2 == "brl") {
                result = parseFloat(val * 7.94);
            } else if (selMoeda2 == "usd") {
                result = parseFloat(val * 1.37);
            } else if (selMoeda2 == "eur") {
                result = parseFloat(val * 1.17);
            } else if (selMoeda2 == "jpy") {
                result = parseFloat(val * 152.20);
            } else if (selMoeda2 == "gbp") {
                result = parseFloat(val);
            }
        // Conversão Iene
        } if (selMoeda1 == "jpy") {
            if (selMoeda2 == "brl") {
                result = parseFloat(val * 0.05);
            } else if (selMoeda2 == "usd") {
                result = parseFloat(val * 0.0090);
            } else if (selMoeda2 == "eur") {
                result = parseFloat(val * 0.0077);
            } else if (selMoeda2 == "gbp") {
                result = parseFloat(val * 0.0066);
            } else if (selMoeda2 == "jpy") {
                result = parseFloat(val);
            }
        }
    }

    // Ajuste para duas casas decimais após a virgula
    result = (result.toFixed(2))

    // Atribuição do resultado ao elemento HTML
    document.getElementById("result").value = result;
}
