"use strict"

function Book(title, author, pages, read) {
    if (!new.target) {
        throw Error("Must use the 'new' keyword to call the constructor.");
    }

    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        const initialMsg =
            `${this.title} by ${this.author}, ${this.pages} pages, `;
        return read ?
            initialMsg.concat("has been read.") :
            initialMsg.concat("not read yet.");
    };
}