"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const btn = document.querySelector('#btn');
const fetchImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const res = yield fetch("https://api.thecatapi.com/v1/images/search");
    console.log(res);
    const result = yield res.json();
    console.log(result[0]);
    return result[0];
});
const changeImage = () => __awaiter(void 0, void 0, void 0, function* () {
    const img = document.querySelector('#img');
    const newImage = yield fetchImage();
    img.src = newImage.url;
    img.style.objectFit = 'contain';
    img.style.maxWidth = '80vw';
    img.style.maxHeight = '80vh';
});
const setBodyStyle = () => {
    document.body.style.margin = '0';
    document.body.style.height = '100vh';
    document.body.style.display = 'flex';
    document.body.style.alignItems = 'center';
    document.body.style.justifyContent = 'center';
};
setBodyStyle();
changeImage();
btn.addEventListener('click', () => changeImage());
