        function changeEvenColors() {
            const items = document.getElementsByTagName('li');
            
            for (let i = 0; i < items.length; i++) {
                if (i % 2 === 1) {
                    items[i].classList.toggle('blue');
                }
            }
        }