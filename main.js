(()=>{"use strict";var e=document.querySelector(".profile__avatar"),t=document.querySelector(".profile__avatar-edit-button"),n=document.querySelector(".profile__edit-button"),r=document.querySelector(".profile__add-button"),o=document.querySelector(".popup_type_avatar"),i=document.querySelector(".popup_type_profile"),c=i.querySelector(".popup__form"),u=i.querySelector(".popup__input_type_name"),a=i.querySelector(".popup__input_type_work"),s=document.querySelector(".popup_type_card").querySelector(".popup__form"),l=(document.querySelector("cards__basket"),{formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__submit",inactiveSubmitButtonClass:"popup__submit_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__input-error_active",hoverClass:"link"}),f={templateSelector:"#card-template",cardSelector:".cards__card",imageSelector:".cards__img",basketButtonSelector:".cards__basket",titleSelector:".cards__title",likeButtonSelector:".cards__like-icon",likeCounterSelector:".cards__like-counter",activeLikeButtonClass:"cards__like-icon_active"};function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var h=function(){function e(t,n,r,o,i,c,u,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._title=n.name,this._image=n.link,this._likes=n.likes,this._cardId=n._id,this._cardOwnerId=n.owner._id,this._templateSelector=t.templateSelector,this._cardSelector=t.cardSelector,this._imageSelector=t.imageSelector,this._basketButtonSelector=t.basketButtonSelector,this._titleSelector=t.titleSelector,this._likeButtonSelector=t.likeButtonSelector,this._likeCounterSelector=t.likeCounterSelector,this._activeLikeButtonClass=t.activeLikeButtonClass,this._userId=r,this._handleImageClick=o,this._handleBasketClick=i,this._handleCardDelete=c,this._handleSetLike=u,this._handleRemoveLike=a}var t,n;return t=e,(n=[{key:"_getTemplate",value:function(){return this._cardElement=document.querySelector(this._templateSelector).content.querySelector(this._cardSelector).cloneNode(!0),this._cardElement}},{key:"_deleteNotUserBasket",value:function(){this._userId!==this._cardOwnerId&&this._basketButtonElement.remove()}},{key:"_isUserInTheListOfLikes",value:function(){var e=this;return this._likes.forEach((function(t){if(t._id===e._userId)return!0})),!1}},{key:"_checkLikeStatus",value:function(){this._isUserInTheListOfLikes()&&this._likeButtonElement.classList.add(this._activeLikeButtonClass)}},{key:"_handleLikeClick",value:function(e){this._likes=e.likes,this._likeCounterElement.textContent=e.likes.length,this._likeButtonElement.classList.toggle(this._activeLikeButtonClass)}},{key:"deleteCard",value:function(){this._view.remove(),this._view=null}},{key:"_setEventListeners",value:function(){var e=this;this._likeButtonElement.addEventListener("click",(function(){e._likeButtonElement.classList.contains(e._activeLikeButtonClass)?e._handleRemoveLike(e._cardId):e._handleSetLike(e._cardId)})),this._basketButtonElement.addEventListener("click",(function(){e._handleBasketClick(e._cardId)})),this._imageElement.addEventListener("click",(function(){e._handleImageClick(e._title,e._image)}))}},{key:"generateCard",value:function(){return this._view=this._getTemplate(),this._titleElement=this._view.querySelector(this._titleSelector),this._imageElement=this._view.querySelector(this._imageSelector),this._likeButtonElement=this._view.querySelector(this._likeButtonSelector),this._basketButtonElement=this._view.querySelector(this._basketButtonSelector),this._likeCounterElement=this._view.querySelector(this._likeCounterSelector),this._titleElement.textContent=this._title,this._imageElement.setAttribute("src",this._image),this._imageElement.setAttribute("alt",this._title),this._likeCounterElement.textContent=this._likes.length,this._deleteNotUserBasket(),this._checkLikeStatus(),this._setEventListeners(),this._view}}])&&p(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function _(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var d=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._inputSelector=t.inputSelector,this._submitButtonSelector=t.submitButtonSelector,this._inactiveSubmitButtonClass=t.inactiveSubmitButtonClass,this._inputErrorClass=t.inputErrorClass,this._errorClass=t.errorClass,this._hoverClass=t.hoverClass,this._formElement=n}var t,n;return t=e,(n=[{key:"_showInputError",value:function(e,t,n){e.classList.add(this._inputErrorClass),t.textContent=n,t.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(e,t){e.classList.remove(this._inputErrorClass),t.textContent="",t.classList.remove(this._errorClass)}},{key:"_checkInputValidity",value:function(e,t){e.validity.valid?this._hideInputError(e,t):this._showInputError(e,t,e.validationMessage)}},{key:"_setEventListeners",value:function(){var e=this;this._inputList=Array.from(this._formElement.querySelectorAll(this._inputSelector)),this._inputList.forEach((function(t){var n=e._formElement.querySelector(".".concat(t.id,"-error"));e._makeButtonInactive(),t.addEventListener("input",(function(){e._checkInputValidity(t,n),e._toggleButtonState()}))}))}},{key:"_hasInvalidInput",value:function(){return this._inputList.some((function(e){return!e.validity.valid}))}},{key:"_makeButtonActive",value:function(){this._submitButtonElement.classList.remove(this._inactiveSubmitButtonClass),this._submitButtonElement.classList.add(this._hoverClass),this._submitButtonElement.removeAttribute("disabled")}},{key:"_makeButtonInactive",value:function(){this._submitButtonElement.classList.add(this._inactiveSubmitButtonClass),this._submitButtonElement.classList.remove(this._hoverClass),this._submitButtonElement.setAttribute("disabled",!0)}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?this._makeButtonInactive():this._makeButtonActive()}},{key:"resetPopup",value:function(){var e=this;this._makeButtonInactive(),this._inputList.forEach((function(t){var n=e._formElement.querySelector(".".concat(t.id,"-error"));e._hideInputError(t,n)}))}},{key:"enableValidation",value:function(){this._submitButtonElement=this._formElement.querySelector(this._submitButtonSelector),this._setEventListeners()}}])&&_(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var m=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._renderer=t,this._containerElement=document.querySelector(n)}var t,n;return t=e,(n=[{key:"renderItems",value:function(e){var t=this;e.forEach((function(e){t._renderer(e)}))}},{key:"addItem",value:function(e){this._containerElement.prepend(e)}}])&&y(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._popupElement=document.querySelector(t),this._handleEscClose=this._handleEscClose.bind(this)}var t,n;return t=e,(n=[{key:"_handleEscClose",value:function(e){"Escape"===e.key&&this.close()}},{key:"open",value:function(){this._popupElement.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popupElement.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"setEventListeners",value:function(){var e=this;this._popupElement.addEventListener("mousedown",(function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&e.close()}))}}])&&v(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function k(e){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},k(e)}function E(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function S(){return S="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},S.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function w(e,t){return w=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},w(e,t)}function C(e,t){if(t&&("object"===k(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var O=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&w(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return C(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._formElement=t._popupElement.querySelector(".popup__form"),t._submitButtonElement=t._formElement.querySelector(".popup__submit"),t}return t=c,(n=[{key:"setHandleSubmit",value:function(e){this._handleSubmit=e}},{key:"setEventListeners",value:function(){var e=this;S(L(c.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(),e.close()}))}}])&&E(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(b);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function j(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function P(){return P="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=I(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},P.apply(this,arguments)}function I(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=T(e)););return e}function R(e,t){return R=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},R(e,t)}function q(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function T(e){return T=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},T(e)}var x=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&R(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=T(r);if(o){var n=T(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return q(this,e)});function c(e){var t;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(t=i.call(this,e))._titleElement=t._popupElement.querySelector(".popup__title-img"),t._imageElement=t._popupElement.querySelector(".popup__img"),t}return t=c,(n=[{key:"open",value:function(e,t){this._titleElement.textContent=e,this._imageElement.setAttribute("src",t),this._imageElement.setAttribute("alt",e),P(T(c.prototype),"open",this).call(this)}}])&&j(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(b);function A(e){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(e)}function U(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function D(){return D="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,t,n){var r=V(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},D.apply(this,arguments)}function V(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=H(e)););return e}function z(e,t){return z=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},z(e,t)}function N(e,t){if(t&&("object"===A(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function H(e){return H=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},H(e)}var J=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&z(e,t)}(c,e);var t,n,r,o,i=(r=c,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=H(r);if(o){var n=H(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return N(this,e)});function c(e,t,n){var r;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,c),(r=i.call(this,e))._handleSubmit=t,r._resetPopup=n,r._formElement=r._popupElement.querySelector(".popup__form"),r._inputList=Array.from(r._formElement.querySelectorAll(".popup__input")),r._submitButtonElement=r._formElement.querySelector(".popup__submit"),r._submitButtonText=r._submitButtonElement.textContent,r._inputValues={},r}return t=c,(n=[{key:"_getInputValues",value:function(){var e=this;return this._inputList.forEach((function(t){e._inputValues[t.name]=t.value})),this._inputValues}},{key:"setEventListeners",value:function(){var e=this;D(H(c.prototype),"setEventListeners",this).call(this),this._formElement.addEventListener("submit",(function(t){t.preventDefault(),e._handleSubmit(e._getInputValues()),e.close()}))}},{key:"close",value:function(){D(H(c.prototype),"close",this).call(this),this._formElement.reset(),this._resetPopup()}},{key:"renderLoading",value:function(e){this._submitButtonElement.textContent=e?"Сохранение...":this._submitButtonText}}])&&U(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),c}(b);function M(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var F=function(){function e(t){var n=t.nameSelector,r=t.workSelector,o=t.avatarSelector;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._nameElement=document.querySelector(n),this._workElement=document.querySelector(r),this._avatarElement=document.querySelector(o)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{name:this._nameElement.textContent,work:this._workElement.textContent,avatar:this._avatarElement.textContent}}},{key:"setUserInfo",value:function(e,t,n){this._nameElement.textContent=e,this._workElement.textContent=t,this._avatarElement.src=n}}])&&M(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function G(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var K,Q=new(function(){function e(t){var n=t.url,r=t.token;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._url=n,this._token=r}var t,n;return t=e,(n=[{key:"_checkResponse",value:function(e){return e.ok?e.json():Promise.reject("Ошибка 4: ".concat(e.status))}},{key:"getUserInfo",value:function(){var e=this;return fetch("".concat(this._url,"/users/me"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"getInitialCards",value:function(){var e=this;return fetch("".concat(this._url,"/cards"),{headers:{authorization:this._token}}).then((function(t){return e._checkResponse(t)}))}},{key:"saveUserInfo",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),about:"".concat(e.about)})}).then((function(e){return t._checkResponse(e)}))}},{key:"saveAvatar",value:function(e){var t=this;return fetch("".concat(this._url,"/users/me/avatar"),{method:"PATCH",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({avatar:"".concat(e.link)})}).then((function(e){return t._checkResponse(e)}))}},{key:"addNewCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards"),{method:"POST",headers:{authorization:this._token,"Content-Type":"application/json"},body:JSON.stringify({name:"".concat(e.name),link:"".concat(e.link)})}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._checkResponse(e)}))}},{key:"setLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"PUT",headers:{authorization:this._token}}).then((function(e){return t._checkResponse(e)}))}},{key:"deleteLikeCard",value:function(e){var t=this;return fetch("".concat(this._url,"/cards/").concat(e,"/likes"),{method:"DELETE",headers:{authorization:this._token}}).then((function(e){return t._checkResponse(e)}))}}])&&G(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}())({url:"https://mesto.nomoreparties.co/v1/cohort-52",token:"e8e9a1c8-a81f-45be-8c26-d679721b86be"}),W=new d(l,o),X=new d(l,c),Y=new d(l,s),Z=new O(".popup_type_card-delete"),$=new x(".popup_type_image"),ee=new F({nameSelector:".profile__name",workSelector:".profile__work",avatarSelector:".profile__avatar"}),te=new J(".popup_type_avatar",(function(t){te.renderLoading(!0),Q.saveAvatar(t).then((function(t){e.src=t.link,te.close()})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){te.renderLoading(!1)}))}),W.resetPopup.bind(W)),ne=new J(".popup_type_profile",(function(e){ne.renderLoading(!0),Q.saveUserInfo(e).then((function(e){ne.close(),ee.setUserInfo(e)})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ne.renderLoading(!0)}))}),X.resetPopup.bind(X)),re=new J(".popup_type_card",(function(e){console.log(e),ne.renderLoading(!0),Q.addNewCard(e).then((function(e){ne.close(),oe.addItem(ie(e))})).catch((function(e){console.log("Ошибка: ".concat(e))})).finally((function(){ne.renderLoading(!0)}))}),Y.resetPopup.bind(Y)),oe=new m((function(e){oe.addItem(ie(e))}),".cards"),ie=function(e){var t=new h(f,e,K,$.open.bind($),Z.open.bind(Z),(function(e){Z.open(),Z.setHandleSubmit((function(){Q.deleteCard(e).then((function(){t.deleteCard()})).catch((function(e){console.log("Ошибка 1: ".concat(e))}))}))}),(function(e){Q.setLikeCard(e).then((function(e){t._handleLikeClick(e)})).catch((function(e){console.log("Ошибка 2: ".concat(e.status))}))}),(function(e){Q.deleteLikeCard(e).then((function(e){t._handleLikeClick(e)})).catch((function(e){console.log("Ошибка 3: ".concat(e.status))}))}));return t.generateCard()};Q.getUserInfo().then((function(e){K=e._id,ee.setUserInfo(e.name,e.about,e.avatar)})).catch((function(e){console.log("Ошибка 5: ".concat(e.status))})),Q.getInitialCards().then((function(e){oe.renderItems(e)})).catch((function(e){console.log("Ошибка 6: ".concat(e.status))})),Z.setEventListeners(),$.setEventListeners(),te.setEventListeners(),ne.setEventListeners(),re.setEventListeners(),t.addEventListener("click",te.open.bind(te)),n.addEventListener("click",(function(){var e=ee.getUserInfo(),t=e.name,n=e.work;u.value=t,a.value=n,ne.open()})),r.addEventListener("click",re.open.bind(re)),W.enableValidation(),X.enableValidation(),Y.enableValidation()})();