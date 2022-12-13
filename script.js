$(document).ready(function () {

    var texto_tarefa;
    var cont_tarefas = 0;
    var primeira_vez = 0;

    $(".send_tarefa").click(function () {

        texto_tarefa = $(".dados_tarefa input").val()

        if (primeira_vez == 0) {
            $(".box_tarefa_criada").remove()
            primeira_vez = 1
        }

        if (texto_tarefa == "") {
            alert("Digite algo para poder validar!")
        }
        else {

            $(".container_tarefas_criadas").append(`
      <div class="box_tarefa_criada">
        <div class="circulo_tarefa">
          <label class="container">
            <input type="checkbox">
            <span class="checkmark"><span>
            </label>
          </div>
          <div class="texto_tarefa">
            <p>${texto_tarefa}</p>
          </div>
        </div>
          `)
            cont_tarefas = cont_tarefas + 1
            $(".dados_tarefa").find("input").val("")
            $(".quant_tarefas p").html(cont_tarefas + " tarefas criadas")

        }
    })


    $(".tarefa_concluida").click(function () {

        $("input:checked").parent().parent().parent().css("color", "#484a5f")
        $("input:checked").parent().parent().parent().css("text-decoration", "line-through")


    })

    $(".delete_item_text").click(function () {

        $("input:checked").parent().parent().parent().remove()
    })


})