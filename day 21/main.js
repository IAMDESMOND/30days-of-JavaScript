const firstPara = document.querySelector("p")
        console.log(firstPara)
        const allPara = document.querySelectorAll("#para")
        const allByTag = document.querySelectorAll("p")
        for (let i = 0; i < allPara.length; i++) {
            const element = allPara[i];
            console.log(element.textContent);
            
            if (i == 3) {
                element.textContent = 'Gods\' reckless Love'
                element.className = 'ParaGod'
                element.classList.add('Godlist')
            }

            element.style.backgroundColor = "lightblue"
            element.style.fontWeight = "bold"
            element.style.padding = "15px" 
            
            if (i % 2 == 0) {
                element.style.backgroundColor = "red"
            } else {
                element.style.backgroundColor = "green"
            }
            
        }

        console.log(allPara, allByTag);