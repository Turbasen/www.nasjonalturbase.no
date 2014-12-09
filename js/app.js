// Highlight source code
hljs.initHighlightingOnLoad();

// Thumbnail inline preview
$('.thumbnail-preview').on('click', function(e) {
  e.preventDefault();

  var parent = $(this).parent();

  var width = parent.css('width');
  var orgWidth = parent.data('orgWidth') || '';

  if (orgWidth) {
    parent.data('orgWidth', '');
    parent.animate({ 'width': orgWidth }, function() {
      parent.css('width', '');
    });
  } else {
    parent.data('orgWidth', width);
    parent.animate({ 'width': '100%' });
  }
});

// Enable all tooltips by default
$('a[data-toggle="tooltip"]').tooltip();

