
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
        textInput: '.tools-options__text--input',
        generatedContent: '.display-device__content',
        addContentButton: 'add_text',
        downloadHtml: '.display-button__download',
        textCategory: '.tools-options__text',
        imgCategory: '.tools-options__images',
        toolsCategoryes: '.tools-nav__categoryes',
        toolsCategoryesText: '.tools-nav__categoryes--text',
        toolsCategoryesImg: '.tools-nav__categoryes--img',
        toolsCategoryesLinks: '.tools-nav__categoryes--links',
        imgOptions: '.tools-options__img--items',
        imgURL: '.tools-options__img--input',
        addImgButton: 'add_img',
        linksCategory: '.tools-options__links',
        linksType: '.tools-options__links--items',
        linksInputDetails: '.tools-options__links--details',
        linksInputAndroid: '.tools-options__links--android',
        linksInputios: '.tools-options__links--ios',
        linksButtonMoreDet: 'add_more-details',
        linksButtonMarkets: 'add_markets',
        linksLang: '.tools-options__links--lang'


       
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
                html = '<h3 class="content-header" id="%id%">%content%</h3>'; 
            } else if (type === 'Simple text') {
                html = '<p class="content-simpletext" id="%id%">%content%</p>';
            } else if (type === 'Simple bold text') {
                html = '<p class="content-simpletext" id="%id%"><b>%content%</b></p>';
            } else {
                console.log('This type can\'t be used.');
            }

            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%content%', obj.content);

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

            if (type === 'Whole screen size') {
                html = '<section class="full-screen__container" id="%id%"><img src="%url%" alt="screen" class="screen"></section>'; 
            } else if (type === 'Centered') {
                html = '<section class="centered-screen__container" id="%id%"><img src="%url%" alt="screen" class="screen"></section>';
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
                document.getElementById(DOMStrings.linksButtonMoreDet).style.display = 'none';
                document.getElementById(DOMStrings.linksButtonMarkets).style.display = 'none';
            }
    
            if (type === 'More details') {
                hideAllInputs();
                document.querySelector(DOMStrings.linksInputDetails).style.display = 'block';
                document.getElementById(DOMStrings.linksButtonMoreDet).style.display = 'block';
            } else if (type === 'Links to markets') {
                hideAllInputs();
                document.querySelector(DOMStrings.linksInputAndroid).style.display = 'block';
                document.querySelector(DOMStrings.linksInputios).style.display = 'block';
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
            };
            
        },

        addLinksItem: function(obj, lang, type) {
            var html, newHtml;
            
            if (type === 'More details') {
                if (lang === 'UKR') {
                    html = '<section id="%id%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">Детальніше</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section></section>'; 
                } else if (lang === 'RUS') {
                    html = '<section id="%id%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">Детальнее</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section></section>'; 
                } else if (lang === 'ENG') {
                    html = '<section id="%id%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">More details</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section></section>'; 
                }    
            } else if (type === 'Links to markets') {
                if (lang === 'UKR') {
                    html = '<section id="%id%"><p class="dwn-header"><b>Завантажити додаток</b></p><section class="download-list"><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1621" alt="android-badge"></a><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1620" alt="android-badge"></a></section></section>'; 
                } else if (lang === 'RUS') {
                    html = '<section id="%id%"><p class="dwn-header"><b>Загрузить приложение</b></p><section class="download-list"><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1621" alt="android-badge"></a><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1620" alt="android-badge"></a></section></section>'; 
                } else if (lang === 'ENG') {
                    html = '<section id="%id%"><p class="dwn-header"><b>Dowload the app</b></p><section class="download-list"><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1621" alt="android-badge"></a><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1620" alt="android-badge"></a></section></section>'; 
                }    
            } else {
                console.log('This type can\'t be used.');
            }


            if (type === 'More details') {
                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace('%url%', obj.url);

                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', newHtml);

            } else if (type === 'Links to markets') {
                newHtml = html.replace('%id%', obj.id);
                newHtml = newHtml.replace('%url-android%', obj.urlAndroid);
                newHtml = newHtml.replace('%url-ios%', obj.urlIos);
    
                document.querySelector(DOMStrings.generatedContent).insertAdjacentHTML('beforeend', newHtml); 
            }
            
        },

        
        downloadDoc: function() {
            var startHtml, styleHtml, endHtml, file;
    
            startHtml = '<html><head><meta charset="UTF-8"><meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width">';
    
            styleHtml = '<style></style><body>';
            endHtml = '</body></html>';
            /*alert(startHtml + styleHtml + document.querySelector(DOM.generatedContent).innerHTML + endHtml);*/
            /*var blob = new Blob ([startHtml + styleHtml + document.querySelector(DOM.generatedContent).innerHTML + endHtml, {type: "text/plain;charset=utf-8"}]);
            FileSaver.saveAs(blob, 'Dowloaded_html.html');*/
    
            file = new Blob([startHtml, styleHtml, document.querySelector(DOMStrings.generatedContent).innerHTML, endHtml], {type: "text/plain;charset=utf-8"});
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

        clearFields: function() {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMStrings.textInput + ',' + DOMStrings.imgURL + ',' + DOMStrings.linksInputDetails + ',' + DOMStrings.linksInputAndroid + ',' + DOMStrings.linksInputios);

            fieldsArray = Array.prototype.slice.call(fields);

            fieldsArray.forEach(function(cur){
                cur.value = "";
            });
        },

        getDOMStrings: function() {
            return DOMStrings;
        }

    };



}();

var combiController = (function (editCtrl, UICtrl) {

    var DOM = UICtrl.getDOMStrings();

    var setEventListeners = function() {
        

        window.onload = function() {
            /*Download HTML button*/ 
            document.querySelector(DOM.downloadHtml).addEventListener("click", getHtmlDocument);
            
            /*Set tools category that will be shown after page load*/
            document.querySelector(DOM.textCategory).style.display = 'grid';

            /*Tools options for text category*/
            document.querySelector(DOM.toolsCategoryesText).addEventListener("click", function() {
                setDisplayNone();
                document.querySelector(DOM.textCategory).style.display = 'grid';
            });

            document.getElementById(DOM.addContentButton).addEventListener('click', ctrlAddTextItem);

            /*Tools options for image category*/
            document.querySelector(DOM.toolsCategoryesImg).addEventListener("click", function() {
                setDisplayNone();        
                document.querySelector(DOM.imgCategory).style.display = 'grid';});

            document.getElementById(DOM.addImgButton).addEventListener("click", ctrlAddImgItem);    
            
            /*Tools options for links category*/    
            document.querySelector(DOM.toolsCategoryesLinks).addEventListener("click", function() {
                setDisplayNone();        
                document.querySelector(DOM.linksCategory).style.display = 'grid';
                ctrlChangeLinksInt();
            });

            document.querySelector(DOM.linksType).addEventListener('change', ctrlChangeLinksInt);

            document.getElementById(DOM.linksButtonMoreDet).addEventListener('click', ctrlAddLinksItem)


            
            

            


            
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
        }
    };

    var getHtmlDocument = function() {
        
        UICtrl.downloadDoc();
        
    };

    var setDisplayNone = function() {
        document.querySelector(DOM.imgCategory).style.display = 'none';
        document.querySelector(DOM.textCategory).style.display = 'none';
        document.querySelector(DOM.linksCategory).style.display = 'none';
        
    }

    return {
        init: function () {
            console.log('Application has started.');
            setEventListeners();
        },
        
    };


})(editorController, UIController);

combiController.init();

