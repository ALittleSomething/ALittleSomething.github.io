$(document).ready(function() {


    var pageURL = $(location).attr("href");
    if (pageURL.includes("?id=")) {
        var id = pageURL.split("=");
        loadProductData(id[1].split("#", 1).toString());
    } else {
        $(location).attr("href", "../home-fashion-store-v2.html");
    }
    // $('.lazy').lazy();

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
        // console.log(response);
        // console.log(response.pro_name);
        // $("#pro-name").html(response.pro_name);
        // $("#pro-price").html("RS " + response.pro_price);
        // $("#pro-desc").html(response.pro_desc);
        // $("#pro-cate").html(response.pro_cate);
        // $("#pro-type").html(response.pro_type);
        // $("#pro-mate").html(response.pro_mate);


        // $("#main-pic").html(
        //     "<div class='product-gallery-preview '><img class='rounded imgbox thumb image-zoom' data-zoom='../images/pro_pics/1.jpg' id='main-pic-zoom' src='../" + response.pro_pic_paths.split(":", 1) + "'</div>" +
        //     "<div class='image-zoom-pane' style='height:100px'></div>" +
        //     "</div>"
        // );

        var picList = response.pro_pic_paths.split(":");
        // console.log(picList);
        $("#pro-img-main").html("");
        $("#pro-img-thumb").html("");
        var imgCounter = 1;
        picList.forEach(element => {
            // console.log(element);
            if (element.length > 0) {
                if (imgCounter == 1) {
                    $("#pro-img-main").append(
                        "<div class='product-gallery-preview-item active' id='proimg" + imgCounter + "'>" +
                        "<img class='image-zoom lazy rounded-3' src='../images/loader.gif' data-src='../" + element + "' data-zoom='../" + element + "' alt='Product image'>" +
                        "<div class='image-zoom-pane'></div></div>"
                    );
                    $("#pro-img-thumb").append(
                        "<a class='product-gallery-thumblist-item active' href='#proimg" + imgCounter + "'><img class='lazy' src='../images/loader.gif' data-src='../" + element + "' alt='Product thumb'></a>"
                    );
                } else {
                    $("#pro-img-main").append(
                        "<div class='product-gallery-preview-item' id='proimg" + imgCounter + "'>" +
                        "<img class='image-zoom rounded-3' src='../" + element + "' data-zoom='../" + element + "' alt='Product image'>" +
                        "<div class='image-zoom-pane'></div></div>"
                    );
                    $("#pro-img-thumb").append(
                        "<a class='product-gallery-thumblist-item' href='#proimg" + imgCounter + "'><img class='lazy' src='../images/loader.gif' data-src='../" + element + "' alt='Product thumb'></a>"
                    );
                }
                imgCounter++;
            }
        })

        initImageLoadandZoom();

        // var colorList = response.pro_color.split(":");
        // $("#pro-color").html("");
        // colorList.forEach(element => {
        //     // console.log(element);
        //     if (element.length > 0) {
        //         console.log(element.length);
        //         $("#pro-color").append(
        //             "<label class='btn btn-light'>" +
        //             "<input type='radio' name='radio_color'>" + element +
        //             "</label>"
        //         );
        //     }
        // })


        // var sizeList = response.pro_size.split(":");
        // $("#pro-size").html("");
        // sizeList.forEach(element => {
        //     // console.log(element);
        //     if (element.length > 0) {
        //         $("#pro-size").append(
        //             "<label class='btn btn-light'>" +
        //             "<input type='radio' name='radio_color'>" + element +
        //             "</label>"
        //         );
        //     }
        // })
    });
}

function initImageLoadandZoom() {
    var s = document.querySelectorAll(".product-gallery");
    if (s.length)
        for (var e = 0; e < s.length; e++) ! function(r) {
            for (var a = s[r].querySelectorAll(".product-gallery-thumblist-item:not(.video-item)"), n = s[r].querySelectorAll(".product-gallery-preview-item"), e = s[r].querySelectorAll(".product-gallery-thumblist-item.video-item"), t = 0; t < a.length; t++) a[t].addEventListener("click", o);

            function o(e) {
                e.preventDefault();
                for (var t = 0; t < a.length; t++) n[t].classList.remove("active"), a[t].classList.remove("active");
                this.classList.add("active"), s[r].querySelector(this.getAttribute("href")).classList.add("active")
            }
            for (var l = 0; l < e.length; l++) lightGallery(e[l], { selector: "this", download: !1, videojs: !0, youtubePlayerParams: { modestbranding: 1, showinfo: 0, rel: 0, controls: 0 }, vimeoPlayerParams: { byline: 0, portrait: 0, color: "fe696a" } })
        }(e)
    $('.lazy').lazy();

    for (var e = document.querySelectorAll(".image-zoom"), t = 0; t < e.length; t++) new Drift(e[t], { paneContainer: e[t].parentElement.querySelector(".image-zoom-pane") })


}