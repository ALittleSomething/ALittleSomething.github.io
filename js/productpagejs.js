$(document).ready(function() {
    // jQuery code
    $('#button-plus').click(function() {
        let counter = $('#counter').val();
        if (counter != 10) {
            $('#counter').val((parseInt(counter)) + 1);
        }
    });

    $('#button-minus').click(function() {
        let counter = $('#counter').val();
        if (counter != 1) {
            $('#counter').val((parseInt(counter)) - 1);
        }
    });

    var pageURL = $(location).attr("href");
    if (pageURL.includes("?proid=")) {
        var id = pageURL.split("=");
        loadProductData(id[1].split("#", 1).toString());
    } else {
        $(location).attr("href", "../page-index-1.html");
    }
});




function loadProductData(id) {
    console.log(id)
    var data = {
        url: "http://localhost:8081/products/" + id,
        method: "GET",
        // timeout: 3000,
    };

    $.ajax(data).done(function(response) {
        // $.each(response, function(k, v) {
        console.log(response);
        console.log(response.pro_name);
        $("#pro-name").html(response.pro_name);
        $("#pro-price").html("RS " + response.pro_price);
        $("#pro-desc").html(response.pro_desc);
        $("#pro-cate").html(response.pro_cate);
        $("#pro-type").html(response.pro_type);
        $("#pro-mate").html(response.pro_mate);


        $("#main-pic").html(
            "<div class='product-gallery-preview '><img class='rounded imgbox thumb image-zoom' data-zoom='../images/pro_pics/1.jpg' id='main-pic-zoom' src='../" + response.pro_pic_paths.split(":", 1) + "'</div>" +
            "<div class='image-zoom-pane' style='height:100px'></div>" +
            "</div>"
        );

        var picList = response.pro_pic_paths.split(":");
        console.log(picList);
        $("#other-pics").html("");
        picList.forEach(element => {
            // console.log(element);
            if (element.length > 0) {
                $("#other-pics").append(
                    "<a href='# '><img class='item-thumb ' onclick='changeImg(this)' src='../" + element + "'></a>"
                );
            }
        })
        var colorList = response.pro_color.split(":");
        $("#pro-color").html("");
        colorList.forEach(element => {
            // console.log(element);
            if (element.length > 0) {
                console.log(element.length);
                $("#pro-color").append(
                    "<label class='btn btn-light'>" +
                    "<input type='radio' name='radio_color'>" + element +
                    "</label>"
                );
            }
        })


        var sizeList = response.pro_size.split(":");
        $("#pro-size").html("");
        sizeList.forEach(element => {
            // console.log(element);
            if (element.length > 0) {
                $("#pro-size").append(
                    "<label class='btn btn-light'>" +
                    "<input type='radio' name='radio_color'>" + element +
                    "</label>"
                );
            }
        })
    });
}

function changeImg(img) {
    $("#main-pic").html(
        "<div class='magnify'>" +
        "<div class='large'></div>" +
        "<div class='imgbox'><a href='# '><img class='rounded imgbox thumb' id='main-pic-zoom' src='" + img.src + "'style='padding-top:0px'></a></div>" + "</div>"
    );
}