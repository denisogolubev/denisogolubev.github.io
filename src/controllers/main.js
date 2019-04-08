
//
var editorController = function () {

    var PageElement = function (id, content) {
        this.id = id;
        this.content = content;
    }

    var PageDetailLinksElement = function(id, language, url) {
        this.id = id;
        this.language = language;
        this.url = url;
    }

    var PageMarketLinksElement = function(id, language, urlAndroid, urlIos) {
        this.id = id;
        this.language = language;
        this.urlAndroid = urlAndroid;
        this.urlIos = urlIos;
    }

    var PageButtonLinksElement = function(id, content, url) {
        this.id = id;
        this.content = content;
        this.url = url;
    }

    var data = {
        allPageElemnts: []
    }

return {
    addPageElement: function (cont) {
        var ID, newPageElement;

        //Создаем ID;
        if (data.allPageElemnts.length > 0) {
            ID = data.allPageElemnts[data.allPageElemnts.length - 1].id + 1;
        } else {
            ID = 0;
        }

        newPageElement = new PageElement(ID, cont);
        data.allPageElemnts.push(newPageElement);
        return newPageElement;
    },

    addPageDetailLinksElement: function (lang, url) {
        var ID, newPageElement;

        //Создаем ID;
        if (data.allPageElemnts.length > 0) {
            ID = data.allPageElemnts[data.allPageElemnts.length - 1].id + 1;
        } else {
            ID = 0;
        }

        newPageElement = new PageDetailLinksElement(ID, lang, url);
        data.allPageElemnts.push(newPageElement);
        return newPageElement;
    },

    addPageMarketLinksElement: function(lang, urlAnd, urlApp) {
        var ID, newPageElement;

        //Создаем ID;
        if (data.allPageElemnts.length > 0) {
            ID = data.allPageElemnts[data.allPageElemnts.length - 1].id + 1;
        } else {
            ID = 0;
        }

        newPageElement = new PageMarketLinksElement(ID, lang, urlAnd, urlApp);
        data.allPageElemnts.push(newPageElement);
        return newPageElement;
    },

    addPageButtonLinksElement: function(content, url) {
        var ID, newPageElement;

        //Создаем ID;
        if (data.allPageElemnts.length > 0) {
            ID = data.allPageElemnts[data.allPageElemnts.length - 1].id + 1;
        } else {
            ID = 0;
        }

        newPageElement = new PageButtonLinksElement(ID, content, url);
        data.allPageElemnts.push(newPageElement);
        return newPageElement;
    },

    deleteItemArr: function(id) {
        var ids, index;

        ids = data.allPageElemnts.map(function(current) {
            return current.id;
        });

        index = ids.indexOf(id);
        if(index !== -1) {
            data.allPageElemnts.splice(index, 1);
        }
    },

    clearData: function() {
        data.allPageElemnts.length = 0;
    },


    getData: function() {
        return {
            htmlContent: data.allPageElemnts
        }
    },

    testing: function() {
        console.log(data);
    }
}    

}();



