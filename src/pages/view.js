export default () => `<div class="wrap">
<header class="header">
    <h1 class="header__logo"><a href="#">HPNY 2023</a></h1>
    <button class="header__button">
        <img src="./images/icon_arrow-back.svg" alt="" />
    </button>
</header>
<main class="main view">
    <figure class="view__img">
        <img src="" alt="" />
    </figure>
    <div class="view__text">
        <h2 class="view__title">신년 계획</h2>
        <p class="view__date">2023. 01. 10</p>
        <div class="view__desc">
            2023 계획 세우셨나요? 저는 아직 못세웠어요. 작년에 계획을 과하게 세우고 많이 실패했던 기억이
            있어서..
        </div>
        <div class="view__button-wrap">
            <button class="view__edit-button">
                <img src="./images/icon_edit.svg" alt="" />
            </button>
            <button class="view__delete-button">
                <img src="./images/icon_delete.svg" alt="" />
            </button>
        </div>
    </div>
    <div class="reply">
        <ul class="reply__list">
            <li class="reply__item">
                <p class="reply__text">
                    너무 슬퍼하지 마세요! 다들 비슷해요 ㅎㅎ 올해는 잘 할 수 있을거에요 ! 화이팅 !
                </p>
                <button class="reply__delete-button">
                    <img src="./images/icon_close.svg" alt="" />
                </button>
            </li>
        </ul>
        <div class="reply__input-wrap">
            <input class="reply__input" type="text" />
            <button class="reply__submit-button"></button>
        </div>
    </div>
</main>
</div>`

export const viewScript = () => {
}