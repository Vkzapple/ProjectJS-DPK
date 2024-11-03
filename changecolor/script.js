        function changeColor(color) {
            var items = document.getElementsByClassName("fruit-item");
            for(var i = 0; i < items.length; i++) {
                items[i].style.color = color;
            }
        }

        function changeHoverColor(color) {
            var items = document.getElementsByClassName("fruit-item");
            for(var i = 0; i < items.length; i++) {
                items[i].onmouseover = function() {
                    this.style.backgroundColor = color;
                }
                items[i].onmouseout = function() {
                    this.style.backgroundColor = "#f8f9fa";
                }
            }
        }