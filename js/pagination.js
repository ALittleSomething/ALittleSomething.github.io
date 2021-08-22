// var products = [{
//         "pro_id": "1",
//         "pro_name": "item 1",
//         "pro_cate": "Earring",
//         "pro_img": "images/48597561_001_b.jpg",
//         "pro_price": 350
//     },
//     {
//         "pro_id": "2",
//         "pro_name": "item 2",
//         "pro_cate": "Necklace",
//         "pro_img": "images/48597561_001_b.jpg",
//         "pro_price": 100
//     }
// ]
var masonryGrids = [];
var products = [{
        "pro_id": 1,
        "pro_name": "New Earrings",
        "pro_cate": "Earrings",
        "pro_desc": "its a earring",
        "pro_color": "blue:yellow:red:Black",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "30mm",
        ],
        "pro_price": 250.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/1.jpg"
    },
    {
        "pro_id": 2,
        "pro_name": "Necklace",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red:",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "40mm"
        ],
        "pro_price": 100.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/2.jpg"
    },
    {
        "pro_id": 3,
        "pro_name": "Hair pin",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "120mm",
            "22mm",
            "67mm"
        ],
        "pro_price": 50.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/3.jpg"
    },
    {
        "pro_id": 4,
        "pro_name": "Something",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "100mm",
            "20mm",
            "67mm"
        ],
        "pro_price": 400.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/4.jpg"
    },
    {
        "pro_id": 5,
        "pro_name": "Aotherthing",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "56mm",
            "67mm"
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/5.jpg"
    },
    {
        "pro_id": 6,
        "pro_name": "Aotherthing",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "10mm",
            "12mm",
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/6.jpg"
    },
    {
        "pro_id": 7,
        "pro_name": "Aotherthing",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "1mm",
            "20mm",
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/7.jpg"
    },
    {
        "pro_id": 8,
        "pro_name": "Aotherthing",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "89mm",
            "67mm"
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/8.jpg"
    }, {
        "pro_id": 1,
        "pro_name": "New Earrings",
        "pro_cate": "Earrings",
        "pro_desc": "its a earring",
        "pro_color": "blue:yellow:red:Black",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "60mm",
            "67mm"
        ],
        "pro_price": 250.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/1.jpg"
    },
    {
        "pro_id": 2,
        "pro_name": "Necklace",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red:",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "24mm",
            "20mm",
        ],
        "pro_price": 100.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/2.jpg"
    },
    {
        "pro_id": 3,
        "pro_name": "Hair pin",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "12mm",
        ],
        "pro_price": 50.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/3.jpg"
    },
    {
        "pro_id": 4,
        "pro_name": "Something",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "100mm",
        ],
        "pro_price": 400.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/4.jpg"
    },
    {
        "pro_id": 5,
        "pro_name": "Aotherthing",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "100mm",
            "20mm",
            "67mm",
            "90mm"
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/5.jpg"
    },
    {
        "pro_id": 6,
        "pro_name": "Aotherthing",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "76mm",
            "34mm",
            "67mm"
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/6.jpg"
    },
    {
        "pro_id": 7,
        "pro_name": "Aotherthing",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type1",
        "pro_mate": "Plastic",
        "pro_size": [
            "24mm"
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/7.jpg"
    },
    {
        "pro_id": 8,
        "pro_name": "Aotherthing",
        "pro_cate": "HairPin",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type2",
        "pro_mate": "Plastic",
        "pro_size": [
            "20mm"
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/8.jpg"
    },
    {
        "pro_id": 8,
        "pro_name": "Aotherthingsss",
        "pro_cate": "test",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type2",
        "pro_mate": "Plastic2",
        "pro_size": [
            "100mm",
            "20mm",
        ],
        "pro_price": 230.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/8.jpg"
    },
    {
        "pro_id": 18,
        "pro_name": "searc",
        "pro_cate": "test",
        "pro_desc": "its a Hair",
        "pro_color": "blue:yellow:red",
        "pro_type": "type3",
        "pro_mate": "Plastic2",
        "pro_size": [
            "100mm",
            "20mm",
            "67mm"
        ],
        "pro_price": 2300.0,
        "pro_stock": 30,
        "pro_pic_paths": "images/pro_pics/8.jpg"
    }
]

// console.log(products[1])
$(document).ready(function() {
    var lazyload = true;

    startLoading();
    renderCategories();
    renderTypes();
    renderMaterials();
    renderSizes();
    initSliders();
    initFilterSearch();
    //NOTE: To append in different container
    var appendToContainer = function(htmlele, record) {
        console.log(record)
    };

    var afterFilter = function(result, jQ) {
        startLoading();
        $("#searchbox").prop('disabled', true);
        $('#total_products').slideUp("fast", function() {
            $('#total_products').text(result.length).slideDown();
        });




        var cate_checkboxes = $("#categories_criteria :input:gt(0)");
        cat_total = 0;
        cate_checkboxes.each(function() {
            var c = $(this),
                count = 0
            if (result.length > 0) {
                count = jQ.where({ 'pro_cate': c.val() }).count;
            }
            cat_total += count;
            $("#noofitems-cate-" + c.val()).slideUp("fast", function() {
                $("#noofitems-cate-" + c.val()).text(count).slideDown();
            });
        });
        $("#noofitems-cate-all").slideUp("fast", function() {
            $("#noofitems-cate-all").text(cat_total).slideDown();
        });

        var type_checkboxes = $("#types_criteria :input:gt(0)");
        type_total = 0;
        type_checkboxes.each(function() {
            var c = $(this),
                count = 0
            if (result.length > 0) {
                count = jQ.where({ 'pro_type': c.val() }).count;
            }
            type_total += count;
            $("#noofitems-type-" + c.val()).slideUp("fast", function() {
                $("#noofitems-type-" + c.val()).text(count).slideDown();
            });
        });
        $("#noofitems-type-all").slideUp("fast", function() {
            $("#noofitems-type-all").text(type_total).slideDown();
        });
        var mate_checkboxes = $("#material_criteria :input:gt(0)");
        mate_total = 0;
        mate_checkboxes.each(function() {
            var c = $(this),
                count = 0
            if (result.length > 0) {
                count = jQ.where({ 'pro_mate': c.val() }).count;
            }
            mate_total += count;
            $("#noofitems-mate-" + c.val()).slideUp("fast", function() {
                $("#noofitems-mate-" + c.val()).text(count).slideDown();
            });
        });
        $("#noofitems-mate-all").slideUp("fast", function() {
            $("#noofitems-mate-all").text(mate_total).slideDown();
        });
        var size_checkboxes = $("#size_criteria :input:gt(0)");
        size_total = 0;
        size_checkboxes.each(function() {
            var c = $(this),
                count = 0
            if (result.length > 0) {
                count = jQ.where({ 'pro_size': c.val() }).count;
            }
            size_total += count;
            $("#noofitems-size-" + c.val()).slideUp("fast", function() {
                $("#noofitems-size-" + c.val()).text(count).slideDown();
            });
        });
        $("#noofitems-size-all").slideUp("fast", function() {
            $("#noofitems-size-all").text(size_total).slideDown();
        });

        masonryGrid();

        stopLoading();

        if (result.length == 0) {
            startEmpty();
            console.log("enoty")
        } else {
            stopEmpty();
        }

        $('.lazy').lazy();
        $("#pagination").click(function() {
            masonryGrid();
            $('.lazy').lazy();
        });
        $("#per_page").click(function() {
            masonryGrid();
            $('.lazy').lazy();
        });
        // $("body").click(function() {
        //     masonryGrid();
        //     $('.lazy').lazy();
        // });
        $("#searchbox").prop('disabled', false).focus();

    }

    var FJS = FilterJS(products, '#products', {
        template: '#product-template',
        search: { ele: '#searchbox' },
        // search: { ele: '#searchbox2', fields: ['pro_name'] },
        //search: {ele: '#searchbox', fields: ['runtime']}, // With specific fields
        callbacks: {
            afterFilter: afterFilter
        },
        pagination: {
            container: '#pagination',
            visiblePages: 5,
            perPage: {
                values: [10, 15, 25],
                container: '#per_page'
            },
        }
    });

    FJS.addCallback('beforeAddRecords', function() {
        if (this.recordsCount >= 450) {
            this.stopStreaming();
        }
        console.log("fffffffffffffff");

    });

    FJS.addCallback('afterAddRecords', function() {
        var percent = (this.recordsCount - 250) * 100 / 250;
        console.log("fffffffffffffff");
        $('#stream_progress').text(percent + '%').attr('style', 'width: ' + percent + '%;');

        if (percent == 100) {
            $('#stream_progress').parent().fadeOut(1000);
        }
    });

    // FJS.setStreaming({
    //     data_url: '/stream_movies.json',
    //     stream_after: 1,
    //     batch_size: 50
    // });

    FJS.addCriteria({ field: 'pro_cate', ele: '#categories_criteria input:checkbox' });
    FJS.addCriteria({ field: 'pro_type', ele: '#types_criteria input:checkbox' });
    FJS.addCriteria({ field: 'pro_mate', ele: '#material_criteria input:checkbox' });
    FJS.addCriteria({ field: 'pro_size', ele: '#size_criteria input:checkbox' });
    // FJS.addCriteria({ field: 'year', ele: '#year_filter', type: 'range', all: 'all' });
    // FJS.addCriteria({ field: 'rating', ele: '#rating_filter', type: 'range' });
    // FJS.addCriteria({ field: 'runtime', ele: '#runtime_filter', type: 'range' });
    // FJS.addCriteria({ field: 'genre', ele: '#genre_criteria input:checkbox' });

    /*
     * Add multiple criterial.
      FJS.addCriteria([
        {field: 'genre', ele: '#genre_criteria input:checkbox'},
        {field: 'year', ele: '#year_filter', type: 'range'}
      ])
    */

    window.FJS = FJS;

    $('.container').hover(function() {
        // masonryGrid();
        masonryGrids.forEach(element => {
            element.layout();
        });
    });
});

function renderCategories() {
    // var categories = ["Falafel", "Vegan", "Gluten-Free", "Coffee & Tea", "Landmarks & Historical Buildings", "Venues & Event Spaces", "Desserts", "Chocolatiers & Shops", "Ethiopian", "Bakeries", "Creperies", "American (New)", "Delis", "Sushi Bars", "Japanese", "Sandwiches", "Hawaiian", "Asian Fusion", "Chinese", "Tea Rooms", "Local Flavor", "Hiking", "Vietnamese", "Parks", "Beaches", "Pizza", "Italian", "Bars", "Tobacco Shops", "Peruvian", "Laotian", "Thai", "Gastropubs", "Mexican", "French", "American (Traditional)", "Breakfast & Brunch", "Steakhouses", "Mediterranean", "Grocery", "Convenience Stores", "Wine Bars", "Pubs", "Juice Bars & Smoothies", "Cocktail Bars", "Food Stands", "Meat Shops", "German", "Indian", "Food Delivery Services", "Caterers", "Videos & Video Game Rental", "Salad"];
    var category = [];
    for (let index = 0; index < products.length; index++) {
        category[index] = products[index].pro_cate;
    }

    var categories = [...new Set(category)]
    var html = $('#categories_template').html();
    var templateFn = FilterJS.templateBuilder(html)
    var container = $('#categories_criteria');

    $.each(categories, function(i, c) {
        container.append(templateFn({ pro_cate: c, value: c }))
    });

}

function renderTypes() {
    // var categories = ["Falafel", "Vegan", "Gluten-Free", "Coffee & Tea", "Landmarks & Historical Buildings", "Venues & Event Spaces", "Desserts", "Chocolatiers & Shops", "Ethiopian", "Bakeries", "Creperies", "American (New)", "Delis", "Sushi Bars", "Japanese", "Sandwiches", "Hawaiian", "Asian Fusion", "Chinese", "Tea Rooms", "Local Flavor", "Hiking", "Vietnamese", "Parks", "Beaches", "Pizza", "Italian", "Bars", "Tobacco Shops", "Peruvian", "Laotian", "Thai", "Gastropubs", "Mexican", "French", "American (Traditional)", "Breakfast & Brunch", "Steakhouses", "Mediterranean", "Grocery", "Convenience Stores", "Wine Bars", "Pubs", "Juice Bars & Smoothies", "Cocktail Bars", "Food Stands", "Meat Shops", "German", "Indian", "Food Delivery Services", "Caterers", "Videos & Video Game Rental", "Salad"];
    var types = [];
    for (let index = 0; index < products.length; index++) {
        types[index] = products[index].pro_type;
    }

    var typess = [...new Set(types)]
    var html = $('#types_template').html();
    var templateFn = FilterJS.templateBuilder(html)
    var container = $('#types_criteria');

    $.each(typess, function(i, c) {
        container.append(templateFn({ pro_type: c, value: c }))
    });
}

function renderMaterials() {
    // var categories = ["Falafel", "Vegan", "Gluten-Free", "Coffee & Tea", "Landmarks & Historical Buildings", "Venues & Event Spaces", "Desserts", "Chocolatiers & Shops", "Ethiopian", "Bakeries", "Creperies", "American (New)", "Delis", "Sushi Bars", "Japanese", "Sandwiches", "Hawaiian", "Asian Fusion", "Chinese", "Tea Rooms", "Local Flavor", "Hiking", "Vietnamese", "Parks", "Beaches", "Pizza", "Italian", "Bars", "Tobacco Shops", "Peruvian", "Laotian", "Thai", "Gastropubs", "Mexican", "French", "American (Traditional)", "Breakfast & Brunch", "Steakhouses", "Mediterranean", "Grocery", "Convenience Stores", "Wine Bars", "Pubs", "Juice Bars & Smoothies", "Cocktail Bars", "Food Stands", "Meat Shops", "German", "Indian", "Food Delivery Services", "Caterers", "Videos & Video Game Rental", "Salad"];
    var mate = [];
    for (let index = 0; index < products.length; index++) {
        mate[index] = products[index].pro_mate;
    }

    var materials = [...new Set(mate)]
    var html = $('#material_template').html();
    var templateFn = FilterJS.templateBuilder(html)
    var container = $('#material_criteria');

    $.each(materials, function(i, c) {
        container.append(templateFn({ pro_mate: c, value: c }))
    });
}

function renderSizes() {
    // var categories = ["Falafel", "Vegan", "Gluten-Free", "Coffee & Tea", "Landmarks & Historical Buildings", "Venues & Event Spaces", "Desserts", "Chocolatiers & Shops", "Ethiopian", "Bakeries", "Creperies", "American (New)", "Delis", "Sushi Bars", "Japanese", "Sandwiches", "Hawaiian", "Asian Fusion", "Chinese", "Tea Rooms", "Local Flavor", "Hiking", "Vietnamese", "Parks", "Beaches", "Pizza", "Italian", "Bars", "Tobacco Shops", "Peruvian", "Laotian", "Thai", "Gastropubs", "Mexican", "French", "American (Traditional)", "Breakfast & Brunch", "Steakhouses", "Mediterranean", "Grocery", "Convenience Stores", "Wine Bars", "Pubs", "Juice Bars & Smoothies", "Cocktail Bars", "Food Stands", "Meat Shops", "German", "Indian", "Food Delivery Services", "Caterers", "Videos & Video Game Rental", "Salad"];
    var types = [];
    for (let index = 0; index < products.length; index++) {

        console.log(types.length)

        if (types.length) {

        } else {

        }

        if (Array.isArray(products[index].pro_size)) {
            // var id = pageURL.split("=");
            // console.log(id[1].split("#", 1).toString());
            console.log("woooooll");

            let list = products[index].pro_size;
            list.forEach(element => {
                types[types.length] = element;
            });
        } else {
            types[types.length] = products[index].pro_size;
        }
        console.log(products[index].pro_size);

        // if (products[index].pro_size.co)
    }
    console.log(types.length)
    console.log(types)


    var typess = [...new Set(types)]
    var html = $('#size_template').html();
    var templateFn = FilterJS.templateBuilder(html)
    var container = $('#size_criteria');

    $.each(typess, function(i, c) {
        container.append(templateFn({ pro_size: c, value: c }))
    });
}


function initSliders() {
    // $("#rating_slider").slider({
    //     min: 8,
    //     max: 10,
    //     values: [8, 10],
    //     step: 0.1,
    //     range: true,
    //     slide: function(event, ui) {
    //         $("#rating_range_label").html(ui.values[0] + ' - ' + ui.values[1]);
    //         $('#rating_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    //     }
    // });

    // $("#runtime_slider").slider({
    //     min: 50,
    //     max: 250,
    //     values: [0, 250],
    //     step: 10,
    //     range: true,
    //     slide: function(event, ui) {
    //         $("#runtime_range_label").html(ui.values[0] + ' mins. - ' + ui.values[1] + ' mins.');
    //         $('#runtime_filter').val(ui.values[0] + '-' + ui.values[1]).trigger('change');
    //     }
    // });

    $('#categories_criteria :checkbox').prop('checked', true);
    $('#all_cate').on('click', function() {
        $('#categories_criteria :checkbox').prop('checked', $(this).is(':checked'));
    });
    $('#types_criteria :checkbox').prop('checked', true);
    $('#all_type').on('click', function() {
        $('#types_criteria :checkbox').prop('checked', $(this).is(':checked'));
    });
    $('#material_criteria :checkbox').prop('checked', true);
    $('#all_mate').on('click', function() {
        $('#material_criteria :checkbox').prop('checked', $(this).is(':checked'));
    });
    $('#size_criteria :checkbox').prop('checked', true);
    $('#all_size').on('click', function() {
        $('#size_criteria :checkbox').prop('checked', $(this).is(':checked'));
    });
}

function initFilterSearch() {
    for (var t = document.querySelectorAll(".widget-filter"), e = 0; e < t.length; e++)(function(e) {
        var r = t[e].querySelector(".widget-filter-search"),
            a = t[e].querySelector(".widget-filter-list").querySelectorAll(".widget-filter-item");
        if (!r) return;
        r.addEventListener("keyup", function() {
            for (var e = r.value.toLowerCase(), t = 0; t < a.length; t++) - 1 < a[t].querySelector(".widget-filter-item-text").innerHTML.toLowerCase().indexOf(e) ? a[t].classList.remove("d-none") : a[t].classList.add("d-none")
        })
    })(e)
    e = document.querySelector("[data-filter-trigger]"), l = document.querySelectorAll("[data-filter-target]"), null !== e && e.addEventListener("change", function() {
        var e = this.options[this.selectedIndex].value.toLowerCase();
        if ("all" === e)
            for (var t = 0; t < l.length; t++) l[t].classList.remove("d-none");
        else {
            for (var r = 0; r < l.length; r++) l[r].classList.add("d-none");
            document.querySelector("#" + e).classList.remove("d-none")
        }
    })
}
// var loaderIsRunning = false;

function startLoading() {
    // if (!loaderIsRunning) {
    //     loaderIsRunning = true;
    // console.log("laodingstart")
    $(".loading").fadeIn();
    $("#items").css("opacity", "0.0");
    $("#empty").css("opacity", "0.0");
}




function stopLoading() {
    $(".loading").fadeOut("slow", function() {
        $("#items").animate({
            opacity: '1.0',
        });
        $("#empty").animate({
            opacity: '1.0',
        });
    });
    // loaderIsRunning = false;
}

function startEmpty() {
    $(".empty").fadeIn();
    $("#items").css("opacity", "0.0");
}

function stopEmpty() {
    $(".empty").fadeOut("slow", function() {
        $("#items").animate({
            opacity: '1.0',
        });
    });
    // loaderIsRunning = false;
}


function masonryGrid() {
    var e, t = document.querySelectorAll(".masonry-grid");
    if (null !== t) {
        for (var r = 0; r < t.length; r++) e = new Shuffle(t[r], { speed: 490, isCentered: false, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)', itemSelector: ".masonry-grid-item", sizer: ".masonry-grid-item" }), imagesLoaded(t[r]).on("progress", function() { e.layout() })
        masonryGrids[r] = e;
    }
}