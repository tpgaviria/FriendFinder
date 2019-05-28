var input = document.getElementById('image_uploads');
var preview = document.querySelector('.preview');

input.style.opacity = 0;

input.addEventListener('change', updateImageDisplay);

var uploadedPhoto = "";
var userStats = "";

function updateImageDisplay() {
    while (preview.firstChild) {
        preview.removeChild(preview.firstChild);
    }

    uploadedPhoto = input.files;

    console.log(uploadedPhoto);

    if (uploadedPhoto) {
        $('.preview').css('max-height', '200px').css('max-width', '200px');

        var previewImg = document.createElement('img');
        $(previewImg).addClass('rounded-circle')
        previewImg.src = window.URL.createObjectURL(uploadedPhoto[0]);
        preview.appendChild(previewImg);

        var button = document.getElementById('uploadbutton');
        button.innerHTML = "Change Photo";
        $(button).css('margin-top', '210px');
    }
}

$('#submit').on('click', function () {
    $('#homeinstructions').hide();
    var name = document.querySelector('input#name').value;
    var age = document.querySelector('input#age').value;

    $('.info').hide();
    $('#photo').attr('src', window.URL.createObjectURL(uploadedPhoto[0]));
    $('#stats').html(`<p>Name: ${name}<br>Age: ${age}`);

    $('#updatedInfo').css('display', 'block');

});

function editInfo() {
    $('.info').show();
    $('#updatedInfo').hide();
}

function start() {
    userStats = {
        name: document.querySelector('input#name').value,
        age: document.querySelector('input#age').value,
        image: window.URL.createObjectURL(uploadedPhoto[0])
    }

    $.post("/api/friends", userStats, function (data) {
        res.redirect('/survey');
    })
}