var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
exports.handler = async function (event) {

    // console.log(event.headers);

    var Email = {
        send: function (a) {
            return new Promise(function (n, e) {
                a.nocache = Math.floor(1e6 * Math.random() + 1), a.Action = "Send";
                var t = JSON.stringify(a);
                Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) { n(e) })
            })
        },
        ajaxPost: function (e, n, t) {
            var a = Email.createCORSRequest("POST", e);
            a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), a.onload = function () { var e = a.responseText; null != t && t(e) }, a.send(n)
        },
        ajax: function (e, n) {
            var t = Email.createCORSRequest("GET", e);
            t.onload = function () {
                var e = t.responseText;
                null != n && n(e)
            }, t.send()
        },
        createCORSRequest: function (e, n) { //XDomainRequest
            var t = new XMLHttpRequest;
            return "withCredentials" in t ? t.open(e, n, !0) : "undefined" != typeof XMLHttpRequest ? (t = new XMLHttpRequest).open(e, n) : t = null, t
        }
    };

    if (event.headers.origin == 'https://abineshjanarthanan.netlify.app') {
        try {
            let res = await Email.send({
                Host: "smtp.gmail.com",
                Username: "abineshjanarthanan@gmail.com",
                Password: process.env.SECRET_KEY,
                To: "abineshjanarthanan@gmail.com",
                From: "abineshjanarthanan@gmail.com",
                Subject: `(From portfolio) ${JSON.parse(event.body).subject}`,
                Body: `From : ${JSON.parse(event.body).id} <br/> 
                    Subject : ${JSON.parse(event.body).subject} <br/> 
                    Message : ${JSON.parse(event.body).message}`
            }).then(msg => {
                console.log(msg);
                return msg;
            }).catch(error => {
                return error;
            })
            if (res == "OK") {
                return {
                    "statusCode": '200',
                    "status": "200",
                    "body": JSON.stringify(JSON.parse(event.body))
                };
            } else {
                return {
                    "statusCode": '500',
                    "status": "200",
                    "body": JSON.stringify(JSON.parse(res))
                };
            }
        }
        catch (err) {
            return {
                "statusCode": '500',
                "status": "200",
                "body": JSON.stringify(JSON.parse(err))
            };
        }
    } else {
        return {
            "statusCode": '500',
            "status": "200",
            "body": "error"
        };
    }
}