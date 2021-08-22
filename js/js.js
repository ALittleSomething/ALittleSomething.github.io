$(document).ready(function() {

    loadProducts();



});



function loadProducts() {
    var data = {
        url: "http://localhost:8081/products/allproducts",
        method: "GET",
        timeout: 3000,
    };

    $.ajax(data).done(function(response) {
        $("#products").html("");
        console.log(response);
        $.each(response, function(k, v) {
            console.log(v);
            console.log(v.pro_pic_paths);

            if (k < 4) {
                $("#products").append(
                    "<div class='col-md-3'>" +
                    "<div href='/User/TEst1/pages/productdetails.html?proid=" + v.pro_id + "' class='card card-product-grid'>" +
                    "<a href='/User/TEst1/pages/productdetails.html?proid=" + v.pro_id + "' class='img-wrap rounded'> <img src='" + v.pro_pic_paths.split(":", 1) + "' style='padding-top:20px'> </a>" +
                    "<figcaption class='info-wrap'>" +
                    "<a href='/User/TEst1/pages/productdetails.html?proid=" + v.pro_id + "' class='title'>" + v.pro_name + "</a>" +
                    "<div class='rating-wrap'>" +
                    "<ul class='rating-stars'>" +
                    "<li style='width:" + (Math.floor((Math.random() * 100) + 1)) + "%' class='stars-active'>" +
                    "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" +
                    "</li>" +
                    "<li>" +
                    "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" +
                    "</li>" +
                    "</ul>" +
                    "<span class='label-rating text-muted'>" + (Math.floor((Math.random() * 100) + 1)) + "reviws</span>" +
                    "</div>" +
                    "<div class='price mt-1'>Rs. " + v.pro_price + "</div>" +
                    "</figcaption>" +
                    "</div>"
                );
            } else {
                $("#products2").append(
                    "<div class='col-md-3'>" +
                    "<div href='/pages/productdetails.html?proid=" + v.pro_id + "' class='card card-product-grid'>" +
                    "<a href='/User/TEst1/pages/productdetails.html?proid=" + v.pro_id + "' class='img-wrap'> <img src='" + v.pro_pic_paths.split(":", 1) + "' style='padding-top:20px'> </a>" +
                    "<figcaption class='info-wrap'>" +
                    "<a href='#' class='title'>" + v.pro_name + "</a>" +
                    "<div class='rating-wrap'>" +
                    "<ul class='rating-stars'>" +
                    "<li style='width:" + (Math.floor((Math.random() * 100) + 1)) + "%' class='stars-active'>" +
                    "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" +
                    "</li>" +
                    "<li>" +
                    "<i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i><i class='fa fa-star'></i>" +
                    "</li>" +
                    "</ul>" +
                    "<span class='label-rating text-muted'>" + (Math.floor((Math.random() * 100) + 1)) + "reviws</span>" +
                    "</div>" +
                    "<div class='price mt-1'>Rs. " + v.pro_price + "</div>" +
                    "</figcaption>" +
                    "</div>"
                );
            }
            return k < 7;

        });
    });
}