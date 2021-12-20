/*
 <script>
  var a, b;
  a = prompt ("nhap a");
  b = prompt ("nhap b");
  a= parseInt (a);
  b = parseInt (b);
  document.write ("a + b = " + (a + b) + "<br/>");
</script>
<script>
    let inputWidth;
    let inputHeight;
    inputWidth = prompt("Enter the width");
    inputHeight = prompt("Enter the height");
    let width = parseInt(inputWidth);
    let height = parseInt(inputHeight);
    let area = width * height;
    document.write("The area  is: " + area);
</script>
<script>
    let day = prompt ('enter the day');
    let month = prompt ('enter the month');
    let year = prompt ('enter the year');
    document.write ("ngay:" + day + "<br/>");
    document.write ("thang:" + month + "<br/>");
    document.write ("nam:" + year + "<br/>");
    document.write ("Ket qua hien thi: " + ( day ) + ( - month ) + ( - year ));
</script>
<script>
    var R; //ban kinh 
    var Pi = 3.14; //la so pi
    R = prompt ('nhap R');
    var R = parseInt (R);
    document.write ("C = " + (R * Pi) + "<br/>" + " và " + "S = " + (2 * R * Pi));
</script>
    var inputinvest;
    var inputyear;
    var inputprofit;
    inputinvest = prompt ('enter the invest');
    inputyear = prompt ('enter the year');
    inputprofit = prompt ('enter the profit');
    inputinvest = parseFloat(inputinvest);
    inputyear = parseFloat(inputyear);
    inputprofit = parseFloat(inputprofit);
    document.write ("invest: " + inputinvest + "<br/>");
    document.write ("year: " + inputyear + "<br/>");
    document.write ("profit: " + inputprofit + "<br/>");
    var area = inputinvest + inputyear * inputprofit;
    document.write ("result: " + area);
</script>
</script>
    let yourName = prompt ('enter the yourName');
    let address = prompt ('enter the address');
    let time = prompt ('enter the time');
    let content = prompt ('enter the content');
    document.write ("Ten nguoi nha:" + yourName);
    document.write ("Dia chi:" + address);
    document.write ("Thoi gian:" + time);
    document.write ("Ket qua hien thi:" + content);
</script>
    script>
        console.log('Hello world');
    </script>
    <script>
        document.write('Hello world');
    </script>
    <script>
    alert('Hello world');
    </script>



    <body>
        <button onclick="showmessage1()">Click</button>
        <button id="btn2">cach 2</button>
    </body>
    </html>
    <script>
        function showmessage1() {
            alert("da lam cach 1"); 
        }
        var button2 = document.getElementById("btn2");
        button2.addEventListener("click", showmessage2);
        function showmessage2() {
            alert("da lam cach 2");
        } 
    </script>

        /*
        onmouseover & onmouseout

        <body>
        <h4 id="demo">I'm a Billionaire</h4>
    </body>
    </html>
    <script>
        var demo = document.getElementById('demo');
        demo.addEventListener("mouseover", mouseover);
        demo.addEventListener("mouseout", mouseout);
        function mouseover() {
            document.getElementById('demo').style.color = "red";
        }
        function mouseout() {
            document.getElementById('demo').style.color = "blue";
        }
    </script>
        */
    <body>
    <form action="" method="post">
        <input id="n1" type="text" >
        <input id="n2" type="text" > <br> <br>
        <button type="button" onclick="addition()">Addition(+)</button>
        <button type="button" onclick="subtraction()">Subtraction(-)</button>
        <button type="button" onclick="multiplication()">Multiplication(x)</button>
        <button type="button" onclick="division()">Division(/)</button>
    </form>   

    </body>
    </html>

    <script>
        function addition() {
            var n1 =document.getElementById('n1').value;
            var n2 =document.getElementById('n2').value;
            var addition = parseFloat(n1) + parseFloat(n2);
            alert ("Result addition: " + addition);
        }
        function subtraction() {
            var n1 =document.getElementById('n1').value;
            var n2 =document.getElementById('n2').value;
            var subtraction = parseFloat(n1) - parseFloat(n2);
            document.write ("Result subtraction: " + subtraction);
        }
        function multiplication() {
            var n1 =document.getElementById('n1').value;
            var n2 =document.getElementById('n2').value;
            var multiplication = parseFloat(n1) * parseFloat(n2);
            document.write ("Result multiplication: " + multiplication);
        }
        function division() {
            var n1 =document.getElementById('n1').value;
            var n2 =document.getElementById('n2').value;
            var division = parseFloat(n1) / parseFloat(n2);
            document.write ("Result division: " + division);
        }
        </script>

*/
