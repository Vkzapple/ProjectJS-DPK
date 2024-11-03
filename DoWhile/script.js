        function updateColors() {
            const items = document.querySelectorAll('#itemList li');
            const evenColor = document.getElementById('evenColor').value;
            const oddColor = document.getElementById('oddColor').value;
            
            let i = 1;
            while (i < items.length) {
                items[i].style.backgroundColor = evenColor;
                items[i].style.color = 'white';
                i += 2;
            }
            
            let j = 0;
            if (items.length > 0) {
                do {
                    items[j].style.backgroundColor = oddColor;
                    items[j].style.color = 'white';
                    j += 2;
                } while (j < items.length);
            }
        }

        updateColors();