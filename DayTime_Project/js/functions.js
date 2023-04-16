// 게시물 만들기
// 텍스트를 입력받고, 제목, 내용을 받은다음
// 각 입력받는 칸(제목, 내용, 이미지 등) 옆에 color picker 버튼을 만듦
// 각 제목과 내용에 글자색을 넣고, 게시물 올리기 버튼을 누르면
// 밑에 카드 생성

let inpTitle = document.querySelector('.inp-title');
let contentText = document.querySelector('.content-textarea');
let inpBtn = document.querySelector('.inp-btn');// 버튼

let toDay = new Date();

const sectionContainer = document.querySelector('.section-container');

inpBtn.addEventListener('click', function () {
    if (!inpTitle.value)// 제목이 입력되지 않으면 alert 발생
        alert('제목을 입력해 주세요!');
    else if (!contentText.value)// 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else {
        let cardItem = document.createElement('article');
        cardItem.setAttribute('class', 'card-item');
        sectionContainer.appendChild(cardItem);

        let cardBorder = document.createElement('a');
        cardBorder.setAttribute('href', '#');
        cardItem.appendChild(cardBorder);

        let cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'img');
        cardImg.setAttribute('src', './img/cat.jpg');
        cardBorder.appendChild(cardImg);

        let cardText = document.createElement('div');
        cardText.setAttribute('class', 'card-text');
        cardBorder.appendChild(cardText);

        let title = document.createElement('h2');
        title.setAttribute('class', 'title');
        cardText.appendChild(title);
        title.innerHTML = inpTitle.value;

        let content = document.createElement('p');
        content.setAttribute('class', 'content');
        cardText.appendChild(content);
        content.innerHTML = contentText.value;

        let underline = document.createElement('p');
        underline.setAttribute('class', 'underline');
        cardText.appendChild(underline);
        underline.innerHTML = toDay.getFullYear();

        inpTitle.value = "";
        contentText.value = "";
    }
})