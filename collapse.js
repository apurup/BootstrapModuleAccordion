
$('document').ready(()=>{
    if ( $(window).width() > 739) {
        //Add your javascript for large screens here
    }
    $("button[data-toggle='collapse'][aria-expanded='false']").each(function () {
        $($(this).attr("data-target")).hide("fast");
    });


    $('button').click(function () {
        //alert($(this).attr("data-target"))

        if($(this).attr("data-toggle")==='collapse')
        {
            //alert($(this).attr("data-target"));
            let acid = $($(this).attr("data-target")).attr("data-parent");
            let temp=$(this).attr("data-target")
            let id = temp.substr(1,temp.length)
            //alert(id)


            $("div[data-parent='"+acid+"'][id!='"+id+"']").slideUp("slow");
            $($(this).attr("data-target")).slideToggle("slow");


        }
    })
});