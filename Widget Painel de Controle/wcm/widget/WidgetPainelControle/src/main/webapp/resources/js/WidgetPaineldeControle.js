var painelDeControle;
$(document).ready(function() {
	var calendar = FLUIGC.calendar("#initialPeriod, #finalPeriod");
	CallChart();
	 painelDeControle = new painelWeb(parent.WCMAPI);

	

	  $dataTable = $("#tabelaControle").DataTable({
    	/*searching: false,
    	processing: "teste ta processando ok",
        serverSide: false,*/
        oLanguage: {
            sUrl: "/FluigMonditechWeb/DataTable/1.10/Language/portugues.json"
            	
        }/*,
        ajax: {
            "url": WCMAPI.serverURL + "/agendamentoWeb/api/rest/getScheduling",
            "type": "GET",
            "contentType": "application/json",
            "dataSrc": function (json) {
               
                console.log(json);
                '<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i><span class="sr-only">Loading...</span> ';
                if (json.error && json.message) {

                    FLUIGC.toast({
                        title: "ERRO!",
                        message: "Não foi possível recuperar comodatos",
                        type: "danger"
                    });
                    json.data = new Array();
                }

                return json;
            }
        },
        "dom": "Brtip",
        "buttons": [
            { extend: "excelHtml5", text: "Exportar em Excel" },
            { extend: "csvHtml5", text: "Exportar em CSV", fieldSeparator: ";" },
        ],
        "columns": [
            { title: "First Period", data: "dtStart" },
            { title: "Final Period", data: "dtEnd" },
            { title: "Start Time Period", data: "dtStartPerid" },
            { title: "End Time Period", data: "dtEndPerid" },
            { title: "Start Time Attendance", data: "dtStartPresent" },
            { title: "End Time Attendance", data: "dtEndPresent" },
            { title: "Start Time Delay", data: "dtStartDelay" },
            { title: "End Time Delay", data: "dtEndDelay" },
            { title: "Active", data: "active" },
        ],
        "columnDefs": [
            {
                "targets": "_all",
                "className": "dt-center"
            }
        ],
        responsive: true*/
    });
	
	
	
});

function OpenZoom(tipoZoom){
	zoom = new Zoom(tipoZoom);
	if(tipoZoom == "pessoa"){
		  zoom.camposRetorno[0] = "idNome";
          zoom.camposRetorno[1] = "descricaoNome";
	}
	 zoom.CreateModal();
}
function CallChart(){
	
	var students = 400;
	var workers = 30;
	var visitors = 5;
	
	var ctx = document.getElementById('dailyChart').getContext('2d');
	var myChart = new Chart(ctx, {
	    type: 'pie',
	    data: {
	        labels: ['Alunos', 'Funcionarios', 'Visitantes'],
	        datasets: [{
	            label: '',
	            data: [students, workers, visitors],
	            backgroundColor: [
	                '#023858',
	                '#0570b0',
	                '#045a8d'
	            ],
	            borderColor: [
	                '#023858d6',
	                '#0570b0b3',
	                '#045a8db0'
	            ],
	            borderWidth: 1
	        }]
	    },
	    options: {
	        scales: {
	            yAxes: [{
	                ticks: {
	                    beginAtZero: true
	                }
	            }]
	        }
	    }
	});
}
