(function () {
    'use strict';
    const userNameInput = document.getElementById('user-name');
    const assessmentButton = document.getElementById('assessment');
    const resultDivided = document.getElementById('result-area');
    const tweetDivided = document.getElementById('tweet-area');

    /**
    * 指定した要素の子どもを全て除去する
    * @param {HTMLElement} element HTMLの要素
    */
    function removeAllChildren(element) {
        while (element.firstChild) { // 子どもの要素があるかぎり削除
            element.removeChild(element.firstChild);
        }
    }

    assessmentButton.onclick = () => {
        const userName = userNameInput.value;
        if (userName.length === 0) { // 名前が空の時は処理を終了する
            return;
        }
