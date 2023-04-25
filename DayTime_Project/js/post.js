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

    const articleContainer = document.querySelector('.article-container');
    articleContainer.innerHTML = "";
    // const frag = document.createDocumentFragment(); // 가상 돔 만듦
    let count = 0;

    for (const item of allPost) {
        count += 1

        const cardItem = document.createElement('article');
        cardItem.setAttribute('class', 'card-item');
        articleContainer.appendChild(cardItem);

        const cardBorder = document.createElement('a');
        cardBorder.setAttribute('title', `${count}번 카드입니다.`);
        cardBorder.setAttribute('onclick', 'postLink()');
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
        sequence.textContent = `${count}번 카드`

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
        deletePostBtn.textContent = '✖️'
        // img 넣고 싶은데 넣으면 에러가 뜸 (수정예정)
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

function postLink() {
    alert('게시물이 아직 준비되지 않았습니다!');
}