window.onload = initPage;

function initPage() {
    var images = document.getElementById("thumbnailPane").getElementsByTagName("img");

    for (var i = 0; i < images.length; i++) {
        console.log("i: " + i + ", img.title: " + images[i].title);
        var image = images[i];
        image.onclick = function() {
            var imgUrl = "images/" + this.title + "-detail.jpg";
            console.log("imgUrl: " + imgUrl);
            document.getElementById("itemDetail").src = imgUrl;
            getDetails(this.title);
        }
    }
}

function getXMLRequest() {
    var request;
    try {
        request = new XMLHttpRequest();
    } catch (ms) {
        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (otherMs) {
            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (error) {
                request = null;
            }
        }
    }
    return request;
}

function getDetails(title) {
    var request = getXMLRequest();
    if (request == null) {
        return;
    }
    console.log("getDetails(): readyState: " + request.readyState);
    var url = "getDetails.php?ImageID=" + title;
    request.open("GET", url);
    request.onload = function() {
        var desc = document.getElementById("description");
        desc.innerHTML = request.responseText;
    }
    request.send(null);
}
