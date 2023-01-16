export default () => `
    <header class="header">
        <h1 class="header__logo"><a href="/" data-link>HPNY 2023</a></h1>
        <button class="header__button"></button>
    </header>
    <main class="main home">
        <a class="home__write-button" href="/write" data-link>새 글 작성하기</a>
        <ul class="list">
        </ul>
    </main>
`;

export const homeScript = () => {
    const BASE_URL = 'http://43.201.103.199';
    const $list = document.querySelector('.list');
    
    fetch(`${BASE_URL}/posts`, {
        method: 'GET'
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        displayItem(data.data.posts)
    })
    
    const displayItem = (items) => {
        $list.innerHTML = items.map((item) => createItem(item)).join('');
    }
    
    const createItem = (item) => {
        return `
            <li class="item">
                <a class="item__link" href="/view/259">
                    <figure class="item__img"><img src="${item.image}"/></figure>
                    <div class="item__text">
                        <h4 class="item__title">${item.title}</h4>
                        <p class="item__desc">${item.content}</p>
                    </div>
                </a>
            </li>`;
    }
}