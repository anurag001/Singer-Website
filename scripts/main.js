
        function myFunc () {
            var x = document.getElementById("menu");
            var y = document.getElementById("trans_bg");
            var a = document.getElementById("1");
            var b = document.getElementById("2");
            var c = document.getElementById("3");

            if(x.style.left == "0px")
            {
                a.style.top = "10px";
                a.style.transform = "rotate(0deg)";
                b.style.opacity = 1;
                c.style.top = "40px";
                c.style.transform = "rotate(0deg)";
                y.style.display = "none";
                y.style.opacity = 0;
                x.style.left = "-400px";
            }

            else
            {
                a.style.top = "25px";
                a.style.transform = "rotate(45deg)";
                b.style.opacity = 0;
                c.style.top = "25px";
                c.style.transform = "rotate(-45deg)";
                y.style.display = "block";
                y.style.opacity = 0.6;
                x.style.left = "0px";
            }
            
        }