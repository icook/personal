$("#resume_link").click ->
    # Move the header to the top, and show the down arrow
    $('#header').transition(
        "font-size": 36
        height:45
        easing: 'easeInBack'
        duration: 200)
        .delay(150)
        .transition(
            "padding-left": 80
            easing: "ease"
            duration: 200, ->
                $('#return').css display:"inline-block"
        )
    # Hide my name, it's too big for the header
    $('#name').transition("height": 1, opacity:0, delay: 200, width:1)

    # Fold down our main content
    h = $(document).height() - $('#header').height() - 10
    $('#content').transition(
        height: h
        opacity: 1
        delay: 500, ->
             $('#content').addClass "main_show"
             $('#content').css height:"auto"
        )

$("#other_link").click ->
    $('#content').transition(
        opacity: 0
        duration: 300, ->
             h = $('#content').html()
             $('#content').html($('#backbuffer').html())
             $('#backbuffer').html(h)
        ).transition opacity: 1

$("#return").click ->
    $('#content').transition(
        opacity: 0
        height: 0
        duration: 300, ->
             $('#content').removeClass "main_show"
        )
    $('#header').transition(
        "font-size": "44pt"
        height:51
        easing: 'easeInBack'
        duration: 200)
        .delay(150)
        .transition(
            "padding-left": 300
            easing: "ease"
            duration: 200, ->
                $('#return').css display:"none"
        )
    $('#name').transition("height": 70, opacity:1, delay: 200, width:350)
