// 게시물 만들기
// 텍스트를 입력받고, 제목, 내용을 받은다음
// 각 입력받는 칸(제목, 내용, 이미지 등) 옆에 color picker 버튼을 만듦
// 각 제목과 내용에 글자색을 넣고, 게시물 올리기 버튼을 누르면
// 밑에 카드 생성

const inpTitle = document.querySelector('.inp-title'); // 제목
const contentText = document.querySelector('#content-textarea'); // 내용
const inpBtn = document.querySelector('.inp-btn'); // 버튼
const today = new Date();


// 로컬스토리지에 저장
let allPost = JSON.parse(localStorage.getItem("allPost"));
allPost = allPost ?? [];
render();

// 제출하기 버튼 클릭시 로컬스토리지에 저장
inpBtn.addEventListener('click', function (e) {
    e.preventDefault();

    if (!inpTitle.value)
        alert('제목을 입력해 주세요!');
    else if (!contentText.value)
        alert('내용을 입력해 주세요!');
    else {

        const title = inpTitle.value;
        const content = contentText.value;
        allPost.push({ title, content, len: allPost.length });
        localStorage.setItem("allPost", JSON.stringify(allPost));
        inpTitle.value = "";
        contentText.value = "";
        render()
    }
})

function render() {

    const sectionContainer = document.querySelector('.section-container');
    sectionContainer.innerHTML = "";

    for (const item of allPost) {
        const cardItem = document.createElement('article');
        cardItem.setAttribute('class', 'card-item');
        sectionContainer.appendChild(cardItem);

        const cardBorder = document.createElement('a');
        cardBorder.setAttribute('href', 'javascript:void(0);');
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
        title.textContent = item.title;

        const content = document.createElement('p');
        content.setAttribute('class', 'content');
        cardText.appendChild(content);
        content.textContent = item.content;

        const cardFooter = document.createElement('div');
        cardFooter.setAttribute('class', 'card-footer')
        cardText.appendChild(cardFooter);

        const sequence = document.createElement('p');
        sequence.setAttribute('class', 'sequence');
        cardFooter.appendChild(sequence);
        sequence.textContent = `${item.len + 1}번 카드`

        const underline = document.createElement('p');
        underline.setAttribute('class', 'underline');
        cardFooter.appendChild(underline);
        underline.textContent = today.toISOString().slice(0, 10);

        const deletePostBtn = document.createElement('button');
        deletePostBtn.setAttribute('class', 'close');
        deletePostBtn.setAttribute('title', '닫기버튼입니다.');
        deletePostBtn.setAttribute('id', item.len);
        deletePostBtn.setAttribute('onclick', 'remove()');
        cardItem.appendChild(deletePostBtn);
        deletePostBtn.textContent = 'x'
    }

}

function remove() {
    const idx = allPost.find(item => item.len == event.srcElement.id);

    if (idx) {
        allPost.splice(
            allPost.findIndex((item) => item.len == idx.len), 1
        )
    }

    localStorage.setItem("allPost", JSON.stringify(allPost));
    render();
}
