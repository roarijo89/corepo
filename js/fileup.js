function AddMed() {
    var uploader = document.getElementById("uploader");
var fileButton = document.getElementById("fileButton");
var email = sessionStorage.getItem("email");
//Listen for file selection

fileButton.addEventListener('change', function (e) {
// Get File 
    var file = e.target.files[0];
//Create a storage ref

    var storageRef = firebase.storage().ref('file/' + file.name);
/** folder name will be email, 
Will have to transfer variable from page to page and files will be .jpeg**/
//Upload file 

    var task = storageRef.put(file);
//Update progress bar

    task.on('state_changed',
            function progress(snapshot) {
            var percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            uploader.value = percentage;
        },
        function complete() {

                });
});

}