$(document).ready(function() {

    loadCart();

    $("#cartitems input").click(price());

});
var no = 4;

function remove() {
    no -= 1;
    loadCart()
}

function price() {

}

function loadCart() {
    var data = {
        url: "http://localhost:8081/products/allproducts",
        method: "GET",
        timeout: 3000,
    };

    $.ajax(data).done(function(response) {
        $("#cartitems").html("");
        // console.log(response);

        var subtotal = 0;
        $.each(response, function(k, v) {
            // console.log(v);
            // console.log(v.pro_pic_paths);
            subtotal += v.pro_price;
            if (k < no) {
                $("#cartitems").append(
                    "<div class='d-sm-flex justify-content-between align-items-center my-2 pb-3 border-bottom' id='cartitem" + k + "'>" +
                    "<div class='d-block d-sm-flex align-items-center text-center text-sm-start'>" +
                    "<a class='d-inline-block flex-shrink-0 mx-auto me-sm-4' href='/User/TEst1/pages/productdetails.html?proid=" + v.pro_id + "'><img src='../" + v.pro_pic_paths.split(":", 1) + "' width='160' alt='Product'></a>" +
                    "<div class='pt-2'>" +
                    "<h3 class='product-title fs-base mb-2'><a href='shop-single-v1.html'>Cotton Polo Regular Fit</a></h3>" +
                    "<div class='fs-sm'><span class='text-muted me-2'>Type:</span>" + v.pro_type + "</div>" +
                    "<div class='fs-sm'><span class='text-muted me-2'>Material:</span>" + v.pro_mate + "</div>" +
                    "<div class='fs-sm'><span class='text-muted me-2'>Size:</span>" + v.pro_size + "</div>" +
                    "<div class='fs-sm'><span class='text-muted me-2'>Color:</span>" + v.pro_color.split(":", 1) + "</div>" +
                    "<div class='fs-lg text-accent pt-2' " + k + "'>RS " + v.pro_price + ".<small>00</small></div>" +
                    "</div>" +
                    "</div>" +
                    "<div class='pt-2 pt-sm-0 ps-sm-3 mx-auto mx-sm-0 text-center text-sm-start' style='max-width: 9rem;'>" +
                    "<label class='form-label' for='quantity4'>Quantity</label>" +
                    "<input class='form-control' type='number' id='quantity4' min='1' max='10' value='" + 1 + "'>" +
                    "<button class='btn btn-link px-0 text-danger' onclick='remove()' type='button'><i class='ci-close-circle me-2'></i><span class='fs-sm'>Remove</span></button>" +
                    "</div>" +
                    "</div>"
                );
            }
            $("#subtotal").html(
                "Rs " + subtotal + ".<small>00</small>");
        });
    });
}