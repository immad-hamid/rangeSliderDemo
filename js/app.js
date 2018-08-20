document.addEventListener('DOMContentLoaded', removeSmallPolls, false);

function removeSmallPolls() {
  document.querySelectorAll('.irs-grid-pol.small').forEach((el) => {
    el.remove();
  });
}

let $range = $(".js-range-slider"),
    $result = $(".js-result"),
    $getvalues = $(".js-get-values"),
    from = 1;

let saveResult = function (data) {
    from = data.from;
    to = data.to;
    if (from === 1) {
      removeSmallPolls();
      document.querySelectorAll('.irs-grid-pol').forEach(el => el.style.borderColor = '#cfd8de');
    }
    else if (from === 2) {
      document.querySelectorAll('.irs-grid-pol').forEach((el, i) => {
        (i < 2) ? el.style.borderColor = '#10ebb1' : el.style.borderColor = '#cfd8de'
      });
    }
    else if (from === 3) {
      document.querySelectorAll('.irs-grid-pol').forEach((el, i) => {
        (i < 3) ? el.style.borderColor = '#10ebb1' : el.style.borderColor = '#cfd8de'
      });
    }
    else document.querySelectorAll('.irs-grid-pol').forEach(el => el.style.borderColor = '#10ebb1')
    
    writeResult();
};

var writeResult = function () {
  let result;
  if (from === 1) result = `$${(5 * 50)}`;
  if (from === 2) result = `$${(20 * 75)}`;
  if (from === 3) result = `$${(45 * 100)}`;
  if (from === 4) result = `$${(80 * 100)}`;
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