var UIController = function () {

    var DOMStrings = {
        textOptions: '.tools-options__text--items',
        optionHeader:'header',
        optionSimpText:'simple-text',
        optionSipmSecText:'simple-secondary__text',
        optionSimpBldText:'simple-bold__text',
        optionFooter:'footer',
        textInput: '.tools-options__text--input',
        generatedContent: '.display-device__content',
        generatedButtons: '.display-device__buttons',
        clearDisplay: '.display-clear',
        addContentButton: 'add_text',
        downloadHtml: '.display-button__download',
        textCategory: '.tools-options__text',
        imgCategory: '.tools-options__images',
        toolsCategoryes: '.tools-nav__categoryes',
        toolsCategoryesText: '.tools-nav__categoryes--text',
        toolsCategoryesImg: '.tools-nav__categoryes--img',
        toolsCategoryesLinks: '.tools-nav__categoryes--links',
        toolsCategoryesBtn: '.tools-nav__categoryes--buttons',
        toolsCategoryesTemps: '.tools-nav__categoryes--temps', 
        imgOptions: '.tools-options__img--items',
        imgURL: '.tools-options__img--input',
        addImgButton: 'add_img',
        linksCategory: '.tools-options__links',
        linksType: '.tools-options__links--items',
        linksItemMarket: 'links-to__market',
        linksItemDet: 'more-details',
        linksItemBtnGrey: 'link-button',
        linksItemBtnRed: 'link-buttonCTA',
        linksinputBtnName: '.tools-options__links--name',
        linksInputDetails: '.tools-options__links--details',
        linksInputAndroid: '.tools-options__links--android',
        linksInputios: '.tools-options__links--ios',
        linksButtonMoreDet: 'add_more-details',
        linksButtonMarkets: 'add_markets',
        linksButtonBtn: 'add-link__button',
        linksLang: '.tools-options__links--lang',
        btnCategory: '.tools-options__buttons',
        btnOptions: '.tools-options__buttons-items',
        btnInputName: '.tools-options__buttons--name',
        btnAdd: 'add-cta-button', 
        btnSave: 'save_cta-button',
        tempCategory: '.tools-options__templates',
        tempItem: '.tools-options__templates--img',
        deleteElButton: '.item__delete--btn',
        edit: 'ion-edit',
        delete: 'ion-ios-trash',
        editContentHeader: '.content-header',
        saveTextButton: 'save_text',
        saveImgButton: 'save_img',
        saveLinksButton: 'save_links',
        arrowDown: 'ion-arrow-down-c',
        arrowUp: 'ion-arrow-up-c',
        editBold: 'bold',
        editSeparator: 'separator'

        

       
    };

    return {

        getInputTextCategory: function() {
            return {
                type: document.querySelector(DOMStrings.textOptions).value,
                content: document.querySelector(DOMStrings.textInput).value
            };
        },

        addTextItem: function(obj, type) {
            var html, newHtml;

            if (type === 'Header') {
                html = '<section class="editor" id="%id%"><p class="content-header">%content%</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section>';  
            } else if (type === 'Simple text') {
                html = '<section class="editor" id="%id%"><p class="content-simpletext">%content%</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section>';
            } else if (type === 'Simple secondary text') {
                html = '<section class="editor" id="%id%"><p class="content-simpletext__secondary">%content%</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section>';
            } else if (type === 'Simple bold text') {
                html = '<section class="editor" id="%id%"><p class="content-simpletext__bold">%content%</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section>';
            } else if (type === 'Footer') {
                html = '<section class="editor" id="%id%"><section class="footer"><div><img src="https://cscappimg.vodafone.ua/928" class="footer-icon"></div><p class="content-simpletext__secondary">%content%</p></section><div class="buttons"><i class="ion-edit footer"></i><i class="ion-ios-trash footer"></i><i class="ion-arrow-down-c footer"></i><i class="ion-arrow-up-c footer"></i></div></section>';
            } else {
                console.log('This type can\'t be used.');
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%content%', obj.content);

            document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', newHtml);
        },

        addSeparator: function(obj) {
            var html, newHtml;

            html = '<section class="editor" id="%id%"><div class="single-separator"></div><div class="buttons"><i class="ion-ios-trash sep"></i><i class="ion-arrow-down-c sep"></i><i class="ion-arrow-up-c sep"></i></div></section>';

            newHtml = html.replace('%id%', obj.id);
            document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', newHtml);

        },

        getImgCategory: function() {
            return {
                type: document.querySelector(DOMStrings.imgOptions).value,
                content: document.querySelector(DOMStrings.imgURL).value
            };
        },

        addImgItem: function(obj, type) {
            var html, newHtml;

            if (type === 'Full screen') {
                html = '<section class="editor" id="%id%"><section class="full-screen__container" id="%id%"><img src="%url%" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i><i class="ion-arrow-down-c img"></i><i class="ion-arrow-up-c img"></i></div></section>'; 
            } else if (type === 'Centered') {
                html = '<section class="editor" id="%id%"><section class="centered-screen__container" id="%id%"><img src="%url%" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i><i class="ion-arrow-down-c img"></i><i class="ion-arrow-up-c img"></i></div></section>';
            } else {
                console.log('This type can\'t be used.');
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%url%', obj.content);

            document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', newHtml);

        },

        getLinksType: function () {
            return {
                type: document.querySelector(DOMStrings.linksType).value
            }
        },

        displayLinkFields: function(type) {

            function hideAllInputs() {
                document.querySelector(DOMStrings.linksInputDetails).style.display = 'none';
                document.querySelector(DOMStrings.linksInputAndroid).style.display = 'none';
                document.querySelector(DOMStrings.linksInputios).style.display = 'none';
                document.querySelector(DOMStrings.linksinputBtnName).style.display = 'none';
                document.getElementById(DOMStrings.linksButtonMoreDet).style.display = 'none';
                document.getElementById(DOMStrings.linksButtonMarkets).style.display = 'none';

            }
    
            if (type === 'More details') {
                hideAllInputs();
                document.querySelector(DOMStrings.linksInputDetails).style.display = 'block';
                document.getElementById(DOMStrings.linksButtonMoreDet).style.display = 'block';
                document.querySelector(DOMStrings.linksLang).style.display = 'block';
            } else if (type === 'Links to markets') {
                hideAllInputs();
                document.querySelector(DOMStrings.linksInputAndroid).style.display = 'block';
                document.querySelector(DOMStrings.linksInputios).style.display = 'block';
                document.getElementById(DOMStrings.linksButtonMoreDet).style.display = 'block';
                document.querySelector(DOMStrings.linksLang).style.display = 'block';
            } else if (type === 'Link as button' || type === 'Link as button (CTA)') {
                hideAllInputs();
                document.querySelector(DOMStrings.linksLang).style.display = 'none';
                document.querySelector(DOMStrings.linksinputBtnName).style.display = 'block';
                document.querySelector(DOMStrings.linksInputDetails).style.display = 'block';
                document.getElementById(DOMStrings.linksButtonMoreDet).style.display = 'block';
            } 
        },

        getLinksCategory: function() {
            var param;
            param = document.querySelector(DOMStrings.linksType).value;
            if (param === 'More details') {
                return {
                    type: document.querySelector(DOMStrings.linksType).value,
                    language: document.querySelector(DOMStrings.linksLang).value,
                    url: document.querySelector(DOMStrings.linksInputDetails).value
                }
            } else if (param === 'Links to markets') {
                return {
                    type: document.querySelector(DOMStrings.linksType).value,
                    language: document.querySelector(DOMStrings.linksLang).value,
                    urlAndroid: document.querySelector(DOMStrings.linksInputAndroid).value,
                    urlIos: document.querySelector(DOMStrings.linksInputios).value
                }
            } else if (param === 'Link as button' || param === 'Link as button (CTA)') {
                return {
                    type: document.querySelector(DOMStrings.linksType).value,
                    content: document.querySelector(DOMStrings.linksinputBtnName).value,
                    url: document.querySelector(DOMStrings.linksInputDetails).value
                }
            }
            
        },

        addLinksItem: function(obj, lang, type) {
            var html, newHtml;
            
            if (type === 'More details') {
                if (lang === 'UKR') {
                    html = '<section class="editor" id="%id%" value="%lang%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">Детальніше</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section><section><div class="buttons"><i class="ion-edit links-detail"></i><i class="ion-ios-trash links-detail"></i><i class="ion-arrow-down-c links-detail"></i><i class="ion-arrow-up-c links-detail"></i></div></section></section>'; 
                } else if (lang === 'RUS') {
                    html = '<section class="editor" id="%id%" value="%lang%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">Детальнее</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section><section><div class="buttons"><i class="ion-edit links-detail"></i><i class="ion-ios-trash links-detail"></i><i class="ion-arrow-down-c links-detail"></i><i class="ion-arrow-up-c links-detail"></i></div></section></section>'; 
                } else if (lang === 'ENG') {
                    html = '<section class="editor" id="%id%" value="%lang%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">More details</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section><section><div class="buttons"><i class="ion-edit links-detail"></i><i class="ion-ios-trash links-detail"></i><i class="ion-arrow-down-c links-detail"></i><i class="ion-arrow-up-c links-detail"></i></div></section></section>'; 
                }    
            } else if (type === 'Links to markets') {
                if (lang === 'UKR') {
                    html = '<section class="editor" id="%id%" value="%lang%"><section class="download-list"><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1630" alt="ios-badge" class="ios-badge"></a><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1634" alt="android-badge" class="android-badge"></a></section><div class="buttons"><i class="ion-edit links-markets"></i><i class="ion-ios-trash links-markets"></i><i class="ion-arrow-down-c links-markets"></i><i class="ion-arrow-up-c links-markets"></i></div></section>'; 
                } else if (lang === 'RUS') {
                    html = '<section class="editor" id="%id%" value="%lang%"><section class="download-list"><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1629" alt="ios-badge" class="ios-badge"></a><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1633" alt="android-badge" class="android-badge"></a></section><div class="buttons"><i class="ion-edit links-markets"></i><i class="ion-ios-trash links-markets"></i><i class="ion-arrow-down-c links-markets"></i><i class="ion-arrow-up-c links-markets"></i></div></section>'; 
                } else if (lang === 'ENG') {
                    html = '<section class="editor" id="%id%" value="%lang%"><section class="download-list"><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1631" alt="ios-badge" class="ios-badge"></a><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1632" alt="android-badge" class="android-badge"></a></section><div class="buttons"><i class="ion-edit links-markets"></i><i class="ion-ios-trash links-markets"></i><i class="ion-arrow-down-c links-markets"></i><i class="ion-arrow-up-c links-markets"></i></div></section>'; 
                }    
            } else {
                console.log('This type can\'t be used.');
            }


            if (type === 'More details') {
                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace('%lang%', lang);
                newHtml = newHtml.replace('%url%', obj.url);

                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', newHtml);

            } else if (type === 'Links to markets') {
                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace('%lang%', lang);
                newHtml = newHtml.replace('%url-android%', obj.urlAndroid);
                newHtml = newHtml.replace('%url-ios%', obj.urlIos);
    
                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', newHtml); 
            }
            
        },

        addButtonLink: function(obj, type) {
            var html, newHtml;

            if (type === 'Link as button') {
                html = '<section class="editor" id="%id%"><a href="%url%" class="button-link"><div class="grey-button"><p>%content%</p></div></a><div class="buttons"><i class="ion-edit links-btns"></i><i class="ion-ios-trash links-btns"></i><i class="ion-arrow-down-c links-btns"></i><i class="ion-arrow-up-c links-btns"></i></div></section>';  
            } else if (type === 'Link as button (CTA)') {
                html = '<section class="editor" id="%id%"><a href="%url%" class="button-linkCTA"><div class="red-button"><p>%content%</p></div></a><div class="buttons"><i class="ion-edit links-btnsCTA"></i><i class="ion-ios-trash links-btnsCTA"></i></div></section>';
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%url%', obj.url);
            newHtml = newHtml.replace('%content%', obj.content);

            if (type === 'Link as button') {
                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', newHtml);
            } else if (type === 'Link as button (CTA)') {
                document.querySelector(DOMStrings.generatedButtons).insertAdjacentHTML('beforeend', newHtml);
            }
        },

        getBtns: function () {
            return {
                type: document.querySelector(DOMStrings.btnOptions).value,
                content: document.querySelector(DOMStrings.btnInputName).value
            }
        },

        addBtn: function(obj, type) {
            var html, newHtml;

            if (type === 'Red CTA button') {
                html = '<section class="editor" id="%id%"><a href="[*Trackable URL: ZAKAZ]" class="button-CTA"><div class="red-button"><p>%content%</p></div></a><div class="buttons"><i class="ion-edit btn-CTA"></i><i class="ion-ios-trash btn-CTA"></i></div></section>';
            } 

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%content%', obj.content);

            document.querySelector(DOMStrings.generatedButtons).insertAdjacentHTML('beforeend', newHtml);
        },

        addTemplate: function(templateName) {
            var html, btnHtml;

            if (templateName === 'space') {
                html = '<section class="editor" id="0"><section class="full-screen__container" id="%id%"><img src="https://cdn.wccftech.com/wp-content/uploads/2016/09/spacee-2060x1288.jpg" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i><i class="ion-arrow-down-c img"></i><i class="ion-arrow-up-c img"></i></div></section><section class="editor" id="1"><p class="content-header">Philosophy of space</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="2"><p class="content-simpletext">Galilean and Cartesian theories about space, matter and motion are at the foundation of the Scientific Revolution, which is understood to have culminated with the publication of Newton\'s Principia in 1687.[5] Newton\'s theories about space and time helped him explain the movement of objects. </p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="3"><p class="content-simpletext">While his theory of space is considered the most influential in Physics, it emerged from his predecessors\' ideas about the same.[6]</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="4"><a href="https://en.wikipedia.org/wiki/Space" class="button-link"><div class="grey-button"><p>More details</p></div></a><div class="buttons"><i class="ion-edit links-btns"></i><i class="ion-ios-trash links-btns"></i><i class="ion-arrow-down-c links-btns"></i><i class="ion-arrow-up-c links-btns"></i></div></section><section class="editor" id="5"><div class="single-separator"></div><div class="buttons"><i class="ion-ios-trash sep"></i><i class="ion-arrow-down-c sep"></i><i class="ion-arrow-up-c sep"></i></div></section><section class="editor" id="6"><p class="content-simpletext__secondary">As one of the pioneers of modern science, Galilei revised the established Aristotelian and Ptolemaic ideas about a geocentric cosmos. </p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="7"><p class="content-simpletext__secondary">He backed the Copernican theory that the universe was heliocentric, with a stationary sun at the center and the planets—including the Earth—revolving around the sun. </p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="8"><p class="content-simpletext__secondary">If the Earth moved, the Aristotelian belief that its natural tendency was to remain at rest was in question. </p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="9" value="ENG"><div class="separator"></div><section><a href="https://en.wikipedia.org/wiki/Space" class="more-details" "=""><p class="more-details__link">More details</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section><section><div class="buttons"><i class="ion-edit links-detail"></i><i class="ion-ios-trash links-detail"></i><i class="ion-arrow-down-c links-detail"></i><i class="ion-arrow-up-c links-detail"></i></div></section>';

                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', html);
            } else if (templateName === 'mars') {
                html = '<section class="editor" id="0"><section class="full-screen__container" id="%id%"><img src="https://pi.tedcdn.com/r/talkstar-assets.s3.amazonaws.com/production/playlists/playlist_414/big_deal_mars_1200x627.jpg?quality=89&amp;w=800" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i><i class="ion-arrow-down-c img"></i><i class="ion-arrow-up-c img"></i></div></section><section class="editor" id="1"><p class="content-header">Geography and naming of surface features</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="2"><p class="content-simpletext">Although better remembered for mapping the Moon, Johann Heinrich Mädler and Wilhelm Beer were the first "areographers".</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="3"><div class="single-separator"></div><div class="buttons"><i class="ion-ios-trash sep"></i><i class="ion-arrow-down-c sep"></i><i class="ion-arrow-up-c sep"></i></div></section><section class="editor" id="4"><p class="content-simpletext__secondary">Today, features on Mars are named from a variety of sources. </p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="5"><p class="content-simpletext__secondary">Albedo features are named for classical mythology. </p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="6"><p class="content-simpletext__secondary">Craters larger than 60 km are named for deceased scientists and writers and others who have contributed to the study of Mars.</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="7"><p class="content-simpletext__bold">Dowload our app:</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="8" value="ENG"><section class="download-list"><a href="https://www.google.com"><img src="https://cscappimg.vodafone.ua/1631" alt="ios-badge" class="ios-badge"></a><a href="https://www.google.com"><img src="https://cscappimg.vodafone.ua/1632" alt="android-badge" class="android-badge"></a></section><div class="buttons"><i class="ion-edit links-markets"></i><i class="ion-ios-trash links-markets"></i><i class="ion-arrow-down-c links-markets"></i><i class="ion-arrow-up-c links-markets"></i></div></section>';

                btnHtml = '<section class="editor" id="9"><a href="https://www.google.com" class="button-linkCTA"><div class="red-button"><p>One way ticket</p></div></a><div class="buttons"><i class="ion-edit links-btnsCTA"></i><i class="ion-ios-trash links-btnsCTA"></i></div></section>'

                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', html);
                document.querySelector(DOMStrings.generatedButtons).insertAdjacentHTML('beforeend', btnHtml);
            } else if (templateName === 'moon') {
                html = '<section class="editor" id="0"><section class="full-screen__container" id="%id%"><img src="https://i.kinja-img.com/gawker-media/image/upload/s--p_QT7xhU--/c_scale,f_auto,fl_progressive,q_80,w_800/wmmg6jvazg87tklpgm0g.jpg" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i><i class="ion-arrow-down-c img"></i><i class="ion-arrow-up-c img"></i></div></section><section class="editor" id="1"><p class="content-header">History, observation and exploration</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="2"><p class="content-simpletext">During the late 1950s at the height of the Cold War, the United States Army conducted a classified feasibility study that proposed </p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="3"><p class="content-simpletext">the construction of a manned military outpost on the Moon called Project Horizon with the potential to conduct a wide range of missions from scientific research to nuclear Earth bombardment. </p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="4" value="ENG"><div class="separator"></div><section><a href="https://en.wikipedia.org/wiki/Moon" class="more-details" "=""><p class="more-details__link">More details</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section><section><div class="buttons"><i class="ion-edit links-detail"></i><i class="ion-ios-trash links-detail"></i><i class="ion-arrow-down-c links-detail"></i><i class="ion-arrow-up-c links-detail"></i></div></section>';

                btnHtml = '<section class="editor" id="5"><a href="https://www.google.com/search?rlz=1C1NHXL_ruUA799UA799&amp;tbm=isch&amp;sa=1&amp;ei=YMurXJ3DA9LorgSX_aywBA&amp;q=moon&amp;oq=moon&amp;gs_l=img.3...0.0..286156...0.0..0.0.0.......1......gws-wiz-img.uAZ23v79koc" class="button-linkCTA"><div class="red-button"><p>More Moon photos</p></div></a><div class="buttons"><i class="ion-edit links-btnsCTA"></i><i class="ion-ios-trash links-btnsCTA"></i></div></section>';

                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', html);
                document.querySelector(DOMStrings.generatedButtons).insertAdjacentHTML('beforeend', btnHtml);
            } else if (templateName === 'saturn') {
                html = '<section class="editor" id="0"><p class="content-header">Modern NASA and ESA probes</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="1"><p class="content-simpletext">Pioneer 11 made the first flyby of Saturn in September 1979, when it passed within 20,000 km of the planet\'s cloud tops.</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="2"><section class="centered-screen__container" id="%id%"><img src="https://www.pngarts.com/files/4/Saturn-PNG-High-Quality-Image.png" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i><i class="ion-arrow-down-c img"></i><i class="ion-arrow-up-c img"></i></div></section><section class="editor" id="3"><p class="content-simpletext">Images were taken of the planet and a few of its moons, although their resolution was too low to discern surface detail.</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section><section class="editor" id="4"><section class="centered-screen__container" id="%id%"><img src="http://www.stickpng.com/assets/images/580b585b2edbce24c47b270d.png" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i><i class="ion-arrow-down-c img"></i><i class="ion-arrow-up-c img"></i></div></section><section class="editor" id="5"><p class="content-simpletext">The spacecraft also studied Saturn\'s rings, revealing the thin F-ring and the fact that dark gaps in the rings are bright when viewed at high phase angle (towards the Sun), meaning that they contain fine light-scattering material ❤️</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i><i class="ion-arrow-down-c text"></i><i class="ion-arrow-up-c text"></i></div></section>'

                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', html);
            }

            
        },

        
        downloadDoc: function() {
            var startHtml, styleHtml, endHtml, file;
    
            startHtml = '<html><head><meta charset="UTF-8"><meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"><link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans:400,500" rel="stylesheet">';
    
            styleHtml = '<style>body {background-color: #F4F4F4; font-family: "IBM Plex Sans", sans-serif;margin: 0;color: #333;letter-spacing: -0.05rem;} .white-background { background-color: #FFFFFF; margin: 0.9375rem; box-shadow: 0 2px 4px rgba(0,0,0,0.35); padding: 0.9375rem;}.buttonsCTA {margin-top: 1.25rem;padding: 0 1.875rem 1.25rem 1.875rem;}.content-header {margin: 0.9375rem 0;font-size: 1.6rem;line-height: 1.9rem;}.content-simpletext {margin: 0.9375rem 0;font-size: 1.125rem;line-height: 1.4rem;}.content-simpletext__secondary {margin: 0.5rem 0;font-size: 1rem;line-height: 1.3rem;}.content-simpletext__bold {margin: 0.9375rem 0;font-size: 1.125rem;font-weight: 500;}strong {font-weight: 500;}.footer {display: grid;grid-template-columns: 11% 89%;align-items: center;}.footer-icon {width: 1.5rem;}.screen {width: 100%;}.full-screen__container {display: block;margin: 0 auto; padding: 0;width: 100%;}.centered-screen__container {display: block;margin: 0 auto;padding: 0;width: 50%;}.separator {border-top: 1px solid #CCCCCC;margin: 1.25rem 0;}.single-separator {border-top: 1px solid #CCCCCC;margin: 1.25rem 0;}.more-details {display: grid;grid-template-columns: 50% 50%;align-items: center;text-decoration: none;}.more-details svg {justify-self: right;}.more-details__link {margin: 0;color: #333;font-size: 1rem;}.download-list {display: flex;list-style: none;align-items: center;padding: 0;margin: 0;}.download-list a {padding: 0;margin: 0;line-height: 0;}.ios-badge {margin: 0;width: 7.375rem;}.android-badge {margin-left: 0.75rem;width: 8.3125rem;}.buttons {display: none;}.button-link, .button-linkCTA, .button-CTA {text-decoration: none;color: #FFFFFF;font-size: 1rem;margin: 0;}.button-link p {margin: 0;}.grey-button {display: flex;background-color: #666666;width: 100%;height: 2.8125rem; align-items: center;justify-content: center;}.red-button {display: flex;background-color: #E60000;width: 100%;height: 2.8125rem;align-items: center;justify-content: center;}</style><body><section class="white-background">';
            content = document.querySelector(DOMStrings.generatedContent).innerHTML;
            btns = '</section><section class="buttonsCTA">' + document.querySelector(DOMStrings.generatedButtons).innerHTML + '</section>';
            endHtml = '</body></html>';
    
            file = new Blob([startHtml, styleHtml, content, btns, endHtml], {type: "text/plain;charset=utf-8"});
            if (window.navigator.msSaveOrOpenBlob) {
                window.navigator.msSaveOrOpenBlob(file, 'HTML_template.html');
            } // IE10+
            
            else { // Others
                var a = document.createElement("a"),
                url = URL.createObjectURL(file);
                a.href = url;
                a.download = 'HTML_template.html';
                document.body.appendChild(a);
                a.click();
                setTimeout(function() {
                document.body.removeChild(a);
                window.URL.revokeObjectURL(url);  }, 0); 
                }
            
        },

        insertTextAtCursor: function(el, text, offset) {
            var val = el.value, endIndex, range, doc = el.ownerDocument;
            if (typeof el.selectionStart == "number"
                    && typeof el.selectionEnd == "number") {
                endIndex = el.selectionEnd;
                el.value = val.slice(0, endIndex) + text + val.slice(endIndex);
                el.selectionStart = el.selectionEnd = endIndex + text.length+(offset?offset:0);
            } else if (doc.selection != "undefined" && doc.selection.createRange) {
                el.focus();
                range = doc.selection.createRange();
                range.collapse(false);
                range.text = text;
                range.select();
            }
        },

        editItem: function(cls, content, lang, urlAndroid, urlIos, url) {
            if (cls === 'content-header') {
                document.querySelector(DOMStrings.textOptions).value = 'Header';
                document.querySelector(DOMStrings.textInput).value = content;
            } else if (cls === 'content-simpletext') {
                document.querySelector(DOMStrings.textOptions).value = 'Simple text';
                document.querySelector(DOMStrings.textInput).value = content;
            } else if (cls === 'content-simpletext__secondary') {
                document.querySelector(DOMStrings.textOptions).value = 'Simple secondary text';
                document.querySelector(DOMStrings.textInput).value = content;
            } else if (cls === 'content-simpletext__bold') {
                document.querySelector(DOMStrings.textOptions).value = 'Simple bold text';
                document.querySelector(DOMStrings.textInput).value = content;
            } else if (cls === 'footer') {
                document.querySelector(DOMStrings.textOptions).value = 'Footer';
                document.querySelector(DOMStrings.textInput).value = content;
            } else if (cls === 'full-screen__container') {
                document.querySelector(DOMStrings.imgOptions).value = 'Full screen';
                document.querySelector(DOMStrings.imgURL).value = content;
            } else if (cls === 'centered-screen__container') {
                document.querySelector(DOMStrings.imgOptions).value = 'Centered';
                document.querySelector(DOMStrings.imgURL).value = content;
            } else if (cls === 'more-details') {
                document.querySelector(DOMStrings.linksType).value = 'More details';
                if (lang === 'UKR') {
                    document.querySelector(DOMStrings.linksLang).value = 'UKR'; 
                } else if (lang === 'RUS') {
                    document.querySelector(DOMStrings.linksLang).value = 'RUS';
                } else if (lang === 'ENG') {
                    document.querySelector(DOMStrings.linksLang).value = 'ENG';
                }
                document.querySelector(DOMStrings.linksInputDetails).value = content;
            } else if (cls === 'download-list') {
                document.querySelector(DOMStrings.linksType).value = 'Links to markets';
                if (lang === 'UKR') {
                    document.querySelector(DOMStrings.linksLang).value = 'UKR'; 
                } else if (lang === 'RUS') {
                    document.querySelector(DOMStrings.linksLang).value = 'RUS';
                } else if (lang === 'ENG') {
                    document.querySelector(DOMStrings.linksLang).value = 'ENG';
                }
                document.querySelector(DOMStrings.linksInputAndroid).value = urlAndroid;
                document.querySelector(DOMStrings.linksInputios).value = urlIos;
            } else if (cls === "button-link") { 
                document.querySelector(DOMStrings.linksType).value = 'Link as button';
                document.querySelector(DOMStrings.linksinputBtnName).value = content;
                document.querySelector(DOMStrings.linksInputDetails).value = url;
            } else if (cls === "button-linkCTA") {
                document.querySelector(DOMStrings.linksType).value = 'Link as button (CTA)';
                document.querySelector(DOMStrings.linksinputBtnName).value = content;
                document.querySelector(DOMStrings.linksInputDetails).value = url;
            } else if (cls = "button-CTA") {
                document.querySelector(DOMStrings.btnOptions).value = 'Red CTA button';
                document.querySelector(DOMStrings.btnInputName).value = content;
            }
        },

        getDeleteButtonID: function () {
            return {
                id: document.querySelector(DOMStrings.deleteElButton).id
            }
        },

        deleteItem: function(selectorID) {
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el);
        },

        setAddBtnBlock: function() {
            document.getElementById(DOMStrings.addContentButton).style.display = 'block';
            document.getElementById(DOMStrings.addImgButton).style.display = 'block';
            document.getElementById(DOMStrings.linksButtonMoreDet).style.display = 'block';
            document.getElementById(DOMStrings.btnAdd).style.display = 'block';
            document.getElementById(DOMStrings.saveTextButton).style.display = 'none';
            document.getElementById(DOMStrings.saveImgButton).style.display = 'none';
            document.getElementById(DOMStrings.saveLinksButton).style.display = 'none';
            document.getElementById(DOMStrings.btnSave).style.display = 'none';
        },

        clearFields: function() {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMStrings.textInput + ',' + DOMStrings.imgURL + ',' + DOMStrings.linksInputDetails + ',' + DOMStrings.linksInputAndroid + ',' + DOMStrings.linksInputios + ',' + DOMStrings.linksinputBtnName + ',' + DOMStrings.btnInputName);

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(cur){
                cur.value = "";
            });
            UIController.setAddBtnBlock();
            
        },

        displayTextCategory: function() {
            document.querySelector(DOMStrings.textCategory).style.display = 'grid';
        },

        displayImgCategory: function() {
            document.querySelector(DOMStrings.imgCategory).style.display = 'grid';
        },

        displayLinksCategory: function() {
            document.querySelector(DOMStrings.linksCategory).style.display = 'grid';
        },

        displayBtnCategory: function() {
            document.querySelector(DOMStrings.btnCategory).style.display = 'grid';
        },

        displayTempsCategory: function() {
            document.querySelector(DOMStrings.tempCategory).style.display = 'flex';
        },

        getDOMStrings: function() {
            return DOMStrings;
        }

    };



}();

