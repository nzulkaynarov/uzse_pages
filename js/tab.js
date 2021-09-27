let tabTriggerBtns = document.querySelectorAll('.tabs .hero-bottom-card .tab-link');

tabTriggerBtns.forEach(function (tabTriggerBtn, index) {
    tabTriggerBtn.addEventListener('click', function () {


        let currentTabData = document.querySelector('.tab-content[data-tab-content="' + this.dataset.tabTrigger + '"]');


        // remove classess

        document.querySelector('.tab-content.is-open').classList.remove('is-open');
        document.querySelector('.tabs .hero-bottom-card .tab-link.active-tab').classList.remove('active-tab');

        // add classes


        currentTabData.classList.add('is-open')
        this.classList.add('active-tab');
    });
});
