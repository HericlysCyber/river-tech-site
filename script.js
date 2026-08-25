/* =========================
   MENU MOBILE
========================= */

const botaoMenu =
    document.getElementById("botaoMenu");

const linksMenu =
    document.getElementById("linksMenu");


botaoMenu.addEventListener("click", function() {

    linksMenu.classList.toggle("ativo");

    botaoMenu.classList.toggle("ativo");

    const menuAberto =
        linksMenu.classList.contains("ativo");

    botaoMenu.setAttribute(
        "aria-expanded",
        menuAberto
    );

});


/* =========================
   IR PARA ORÇAMENTO
========================= */

function irParaOrcamento() {

    document.getElementById("contato").scrollIntoView({

        behavior: "smooth"

    });

}


/* =========================
   SELECIONAR SERVIÇO
========================= */

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


/* =========================
   ANIMAÇÃO DOS CARDS
========================= */

const elementosAnimados =
    document.querySelectorAll(".animar");


const observador =
    new IntersectionObserver(

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


/* =========================
   FORMULÁRIO → WHATSAPP
========================= */

const formulario =
    document.getElementById("formularioOrcamento");


formulario.addEventListener(
    "submit",

    function(event) {

        event.preventDefault();


        const nome =
            document.getElementById("nome").value;

        const telefone =
            document.getElementById("telefone").value;

        const servico =
            document.getElementById("servico").value;

        const problema =
            document.getElementById("problema").value;


        /* COLOQUE SEU NÚMERO AQUI */

        const numeroWhatsApp =
            "5582981833162";


        const mensagem =
`📩 *NOVA SOLICITAÇÃO - RIVER TECH*

👤 *Nome:* ${nome}

📱 *Telefone:* ${telefone}

🔧 *Serviço:* ${servico}

📝 *Descrição:*
${problema}`;


        const linkWhatsApp =

            "https://wa.me/" +

            numeroWhatsApp +

            "?text=" +

            encodeURIComponent(mensagem);


        window.open(
            linkWhatsApp,
            "_blank"
        );

    }

);