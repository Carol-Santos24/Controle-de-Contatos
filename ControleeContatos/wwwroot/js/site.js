$(document).ready(function () {
    $('.close-alert').click(function () {
        $('.alert').hide('hide');
    });

    // Inicializando DataTables
    let table1 = initializeDataTable('#table-contatos');
    let table2 = initializeDataTable('#table-usuarios');

    // Abrir modal ao clicar no botão
    $('.btn-total-contatos').click(function () {
        var usuarioId = $(this).attr('usuario-id');
        $.ajax({
            type:'GET',
            url: '/Usuario/ListarContatosPorUsuarioId/' + usuarioId,
            success: function (result) {
                $("#listaContatosUsuario").html(result);
                $('#modalContatosUsuario').modal('show'); // Se for Bootstrap 4/5
                let table3 = initializeDataTable('#table-contatos-usuario');
            }
        });
    });
});

// Função para inicializar DataTables
function initializeDataTable(id) {
    return new DataTable(id, {
        "ordering": true,
        "paging": true,
        "searching": true,
        "autoWidth": false,
        "language": {
            "emptyTable": "Nenhum registro encontrado na tabela",
            "info": "Mostrar _START_ até _END_ de _TOTAL_ registros",
            "infoEmpty": "Mostrar 0 até 0 de 0 Registros",
            "infoFiltered": "(Filtrar _MAX_ total de registros)",
            "infoPostFix": "",
            "thousands": ".",
            "lengthMenu": "Mostrar _MENU_ registros por página",
            "loadingRecords": "Carregando...",
            "processing": "Processando...",
            "zeroRecords": "Nenhum registro encontrado",
            "search": "Pesquisar",
            "paginate": {
                "next": "Próximo",
                "previous": "Anterior",
                "first": "Primeiro",
                "last": "Último"
            },
            "aria": {
                "sortAscending": ": Ordenar colunas de forma ascendente",
                "sortDescending": ": Ordenar colunas de forma descendente"
            }
        }
    });
}



