function createRequest() {
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