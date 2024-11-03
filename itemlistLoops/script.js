        function changeEvenColors() {
            const items = document.getElementsByTagName('li');
            
            for (let i = 0; i < items.length; i++) {
                // Check if index is odd (even-numbered item since index starts at 0)
                if (i % 2 === 1) {
                    items[i].classList.toggle('blue');
                }
            }
        }