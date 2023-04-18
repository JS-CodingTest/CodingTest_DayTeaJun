// 게시물 만들기
// 텍스트를 입력받고, 제목, 내용을 받은다음
// 각 입력받는 칸(제목, 내용, 이미지 등) 옆에 color picker 버튼을 만듦
// 각 제목과 내용에 글자색을 넣고, 게시물 올리기 버튼을 누르면
// 밑에 카드 생성

const inpTitle = document.querySelector('.inp-title'); // 제목
const contentText = document.querySelector('.content-textarea'); // 내용
const inpBtn = document.querySelector('.inp-btn'); // 버튼

const sectionContainer = document.querySelector('.section-container');

const today = new Date();

inpBtn.addEventListener('click', function () {
    if (!inpTitle.value)// 제목이 입력되지 않으면 alert 발생
        alert('제목을 입력해 주세요!');
    else if (!contentText.value)// 내용이 입력되지 않으면 alert 발생
        alert('내용을 입력해 주세요!');
    else {
        const cardItem = document.createElement('article');
        cardItem.setAttribute('class', 'card-item');
        sectionContainer.appendChild(cardItem);

        const cardBorder = document.createElement('a');
        cardBorder.setAttribute('href', '#');
        cardItem.appendChild(cardBorder);

        const cardImg = document.createElement('img');
        cardImg.setAttribute('class', 'img');
        cardImg.setAttribute('src', './img/cat.jpg');
        cardBorder.appendChild(cardImg);

        const cardText = document.createElement('div');
        cardText.setAttribute('class', 'card-text');
        cardBorder.appendChild(cardText);

        const title = document.createElement('h2');
        title.setAttribute('class', 'title');
        cardText.appendChild(title);
        title.textContent = inpTitle.value;

        const content = document.createElement('p');
        content.setAttribute('class', 'content');
        cardText.appendChild(content);
        content.textContent = contentText.value;

        const underline = document.createElement('p');
        underline.setAttribute('class', 'underline');
        cardText.appendChild(underline);
        underline.textContent = today.toISOString().slice(0, 10);

        inpTitle.value = "";
        contentText.value = "";
    }
})