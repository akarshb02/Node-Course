<html>

<head>
    <title>Chat App</title>

    <div id="messages"> </div>

</head>

<body>
    <h1>
        Hello
    </h1>
    <form id="form">
        <input name="inputdata" id="inputt" placeholder="text">
        <button> click </button>
    </form>

    <script id='message-templete' type='text/html'>
        <div>
            <p>{{message}}</p>
        </div>


    </script>

    <script id='message-Location' type='text/html'>
        <div>
            <p><a href="{{url}}" target="_blank">My current location</a></p>
        </div>
    </script>

    <button id="send-location">send</button>

    <!-- <button id="button">click +1!</button> -->

    <script src="https://cdnjs.cloudflare.com/ajax/libs/mustache.js/3.0.1/mustache.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.22.2/moment.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qs/6.6.0/qs.min.js"></script>
    <script src="/socket.io/socket.io.js"></script>
    <script src="/js/chat.js"></script>

</body>

</html>
