var $range = $(".js-range-slider"),
    $result = $(".js-result"),
    $getvalues = $(".js-get-values"),
    
    from = 1;

var saveResult = function (data) {
    from = data.from;
    to = data.to;
    writeResult();
};

var writeResult = function () {
    var result = "from: " + from + ", to: " + to;
    $result.html(result);
};

$range.ionRangeSlider({
  from_min: 1,
  from_max: 4,
  grid: true,
  grid_snap: true,
  force_edges: true,
  decorate_both: false,
  prettify_enabled: true,
  prettify_separator: ',',
  hide_min_max: true,
  values: ['', '5 Customers<br><span>$50/sales</span>', '5 Customers<br><span>$50/sales</span>', '5 Customers<br><span>$50/sales</span>', '5 Customers<br><span>$50/sales</span>', ''],
    from: from,
    onStart: function (data) {
        saveResult(data);
        writeResult();
    },
    onChange: saveResult,
    onFinish: saveResult
});

$getvalues.on("click", writeResult);



// $('#range_min_prefix').ionRangeSlider({
//     // min: 10000,
//     // max: 75000,
//     // from: 25000,
//     // step: 5000,
//     grid: true,
//     grid_snap: true,
//     force_edges: true,
//     prefix: '$',
//     min_prefix: '< ',
//     max_postfix: '+',
//     decorate_both: false,
//     prettify_enabled: true,
//     prettify_separator: ',',
//     hide_min_max: true,
//     values: ['Womans', 'Mostly Womans', 'Any', 'Mostly Mens', 'Mens']
//   });
  
