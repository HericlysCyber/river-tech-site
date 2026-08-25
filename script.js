const formulario = document.getElementById("formularioOrcamento");

const campoTelefone = document.getElementById("telefone");



campoTelefone.addEventListener("input", function() {

    let numero = campoTelefone.value;

    numero = numero.replace(/\D/g, "");

    numero = numero.substring(0, 11);


    if (numero.length > 10) {

        campoTelefone.value =

            "(" + numero.substring(0, 2) + ") " +

            numero.substring(2, 7) + "-" +

            numero.substring(7, 11);

    }

    else if (numero.length > 6) {

        campoTelefone.value =

            "(" + numero.substring(0, 2) + ") " +

            numero.substring(2, 6) + "-" +

            numero.substring(6);

    }

    else if (numero.length > 2) {

        campoTelefone.value =

            "(" + numero.substring(0, 2) + ") " +

            numero.substring(2);

    }

    else {

        campoTelefone.value = numero;

    }

});



formulario.addEventListener("submit", function(event) {

    event.preventDefault();


    const nome = document.getElementById("nome").value;

    const telefone = document.getElementById("telefone").value;

    const servico = document.getElementById("servico").value;

    const problema = document.getElementById("problema").value;


    const mensagem =

        `Olá! Meu nome é ${nome}.

Telefone: ${telefone}

Serviço desejado: ${servico}

Descrição do problema: ${problema}`;


    const mensagemCodificada =

        encodeURIComponent(mensagem);


    const numeroWhatsApp = "5582981833162";


    const linkWhatsApp =

        "https://wa.me/" +

        numeroWhatsApp +

        "?text=" +

        mensagemCodificada;


    window.open(linkWhatsApp, "_blank");

});



function irParaOrcamento() {

    document.getElementById("contato").scrollIntoView({

        behavior: "smooth"

    });

}



const botaoMenu = document.getElementById("botaoMenu");

const linksMenu = document.getElementById("linksMenu");


botaoMenu.addEventListener("click", function() {

    linksMenu.classList.toggle("ativo");
    
botaoMenu.classList.toggle("ativo");

    const menuAberto = linksMenu.classList.contains("ativo");


    botaoMenu.setAttribute(

        "aria-expanded",

        menuAberto

    );

});
const elementosAnimados =
    document.querySelectorAll(".animar");


const observador = new IntersectionObserver(
    function(elementos) {

        elementos.forEach(function(elemento) {

            if (elemento.isIntersecting) {

                elemento.target.classList.add(
                    "aparecer"
                );

            }

        });

    },
    {
        threshold: 0.2
    }
);


elementosAnimados.forEach(function(elemento) {

    observador.observe(elemento);

});
function selecionarServico(servicoEscolhido) {

    const campoServico =
        document.getElementById("servico");

    const campoNome =
        document.getElementById("nome");


    campoServico.value =
        servicoEscolhido;


    document.getElementById("contato").scrollIntoView({

        behavior: "smooth"

    });


    setTimeout(function() {

        campoNome.focus();

    }, 700);

}