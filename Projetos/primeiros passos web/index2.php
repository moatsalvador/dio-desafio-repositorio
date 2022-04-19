<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Meu primeiro site em PHP!</title>
    <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

    <style type="text/css">
        .linha{
            font-weight:bold;
            color: green;
            padding-left: 10px;
            line-height: 50px;
        }
        </style>
</head>
<body>
    <?php
        for ($i = 0; $i < 10; $i++){
            print("Linha número " . $i . "<br />");
        }
</body>
</html>