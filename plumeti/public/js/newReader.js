$(document).ready(function() {

    var readURL = function(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#avatarId').attr('src', e.target.result);
            }
            reader.readAsDataURL(input.files[0]);
            $('#avatar').css({'display':'none'})
        }
    }
    $('#avatar').on('change', function(){
        readURL(this);
    });
});