


window.addEventListener('load', function () {
    console.log('loaded');


    let user_div = Array.prototype.slice.call(document.querySelectorAll(".image-switch"));
    user_div.map(individual_div => {


        //creating required elements
        let panelContainer = document.createElement('div')
        panelContainer.className = 'panel-container'

        let leftPanel = document.createElement('div')
        leftPanel.className = 'left-panel'

        let fixedContainerImage1 = document.createElement('div')
        fixedContainerImage1.className = 'fixed-container'

        let fixedContainerImage2 = document.createElement('div')
        fixedContainerImage2.className = 'fixed-container'

        let rightPanel = document.createElement('div')
        rightPanel.className = 'right-panel'

        let innerRightPanel = document.createElement('div')
        innerRightPanel.className = 'inner-right-panel'

        let drag = document.createElement('div')
        drag.className = 'drag'

        let arrowBtn = document.createElement('div')
        arrowBtn.className = 'arrow-btn'

        let arrowBtnImg = document.createElement('img')

        arrowBtnImg.src = 'https://icons-for-free.com/iconfiles/png/512/double+arrow+doublechevronleftright+left+right+arrow+icon-1320185729067056308.png' //'/src/assets/arrow.png'
        arrowBtnImg.style.height = '24px'
        arrowBtnImg.style.width = '24px'
        arrowBtnImg.draggable = false


        const image1 = new Image();
        image1.draggable = false
        image1.className = 'image'
        image1.onload = function () {
            // console.log('this.width', this.width);
            // console.log('this.height', this.height);

            let panel = individual_div.querySelector(".panel-container")
            panel.style.cssText = `height: ${this.height + 'px'};width: ${(this.width) + 'px'};margin: auto`

            Array.prototype.slice.call(individual_div.querySelectorAll(".fixed-container")).map(x => x.style.width = this.width + 'px')
        }

        const image2 = new Image();
        image2.draggable = false
        image2.className = 'image'





        if (individual_div.dataset && individual_div.dataset.image1) {
            image1.src = individual_div.dataset.image1
            image1.style.height = image2.style.height = individual_div.dataset && individual_div.dataset.height ? individual_div.dataset.height : 'auto'
            image1.style.width = image2.style.width = individual_div.dataset && individual_div.dataset.width ? individual_div.dataset.width : 'auto'

        }

        if (individual_div.dataset && individual_div.dataset.image2) {
            image2.src = individual_div.dataset.image2
        }


        //appending
        fixedContainerImage1.appendChild(image1)
        fixedContainerImage2.appendChild(image2)


        arrowBtn.appendChild(arrowBtnImg)
        drag.appendChild(arrowBtn)


        leftPanel.appendChild(fixedContainerImage1)


        innerRightPanel.appendChild(fixedContainerImage2)
        rightPanel.appendChild(innerRightPanel)
        rightPanel.appendChild(drag)

        panelContainer.appendChild(leftPanel)
        panelContainer.appendChild(rightPanel)


        individual_div.appendChild(panelContainer)
    })



    user_div.map(individual_div => {
        var isResizing = false,
            lastDownX = 0;


        var container = individual_div.querySelector('.panel-container'),
            left = individual_div.querySelector('.left-panel'),
            right = individual_div.querySelector('.right-panel'),
            handle = individual_div.querySelector('.drag');


        handle.addEventListener("mousedown", function (e) {
            console.log('mousedown');
            isResizing = true;
            lastDownX = e.clientX;
        });


        document.addEventListener("mousemove", function (e) {
            if (!isResizing)
                return;

            var offsetRight = container.offsetWidth - (e.clientX - container.offsetLeft);
            if (offsetRight && offsetRight > 0) {
                right.style.width = offsetRight + 'px'
            } else right.style.width = '0px'
        });

        document.addEventListener("mouseup", function (e) {
            console.log('mouseup');
            isResizing = false;
        });
    })

})