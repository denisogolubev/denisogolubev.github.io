
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
        linksItemMarket: 'links-to__market',
        linksItemDet: 'more-details',
        linksInputDetails: '.tools-options__links--details',
        linksInputAndroid: '.tools-options__links--android',
        linksInputios: '.tools-options__links--ios',
        linksButtonMoreDet: 'add_more-details',
        linksButtonMarkets: 'add_markets',
        linksLang: '.tools-options__links--lang',
        deleteElButton: '.item__delete--btn',
        edit: 'ion-edit',
        delete: 'ion-ios-trash',
        editContentHeader: '.content-header',
        saveTextButton: 'save_text',
        saveImgButton: 'save_img',
        saveLinksButton: 'save_links'
        

       
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
                html = '<section class="editor" id="%id%"><p class="content-header">%content%</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i></div></section>'; 
            } else if (type === 'Simple text') {
                html = '<section class="editor" id="%id%"><p class="content-simpletext">%content%</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i></div></section>';
            } else if (type === 'Simple bold text') {
                html = '<section class="editor" id="%id%"><p class="content-simpletext__bold">%content%</p><div class="buttons"><i class="ion-edit text"></i><i class="ion-ios-trash text"></i></div></section>';
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

            if (type === 'Full screen') {
                html = '<section class="editor" id="%id%"><section class="full-screen__container" id="%id%"><img src="%url%" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i></div></section>'; 
            } else if (type === 'Centered') {
                html = '<section class="editor" id="%id%"><section class="centered-screen__container" id="%id%"><img src="%url%" alt="screen" class="screen"></section><div class="buttons"><i class="ion-edit img"></i><i class="ion-ios-trash img"></i></div></section>';
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
                    html = '<section class="editor" id="%id%" value="%lang%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">Детальніше</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section><section><div class="buttons"><i class="ion-edit links-detail"></i><i class="ion-ios-trash links-detail"></i></div></section></section>'; 
                } else if (lang === 'RUS') {
                    html = '<section class="editor" id="%id%" value="%lang%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">Детальнее</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section><section><div class="buttons"><i class="ion-edit links-detail"></i><i class="ion-ios-trash links-detail"></i></div></section></section>'; 
                } else if (lang === 'ENG') {
                    html = '<section class="editor" id="%id%" value="%lang%"><div class="separator"></div><section><a href="%url%" class="more-details""><p class="more-details__link">More details</p><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs></defs><g id="SCREENS" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="01-2-VF-UA_Your-tariffs" transform="translate(-321.000000, -676.000000)"><g id="Row-plan-details-Copy-3" transform="translate(30.000000, 666.000000)"><g id="Group" transform="translate(291.000000, 10.000000)"><polygon id="Shape" fill-opacity="0" fill="#D8D8D8" transform="translate(12.000000, 12.000000) rotate(-90.000000) translate(-12.000000, -12.000000) " points="0 0 24 0 24 24 0 24"></polygon><polyline id="Shape" stroke="#E60000" stroke-linecap="round" stroke-linejoin="round" points="8.5 3.5 17 12 8.5 20.5"></polyline></g></g></g></g></svg></a></section><section><div class="buttons"><i class="ion-edit links-detail"></i><i class="ion-ios-trash links-detail"></i></div></section></section>'; 
                }    
            } else if (type === 'Links to markets') {
                if (lang === 'UKR') {
                    html = '<section class="editor" id="%id%" value="%lang%"><p class="dwn-header"><b>Завантажити додаток</b></p><section class="download-list"><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1621" alt="android-badge"></a><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1620" alt="android-badge"></a></section><div class="buttons"><i class="ion-edit links-markets"></i><i class="ion-ios-trash links-markets"></i></div></section>'; 
                } else if (lang === 'RUS') {
                    html = '<section class="editor" id="%id%" value="%lang%"><p class="dwn-header"><b>Загрузить приложение</b></p><section class="download-list"><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1621" alt="android-badge"></a><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1620" alt="android-badge"></a></section><div class="buttons"><i class="ion-edit links-markets"></i><i class="ion-ios-trash links-markets"></i></div></section>'; 
                } else if (lang === 'ENG') {
                    html = '<section class="editor" id="%id%" value="%lang%"><p class="dwn-header"><b>Dowload the app</b></p><section class="download-list"><a href="%url-android%"><img src="https://cscappimg.vodafone.ua/1621" alt="android-badge"></a><a href="%url-ios%"><img src="https://cscappimg.vodafone.ua/1620" alt="android-badge"></a></section><div class="buttons"><i class="ion-edit links-markets"></i><i class="ion-ios-trash links-markets"></i></div></section>'; 
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

        
        downloadDoc: function() {
            var startHtml, styleHtml, endHtml, file;
    
            startHtml = '<html><head><meta charset="UTF-8"><meta name="viewport" content="user-scalable=no, initial-scale=1, maximum-scale=1, minimum-scale=1, width=device-width"><link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">';
    
            styleHtml = '<style>body {background-color: #F4F4F4; font-family: "Roboto", sans-serif; margin: 0;line-height: 1.5rem;color: #333;} .content-header {margin: 0.5rem 1rem 1rem 1rem;font-size: 1.2rem;font-weight: 700;}.content-simpletext {margin: 0.5rem 1rem 1rem 1rem;font-size: 1rem;}.content-simpletext__bold {margin: 0.5rem 1rem 1rem 1rem;font-size: 1rem;font-weight: 700;}.screen {width: 100%;}.full-screen__container {display: block;margin: 0 auto;padding: 0;width: 100%;}.centered-screen__container {display: block;margin: 0 auto;padding: 0;width: 50%;}.separator {border-top: 0.06rem solid #333;margin: 0 16px;}.more-details {display: flex;align-items: center;text-decoration: none;}.more-details__link {margin: 0 16px;padding: 10px 0;color: #333;font-size: 16px;}.download-list {display: flex;list-style: none;justify-content: center;align-items: center;padding: 0;}.dwn-header {font-size: 1rem;font-weight: bold;text-align: center;}.download-list a {padding: 0;margin: 0;line-height: 0;}.download-list a img {padding: 0.3rem 1rem;width: 9.5rem;}.buttons {display: none;}</style><body>';
            endHtml = '</body></html>';
    
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

        editItem: function(cls, content, lang, urlAndroid, urlIos) {
            if (cls === 'content-header') {
                document.querySelector(DOMStrings.textOptions).value = 'Header';
                document.querySelector(DOMStrings.textInput).value = content;
            } else if (cls === 'content-simpletext') {
                document.querySelector(DOMStrings.textOptions).value = 'Simple text';
                document.querySelector(DOMStrings.textInput).value = content;
            } else if (cls === 'content-simpletext__bold') {
                document.querySelector(DOMStrings.textOptions).value = 'Simple bold text';
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
        },

        clearFields: function() {
            var fields, fieldsArray;

            fields = document.querySelectorAll(DOMStrings.textInput + ',' + DOMStrings.imgURL + ',' + DOMStrings.linksInputDetails + ',' + DOMStrings.linksInputAndroid + ',' + DOMStrings.linksInputios);

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
            });

            document.getElementById(DOM.addContentButton).addEventListener('click', ctrlAddTextItem);

            /*Tools options for image category*/
            document.querySelector(DOM.toolsCategoryesImg).addEventListener("click", function() {
                setDisplayNone();        
                UIController.displayImgCategory();
            });

            document.getElementById(DOM.addImgButton).addEventListener("click", ctrlAddImgItem);    
            
            /*Tools options for links category*/    
            document.querySelector(DOM.toolsCategoryesLinks).addEventListener("click", function() {
                setDisplayNone();        
                UIController.displayLinksCategory();
                ctrlChangeLinksInt();
            });

            document.querySelector(DOM.linksType).addEventListener('change', ctrlChangeLinksInt);

            document.getElementById(DOM.linksButtonMoreDet).addEventListener('click', ctrlAddLinksItem)

            document.querySelector(DOM.textInput).addEventListener('keypress', function(event) {
                var el = document.querySelector(DOM.textInput);
                if (event.keyCode === 13) {
                    UIController.insertTextAtCursor(el, '<br>');
                }
            });

            
            document.querySelector(DOM.generatedContent).addEventListener('click', function(event) {
                if (event.target.classList[0] === DOM.delete) {
                    param = event.target.classList[1];
                    ctrlDeleteItem(param);
                } else if (event.target.classList[0] === DOM.edit) {
                    param = event.target.classList[1];
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
            
        } else if (param === "links-markets") {
            cls = el.childNodes[1].classList[0];
            lang = el.attributes.value.nodeValue;
            urlAndroid = el.childNodes[1].childNodes[0].attributes.href.nodeValue;
            urlIos = el.childNodes[1].childNodes[1].attributes.href.nodeValue;
            setDisplayNone();
            UIController.displayLinksCategory();
            UIController.displayLinkFields('Links to markets');
            UIController.editItem(cls, "", lang, urlAndroid, urlIos);
            setBtnDisplayNone();
            document.getElementById(DOM.saveLinksButton).style.display = 'block';
            document.getElementById(DOM.linksItemDet).setAttribute('disabled', 'disabled');

        }
    };

    var saveItem = function(param) {
        var el, input, type, saveText, saveImg, saveDetails, textValue;

        el = document.getElementById(curID);
        saveText = function() {
            el.childNodes[0].className = type;
            el.childNodes[0].innerHTML = "";
            el.childNodes[0].innerHTML = input.content;
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
        };

        saveMarkets = function() {
            el.attributes.value.nodeValue = input.language;
            if (input.language === 'UKR') {
                textValue = 'Завантажити додаток';
            } else if (input.language === 'RUS') {
                textValue = 'Загрузить приложение';
            } else if (input.language === 'ENG') {
                textValue = 'Dowload the app';
            }
            el.childNodes[0].innerText = textValue;
            el.childNodes[1].childNodes[0].attributes.href.nodeValue = input.urlAndroid;
            el.childNodes[1].childNodes[1].attributes.href.nodeValue = input.urlIos;
        };

        if (param === 'text') {
            input = UICtrl.getInputTextCategory();
            if (input.type === 'Header') {
                type = 'content-header';
                saveText();
            } else if (input.type === 'Simple text') {
                type = 'content-simpletext';
                saveText();
            } else if (input.type === 'Simple bold text') {
                type = 'content-simpletext__bold';
                saveText();
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
        } else if (param === 'links-detail' || param === 'links-markets') {
            input = UIController.getLinksCategory();
            if (input.type === 'More details') {                
                saveDetails();
                document.getElementById(DOM.linksItemMarket).removeAttribute('disabled', 'disabled');
            } else if (input.type === 'Links to markets') {
                saveMarkets();
                document.getElementById(DOM.linksItemDet).removeAttribute('disabled', 'disabled');
            }
            
        } 

        setBtnDisplayNone();
        UICtrl.clearFields();
        
        
    };

    

    var ctrlDeleteItem = function(param) {
        var itemID, ID;
            
        if (param === 'text' || param === "img") {
            itemID = event.target.parentNode.parentNode.id;
        } else if (param === "links-detail") {
            itemID = event.target.parentNode.parentNode.parentNode.id;
        } else if (param === "links-markets") {
            itemID = event.target.parentNode.parentNode.id;
        }
            
            
        
        ID = parseInt(itemID);
        if (itemID) {
            editorController.deleteItemArr(ID);
            UIController.deleteItem(itemID);
        }

    };

    var getHtmlDocument = function() {
        
        UICtrl.downloadDoc();
        
    };

    var setDisplayNone = function() {
        document.querySelector(DOM.imgCategory).style.display = 'none';
        document.querySelector(DOM.textCategory).style.display = 'none';
        document.querySelector(DOM.linksCategory).style.display = 'none';
        
    };

    var setBtnDisplayNone = function() {
        document.getElementById(DOM.addContentButton).style.display = 'none';
        document.getElementById(DOM.saveTextButton).style.display = 'none';
        document.getElementById(DOM.addImgButton).style.display = 'none';
        document.getElementById(DOM.saveImgButton).style.display = 'none';
        document.getElementById(DOM.linksButtonMoreDet).style.display = 'none';
        document.getElementById(DOM.linksButtonMarkets).style.display = 'none';
        document.getElementById(DOM.saveLinksButton).style.display = 'none';
    }

    return {
        init: function () {
            console.log('Application has started.');
            setEventListeners();
        },
        
    };


})(editorController, UIController);

combiController.init();