var combiController = (function (editCtrl, UICtrl) {
    var DOM, curID, param;
    DOM = UICtrl.getDOMStrings();

    var setEventListeners = function() {
        

        window.onload = function() {
            /*Download HTML button*/ 
            document.querySelector(DOM.downloadHtml).addEventListener("click", getHtmlDocument);
            
            /*Set tools category that will be shown after page load*/
            document.querySelector(DOM.textCategory).style.display = 'grid';

            /*Tools options for text category*/
            document.querySelector(DOM.toolsCategoryesText).addEventListener("click", function() {
                setDisplayNone();
                UIController.displayTextCategory();
                UIController.setAddBtnBlock();
                UIController.clearFields();

            });

            document.getElementById(DOM.addContentButton).addEventListener('click', ctrlAddTextItem);

            /*Tools options for image category*/
            document.querySelector(DOM.toolsCategoryesImg).addEventListener("click", function() {
                setDisplayNone();        
                UIController.displayImgCategory();
                UIController.setAddBtnBlock();
                UIController.clearFields();
            });

            document.getElementById(DOM.addImgButton).addEventListener("click", ctrlAddImgItem);    
            
            /*Tools options for links category*/    
            document.querySelector(DOM.toolsCategoryesLinks).addEventListener("click", function() {
                setDisplayNone();        
                UIController.displayLinksCategory();
                ctrlChangeLinksInt();
                UIController.clearFields();
            });

            document.querySelector(DOM.linksType).addEventListener('change', ctrlChangeLinksInt);

            document.getElementById(DOM.linksButtonMoreDet).addEventListener('click', ctrlAddLinksItem);

            document.querySelector(DOM.toolsCategoryesBtn).addEventListener("click", function() {
                setDisplayNone();
                UIController.displayBtnCategory();
                UIController.setAddBtnBlock();
                UIController.clearFields();
            });

            document.querySelector(DOM.toolsCategoryesTemps).addEventListener('click', function() {
                setDisplayNone();
                UIController.displayTempsCategory();
                UIController.setAddBtnBlock();
                UIController.clearFields();
            });

            document.querySelector(DOM.tempCategory).addEventListener('click', function(event) {
                var tmp;
                tmp = event.target.id;
                clearDislayResult();
                ctrlCreateTemplate(tmp);
            });

            document.querySelector(DOM.textInput).addEventListener('keypress', function(event) {
                var el = document.querySelector(DOM.textInput);
                if (event.keyCode === 13) {
                    UIController.insertTextAtCursor(el, '<br>');
                }
            });

            
            document.querySelector(DOM.generatedContent).addEventListener('click', function(event) {
                param = event.target.classList[1];
                if (event.target.classList[0] === DOM.delete) {    
                    ctrlDeleteItem(param);
                } else if (event.target.classList[0] === DOM.edit) {
                    ctrlEditItem(param);
                } else if (event.target.classList[0] === DOM.arrowDown) {
                    changePosition(param, 'down');
                } else if (event.target.classList[0] === DOM.arrowUp) {
                    changePosition(param, 'up');
                }    
            });

            document.querySelector(DOM.generatedButtons).addEventListener('click', function(event) {
                param = event.target.classList[1];
                if (event.target.classList[0] === DOM.delete) {    
                    ctrlDeleteItem(param);
                } else if (event.target.classList[0] === DOM.edit) {
                    ctrlEditItem(param);
                }    
            });
            
            /*Edit function text Save Button */
            document.getElementById(DOM.saveTextButton).addEventListener('click', function(event) {
                if (event) {
                    saveItem(param);
                }
            });
            /*Edit function img Save Button */
            document.getElementById(DOM.saveImgButton).addEventListener('click', function(event) {
                if (event) {
                    saveItem(param);
                }
            });
            /*Edit function links Save Button */
            document.getElementById(DOM.saveLinksButton).addEventListener('click', function(event) {
                if (event) {
                    saveItem(param);
                }
            });

            document.getElementById(DOM.editBold).addEventListener('click', function(event) {
                var el = document.querySelector(DOM.textInput);
                editOptions(el);
            });

            document.getElementById(DOM.editSeparator).addEventListener('click', ctrlAddSeparatorItem);

            document.getElementById(DOM.btnAdd).addEventListener('click', ctrlAddBtn);

            document.getElementById(DOM.btnSave).addEventListener('click', function(event) {
                if (event) {
                    saveItem(param);
                }
            });

            document.querySelector(DOM.clearDisplay).addEventListener('click', clearDislayResult);

            };
            
        
        
    }


    var ctrlAddTextItem = function() {
        var input, newPageElement;

        input = UICtrl.getInputTextCategory();

        if (input.content !== "") {
            newPageElement = editorController.addPageElement(input.content);
            UIController.addTextItem(newPageElement, input.type);
            console.log(input.type + ' added')
            UICtrl.clearFields();
        } else {
            console.log('Please, input your content');
        }
                
    };

    var ctrlAddSeparatorItem = function() {
        var newPageElement;

        newPageElement = editorController.addPageElement('Separator');
        UIController.addSeparator(newPageElement);
        console.log('Separator added')
          
    };

    var ctrlAddImgItem = function() {
        var input, newPageElement;

        input = UICtrl.getImgCategory();

        if (input.content !== "") {
            newPageElement = editorController.addPageElement(input.content);
            UIController.addImgItem(newPageElement, input.type);
            console.log(input.type + ' img added');
            UICtrl.clearFields();
        } else {
            console.log('Please, input URL to image');
        }

    };

    var ctrlChangeLinksInt = function() {
        var input;
        input = UICtrl.getLinksType();
        if (input.type !== "") {
            UIController.displayLinkFields(input.type);
        } else {
            console.log('????');
        }
        
    };

    var ctrlAddLinksItem = function() {
        var input, newPageElement;
        input = UICtrl.getLinksCategory();
        if (input.type === 'More details') {
            if (input.url !== "") {
                newPageElement = editorController.addPageDetailLinksElement(input.language, input.url);
                UIController.addLinksItem(newPageElement, input.language, input.type);
                console.log(input.type + ' link added');
                UICtrl.clearFields();
            }
        } else if (input.type === 'Links to markets') {
            if (input.urlAndroid !== "" && input.urlIos !== "") {
                newPageElement = editorController.addPageMarketLinksElement(input.language, input.urlAndroid, input.urlIos);
                UIController.addLinksItem(newPageElement, input.language, input.type);
                console.log(input.type + ' added');
                UICtrl.clearFields();
            }
        } else if (input.type === 'Link as button' || input.type === 'Link as button (CTA)') {
            if (input.content !== "" && input.url !== "") {
                newPageElement = editorController.addPageButtonLinksElement(input.content, input.url);
                UIController.addButtonLink(newPageElement, input.type);
                console.log(input.type + ' added');
                UICtrl.clearFields();
            }
        }
    };

    var ctrlAddBtn = function() {
        var input, newPageElement;
        input = UICtrl.getBtns();
        if (input.type === 'Red CTA button') {
            if (input.content !== '') {
                newPageElement = editorController.addPageButtonLinksElement(input.content, 'zakaz');
                UIController.addBtn(newPageElement, input.type);
                console.log(input.type + ' added');
                UICtrl.clearFields();
            }
        }
    };

    var ctrlEditItem = function(param) {
        var cls, lang, content, el;

        el = event.target.parentNode.parentNode;
        curID = el.id;
        if (param === 'text') {
            cls = el.childNodes[0].classList[0];
            content = el.childNodes[0].innerHTML;
            setDisplayNone();
            UIController.displayTextCategory();
            UIController.editItem(cls, content);
            setBtnDisplayNone();
            document.getElementById(DOM.saveTextButton).style.display = 'block';
        } else if (param === 'footer') {
            cls = el.childNodes[0].classList[0];
            content = el.childNodes[0].childNodes[1].innerHTML;
            setDisplayNone();
            UIController.displayTextCategory();
            UIController.editItem(cls, content);
            setBtnDisplayNone();
            document.getElementById(DOM.saveTextButton).style.display = 'block';
            document.getElementById(DOM.optionHeader).setAttribute('disabled', 'disabled');
            document.getElementById(DOM.optionSimpText).setAttribute('disabled', 'disabled');
            document.getElementById(DOM.optionSipmSecText).setAttribute('disabled', 'disabled');
            document.getElementById(DOM.optionSimpBldText).setAttribute('disabled', 'disabled');
        } else if (param === "img") {
            cls = el.childNodes[0].classList[0];
            content = el.childNodes[0].childNodes[0].attributes.src.nodeValue;
            setDisplayNone();
            UIController.displayImgCategory();
            UIController.editItem(cls, content);
            setBtnDisplayNone();
            document.getElementById(DOM.saveImgButton).style.display = 'block';

        } else if (param === "links-detail") {
            el = event.target.parentNode.parentNode.parentNode;
            curID = el.id;
            cls = el.childNodes[1].childNodes[0].classList[0];
            lang = el.attributes.value.nodeValue;
            content = el.childNodes[1].childNodes[0].attributes.href.nodeValue;
            setDisplayNone();
            UIController.displayLinksCategory();
            UIController.displayLinkFields('More details');
            UIController.editItem(cls, content, lang);
            setBtnDisplayNone();
            document.getElementById(DOM.saveLinksButton).style.display = 'block';
            document.getElementById(DOM.linksItemMarket).setAttribute('disabled', 'disabled');
            document.getElementById(DOM.linksItemBtnGrey).setAttribute('disabled', 'disabled');
            document.getElementById(DOM.linksItemBtnRed).setAttribute('disabled', 'disabled');
            
        } else if (param === "links-markets") {
            cls = el.childNodes[0].classList[0];
            lang = el.attributes.value.nodeValue;
            urlAndroid = el.childNodes[0].childNodes[0].attributes.href.nodeValue;
            urlIos = el.childNodes[0].childNodes[1].attributes.href.nodeValue;
            setDisplayNone();
            UIController.displayLinksCategory();
            UIController.displayLinkFields('Links to markets');
            UIController.editItem(cls, "", lang, urlAndroid, urlIos);
            setBtnDisplayNone();
            document.getElementById(DOM.saveLinksButton).style.display = 'block';
            document.getElementById(DOM.linksItemDet).setAttribute('disabled', 'disabled');
            document.getElementById(DOM.linksItemBtnGrey).setAttribute('disabled', 'disabled');
            document.getElementById(DOM.linksItemBtnRed).setAttribute('disabled', 'disabled');
        } else if (param === "links-btns" || param=== "links-btnsCTA") {
            cls = el.childNodes[0].classList[0];
            url = el.childNodes[0].attributes.href.nodeValue;
            content = el.childNodes[0].childNodes[0].childNodes[0].innerHTML;
            setDisplayNone();
            UIController.displayLinksCategory();
            if (param === "links-btns") {
                UIController.displayLinkFields('Link as button');
                document.getElementById(DOM.linksItemMarket).setAttribute('disabled', 'disabled');
                document.getElementById(DOM.linksItemDet).setAttribute('disabled', 'disabled');
                document.getElementById(DOM.linksItemBtnRed).setAttribute('disabled', 'disabled');
            } else if (param === "links-btnsCTA") {
                UIController.displayLinkFields('Link as button (CTA)');
                document.getElementById(DOM.linksItemMarket).setAttribute('disabled', 'disabled');
                document.getElementById(DOM.linksItemDet).setAttribute('disabled', 'disabled');
                document.getElementById(DOM.linksItemBtnGrey).setAttribute('disabled', 'disabled');
            }    
            UIController.editItem(cls, content, '', '', '', url);
            setBtnDisplayNone();
            document.getElementById(DOM.saveLinksButton).style.display = 'block'; 
        } else if (param = 'btn-CTA') {
            cls = el.childNodes[0].classList[0];
            content = el.childNodes[0].childNodes[0].childNodes[0].innerHTML;
            setDisplayNone();
            UIController.displayBtnCategory();
            UIController.editItem(cls, content, '', '', '', '');
            setBtnDisplayNone();
            document.getElementById(DOM.btnSave).style.display = 'block'; 
        }
    }; 

    var saveItem = function(param) {
        var el, input, type, saveText, saveImg, saveDetails, saveBtnLink;

        el = document.getElementById(curID);
        saveText = function() {
            el.childNodes[0].className = type;
            el.childNodes[0].innerHTML = "";
            el.childNodes[0].innerHTML = input.content;
        };

        saveFooter = function() {
            el.childNodes[0].className = type;
            el.childNodes[0].childNodes[1].innerHTML = "";
            el.childNodes[0].childNodes[1].innerHTML = input.content;
            document.getElementById(DOM.optionHeader).removeAttribute('disabled', 'disabled');
            document.getElementById(DOM.optionSimpText).removeAttribute('disabled', 'disabled');
            document.getElementById(DOM.optionSipmSecText).removeAttribute('disabled', 'disabled');
            document.getElementById(DOM.optionSimpBldText).removeAttribute('disabled', 'disabled');
        };

        saveImg = function() {
            el.childNodes[0].className = type;
            el.childNodes[0].childNodes[0].attributes.src.nodeValue = input.content;
        };

        saveDetails = function() {
            el.attributes.value.nodeValue = input.language;
            if (input.language === 'UKR') {
                textValue = 'Детальніше';
            } else if (input.language === 'RUS') {
                textValue = 'Детальнее';
            } else if (input.language === 'ENG') {
                textValue = 'More details';
            }
            el.childNodes[1].childNodes[0].childNodes[0].innerText = textValue;
            el.childNodes[1].childNodes[0].attributes.href.nodeValue = input.url;
            document.getElementById(DOM.linksItemMarket).removeAttribute('disabled', 'disabled');
            document.getElementById(DOM.linksItemBtnGrey).removeAttribute('disabled', 'disabled');
            document.getElementById(DOM.linksItemBtnRed).removeAttribute('disabled', 'disabled');
        };

        saveMarkets = function() {
            el.attributes.value.nodeValue = input.language;
            if (input.language === 'UKR') {
                el.childNodes[0].childNodes[0].childNodes[0].attributes.src.nodeValue = 'https://cscappimg.vodafone.ua/1630';
                el.childNodes[0].childNodes[1].childNodes[0].attributes.src.nodeValue = 'https://cscappimg.vodafone.ua/1634';
            } else if (input.language === 'RUS') {
                el.childNodes[0].childNodes[0].childNodes[0].attributes.src.nodeValue = 'https://cscappimg.vodafone.ua/1629';
                el.childNodes[0].childNodes[1].childNodes[0].attributes.src.nodeValue = 'https://cscappimg.vodafone.ua/1633';
            } else if (input.language === 'ENG') {
                el.childNodes[0].childNodes[0].childNodes[0].attributes.src.nodeValue = 'https://cscappimg.vodafone.ua/1631';
                el.childNodes[0].childNodes[1].childNodes[0].attributes.src.nodeValue = 'https://cscappimg.vodafone.ua/1632';
            }
            el.childNodes[0].childNodes[0].attributes.href.nodeValue = input.urlAndroid;
            el.childNodes[0].childNodes[1].attributes.href.nodeValue = input.urlIos;
            document.getElementById(DOM.linksItemDet).removeAttribute('disabled', 'disabled');
            document.getElementById(DOM.linksItemBtnGrey).removeAttribute('disabled', 'disabled');
            document.getElementById(DOM.linksItemBtnRed).removeAttribute('disabled', 'disabled');
        };

        saveBtnLink = function() {
            el.childNodes[0].attributes.href.nodeValue = input.url;
            el.childNodes[0].childNodes[0].childNodes[0].innerHTML = input.content;
        };

        saveBtns = function() {
            el.childNodes[0].childNodes[0].childNodes[0].innerHTML = input.content;
        };

        if (param === 'text') {
            input = UICtrl.getInputTextCategory();
            if (input.type === 'Header') {
                type = 'content-header';
                saveText();
            } else if (input.type === 'Simple text') {
                type = 'content-simpletext';
                saveText();
            } else if (input.type === 'Simple secondary text') {
                type = 'content-simpletext__secondary';
                saveText();
            } else if (input.type === 'Simple bold text') {
                type = 'content-simpletext__bold';
                saveText();
            }  
        } else if (param === 'footer') {
            input = UICtrl.getInputTextCategory(); 
            if (input.type === 'Footer') {
            type = 'footer';
            saveFooter();
            }
        } else if (param === 'img') {
            input = UICtrl.getImgCategory();
            if (input.type === 'Full screen') {
                type = 'full-screen__container';
                saveImg();
            } else if (input.type === 'Centered') {
                type = 'centered-screen__container';
                saveImg();
            }
        } else if (param === 'links-detail' || param === 'links-markets' || param === 'links-btns' || param === 'links-btnsCTA') {
            input = UIController.getLinksCategory();
            if (input.type === 'More details') {                
                saveDetails();  
            } else if (input.type === 'Links to markets') {
                saveMarkets();
            } else if (input.type === 'Link as button' || input.type === 'Link as button (CTA)') {
                saveBtnLink();
                remAtr();
            } 
            
        } else if (param === 'btn-CTA') {
            input = UIController.getBtns();
            saveBtns();
        }

        setBtnDisplayNone();
        UICtrl.clearFields();
        
        
    };

    remAtr = function() {
        document.getElementById(DOM.linksItemMarket).removeAttribute('disabled', 'disabled');
        document.getElementById(DOM.linksItemDet).removeAttribute('disabled', 'disabled');
        document.getElementById(DOM.linksItemBtnGrey).removeAttribute('disabled', 'disabled');
        document.getElementById(DOM.linksItemBtnRed).removeAttribute('disabled', 'disabled');
    }

    

    var ctrlDeleteItem = function(param) {
        var itemID, ID;
            
        if (param === 'text' || param === 'img' || param === 'links-markets' || param === 'sep' || param === 'footer' || param === 'links-btns' || param === 'links-btnsCTA' || param === 'btn-CTA') {
            itemID = event.target.parentNode.parentNode.id;
        } else if (param === "links-detail") {
            itemID = event.target.parentNode.parentNode.parentNode.id;
        }; 

        ID = parseInt(itemID);
        if (itemID) {
            editorController.deleteItemArr(ID);
            UIController.deleteItem(itemID);
        }

    };

    var changePosition = function(param, direction) {
        var el, curID, currRowEl;
        

        if (param === 'text' || param === "img" || param === "links-markets" || param === 'sep'  || param === 'footer' || param === 'links-btns' || param === 'links-btnsCTA') {
            curID = event.target.parentNode.parentNode.id;
        } else if (param === "links-detail") {
            curID = event.target.parentNode.parentNode.parentNode.id;
        }; 

        el = document.getElementById(curID);

        if (direction === 'up') {
            if (el.previousElementSibling !== null) {
                    currRowEl = el.outerHTML;
                    el.previousElementSibling.insertAdjacentHTML('beforebegin', currRowEl);
                    el.outerHTML = "";
                } 
            } else if (direction === 'down') {
                if (el.nextElementSibling !== null) {
                    currRowEl = el.outerHTML;
                    el.nextElementSibling.insertAdjacentHTML('afterend', currRowEl);
                    el.outerHTML = "";
                } 
            }; 
    };

    var editOptions = function(el) {
        var val;
        val = el.value;
        selection = window.getSelection().toString();
        el.value = val.slice(0, el.selectionStart) + '<strong>' + selection + '</strong>' + val.slice(el.selectionEnd);
    };

    var getHtmlDocument = function() {
        
        UICtrl.downloadDoc();
        
    };

    var ctrlCreateTemplate = function(templateName) {
        var rowCounter;
        
        UIController.setAddBtnBlock();
        UIController.clearFields();
        editCtrl.clearData();

        if (templateName === 'space' || templateName === 'mars') {
            rowCounter = 10;
        } else if (templateName === 'moon' || templateName === 'saturn') {
            rowCounter = 6;
        } 

        for (var i = 0; i < rowCounter; i++) {
            editCtrl.addPageElement('template row');
        }

        UIController.addTemplate(templateName);
    };

    var clearDislayResult = function () {
        document.querySelector(DOM.generatedContent).innerHTML = '';
        document.querySelector(DOM.generatedButtons).innerHTML = '';
        editCtrl.clearData();
    };

    var setDisplayNone = function() {
        document.querySelector(DOM.imgCategory).style.display = 'none';
        document.querySelector(DOM.textCategory).style.display = 'none';
        document.querySelector(DOM.linksCategory).style.display = 'none';
        document.querySelector(DOM.btnCategory).style.display = 'none';
        document.querySelector(DOM.tempCategory).style.display = 'none';
        
    };

    var setBtnDisplayNone = function() {
        document.getElementById(DOM.addContentButton).style.display = 'none';
        document.getElementById(DOM.saveTextButton).style.display = 'none';
        document.getElementById(DOM.addImgButton).style.display = 'none';
        document.getElementById(DOM.saveImgButton).style.display = 'none';
        document.getElementById(DOM.linksButtonMoreDet).style.display = 'none';
        document.getElementById(DOM.linksButtonMarkets).style.display = 'none';
        document.getElementById(DOM.saveLinksButton).style.display = 'none';
        document.getElementById(DOM.btnAdd).style.display = 'none';
        document.getElementById(DOM.btnSave).style.display = 'none';
    }

    return {
        init: function () {
            console.log('Application has started.');
            setEventListeners();
        },
        
    };


})(editorController, UIController);

combiController.init();

