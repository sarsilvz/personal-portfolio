// TEST //
$('h3').click(function() {
  console.log("boom");
});

// -- //




$(".more").click(function () {

    $more = $(this);
    //getting the next element
    $morebox = more.next();
    //open up the content needed - toggle the slide- if visible, slide up, if not slidedown.
    $morebox.slideToggle(500, function () {
        //execute this after slideToggle is done
        //change text of header based on visibility of content div
        $more.text(function () {
            //change text based on condition
            return $morebox.is(":visible") ? "Collapse" : "Expand";
        });
    });

});
