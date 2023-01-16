export default () => `
        <div class="wrap">
            <header class="header">
                <h1 class="header__logo"><a href="#">HPNY 2023</a></h1>
                <button class="header__button">
                    <img src="./images/icon_arrow-back.svg" alt="" />
                </button>
            </header>
            <main class="main write">
                <button class="write__image-button">랜덤 이미지 추가하기</button>
                <div class="write__content">
                    <h4 class="write__title">제목</h4>
                    <input class="write__input" type="text" placeholder="글 제목을 입력해주세요." />
                </div>
                <div class="write__content">
                    <h4 class="write__title">내용</h4>
                    <textarea class="write__textarea" placeholder="글 내용을 입력해주세요." rows="8"></textarea>
                </div>
                <button class="write__submit-button">등록하기</button>
            </main>
        </div>`


        export const writeScript = () => {}