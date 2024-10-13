/* Doc listener */
document.addEventListener("DOMContentLoaded", function() {
    // Button Caller
    const button = document.getElementById("136");
    button.addEventListener("click", function () {
        fetch("download/example.txt")
            .then(Response => Response.blob())
            .then(blob => {
                const url = URL.createObjectURL(blob)
                const a = document.createElement("a")
                a.href = url;
                a.download = "example.txt";
                a.click();

                URL.revokeObjectURL(url);
            })
    })
});