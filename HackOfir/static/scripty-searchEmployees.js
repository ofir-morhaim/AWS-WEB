function search_employees(fname, lname, isJumble) {

   const process_url = 'https://0yes9cjw1k.execute-api.eu-central-1.amazonaws.com/prodSearch/search///0'
   console.log(process_url)

    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: process_url,
        crossDomain: true,

        headers: {"Access-Control-Allow-Headers": "*"},
        async: false,
        success: function(data,textStatus,xhr){

            console.log ('aaa')
            console.log (data)


        },
        error: function(xhr,textStatus,errorThrown){
                        console.log('bbb')
                       console.log(errorThrown);
        }

    });


//
    //$('#database_summary_table').on('click',' tr', click_request );

//    if (isJumble)
//    {   var table_row = "<tr id='clickable-row' class='clickable-row'>";
//        table_row += "<td style='text-align:center'>" + "יריב" +"</td>";
//        table_row += "<td style='text-align:center'>" + "המלך" +"</td>";
//        table_row += "<td style='text-align:center'>" + "T$#TV#" +"</td>";
//    }
//    else{
//        var table_row = "<tr id='clickable-row' class='clickable-row'>";
//        table_row += "<td style='text-align:center'>" + "יריב" +"</td>";
//        table_row += "<td style='text-align:center'>" + "המלך" +"</td>";
//        table_row += "<td style='text-align:center'>" + "9999999" +"</td>";
//    }

//    $("#results_table").append(table_row);

};

document.getElementById("btn_search").addEventListener("click", click_search);
function click_search() {
    $("#btn_search").addClass("disabled");
    $("#txt_fname").addClass("disabled");
    $("#txt_lname").addClass("disabled");
    $("#switch_jumble").addClass("disabled");

    fname = $('#txt_fname').val()
    lname = $('#txt_lname').val()
    isJumble = $("#switch_jumble").prop("checked")

    console.log(fname)
    console.log(lname)
    console.log(isJumble)

    search_employees(fname, lname, isJumble)

    $("#btn_search").removeClass("disabled");
    $("#txt_fname").removeClass("disabled");
    $("#txt_lname").removeClass("disabled");
    $("#switch_jumble").removeClass("disabled");
    //setTimeout('$("#btn_search").removeClass("disabled")', 2500);
};
