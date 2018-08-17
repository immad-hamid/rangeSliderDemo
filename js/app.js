$('#range_min_prefix').ionRangeSlider({
    // min: 10000,
    // max: 75000,
    // from: 25000,
    // step: 5000,
    grid: true,
    grid_snap: true,
    force_edges: true,
    prefix: '$',
    min_prefix: '< ',
    max_postfix: '+',
    decorate_both: false,
    prettify_enabled: true,
    prettify_separator: ',',
    hide_min_max: true,
    values: ['Womans', 'Mostly Womans', 'Any', 'Mostly Mens', 'Mens']
  });
  
  $('#range_balanced').ionRangeSlider({
    type: 'balanced',
    from: 1,
    grid: true,
    grid_snap: true,
    force_edges: true,
    hide_min_max: true,
    values: ['Womans', 'Mostly Womans', 'Any', 'Mostly Mens', 'Mens']
  });
  
  jQuery.fn.arrayGenerated = function(from, to, start) {
    var array, i;
    start = start || 50;
    array = [];
    array.push(from);
    i = -49;
    while (i < 50) {
      array.push(from + ' (' + (50 - i++) + '%) / ' + to + ' (' + (50 + i - 1) + '%)');
    }
    array.push(to);
    array[50] = 'Neutral';
    $(this).ionRangeSlider({
      type: 'balanced',
      from: start || 50,
      hide_from_to: true,
      force_edges: true,
      values: array
    });
    if (!from || !to) {
      console.log('"From" or "To" properties not existent!');
      return false;
    }
  };
  
  $('#batman_balanced').arrayGenerated('Batman', 'Superman', 30);
  
  $('#framework_balanced').arrayGenerated('PHP', 'node.js', 50);