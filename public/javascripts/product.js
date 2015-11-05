document.addEventListener("DOMContentLoaded", function(event) {
    document.getElementById('deleteCrib').addEventListener('click', function() {
        deleteCrib(this.dataset.id);

    });

    function deleteCrib(id) {
        $.ajax({
            url: '/crib/' + id,
            type: 'delete',
        });
    }


});