const gmailBtn = document.getElementById("gmail-btn");

function copyGmail() {

    navigator.permissions.query({ name: "write-on-clipboard" }).then((result) => {

        if (result.state == "granted" || result.state == "prompt") {

            var gmail = document.getElementById("gmail").innerHTML;
            
            navigator.clipboard.writeText(gmail).then(() => {
                navigator.clipboard.writeText(gmail);
            },() => {
                console.error('Failed to copy: ', err);
            });

        }

    });

}
