document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('deleteProduct').addEventListener('click', function() {
    deleteProduct(this.dataset.id);

  });

  function deleteProduct(productPath) {
    $.ajax({
      url: '/products/' + productPath,
      type: 'delete',
    });
  }


});

