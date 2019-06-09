
$('#fetch').click(function () {
    var username = $('#username').val()
    var quantity = $('#post-limit').val()
    $("#username").val("")
    $("#post-limit").val("")
    var urlText = "https://api.lityapp.com/instagrams/" + username + "?limit=50"
    console.log(urlText)

    $.ajax({
        url: urlText
    }).done(function (data) {
        var insData = JSON.parse(data)
        console.log(insData.photoUrlHD)
        var insContainer = $('#ins')
        var profileBox = $('#prof')
        $('<img>').attr('src', insData.photoUrlHD).appendTo(profileBox)
        var postList = insData.posts
        count = 0;
        for (var i = 0; i < quantity; i++) {
            $('<img>').attr('src', postList[i].photoUrl).css({
                'width': 500,
                'height': 500
            }).appendTo(insContainer)

            $('<p>').text(postList[i].caption).css({
                'font-family': "Montserrat",
                'font-weight': 300
            }).appendTo(insContainer)
            count++;
        }

        $("#add5").click(function () {
            newCount = count;
            for (var i = count; i < newCount + 5; i++) {
                $('<img>').attr('src', postList[i].photoUrl).css({
                    'width': 500,
                    'height': 500
                }).appendTo(insContainer)

                $('<p>').text(postList[i].caption).css({
                    'font-family': "Montserrat",
                    'font-weight': 300
                }).appendTo(insContainer)
                count++;
            }
        })

    })
})

$("#clear").click(function () {
    $("#ins").empty()
    $("#prof").empty()
})