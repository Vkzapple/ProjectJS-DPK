        function ubahFormat() {
            let items = document.querySelectorAll('#myList li');
            
            for(let i = 0; i < items.length; i++) {
                if((i + 1) % 2 === 0) {
                    items[i].classList.add('blue-bold');
                } else {
                    items[i].classList.remove('blue-bold');
                }
            }
        }