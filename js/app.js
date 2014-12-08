// Highlight source code
hljs.initHighlightingOnLoad();

// Thumbnail inline preview
$('.thumbnail-preview').on('click', function(e) {
  e.preventDefault();

  var width = $(this).css('width');
  var orgWidth = $(this).data('orgWidth') || '';

  if (orgWidth) {
    $(this).data('orgWidth', '');
    $(this).animate({ 'width': orgWidth }, function() {
      $(this).css('width', '');
    });
  } else {
    $(this).data('orgWidth', width);
    $(this).animate({ 'width': '100%' });
  }
});

// Enable all tooltips by default
$('a[data-toggle="tooltip"]').tooltip();

