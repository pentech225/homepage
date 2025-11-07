/**
 * サイト共通の連絡先情報を一元管理する定数
 */
const SCHOOL_INFO = {
    phoneNumber: '06-6438-8277', // iTeen武庫之荘校の電話番号を採用
    email: 'iteen.mukonosou@gmail.com',
    LINE_URL: 'https://lin.ee/wLOEW84',
    INSTA_URL: 'https://www.instagram.com/iteen_mukonosou',
    GOOGLE_MAP_LINK: 'https://maps.app.goo.gl/E7mBiP38hcU7gGVv8', // 地図へのリンク
    GOOGLE_MAP_IFRAME_SRC: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13111.60716991591!2d135.37032198205046!3d34.758066637250785!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000f12ccc72376b%3A0xd6f38b0f5199434d!2z5bC85bSO44Gu44OX44Ot44Kw44Op44Of44Oz44Kw5pWZ5a6kIGlUZWVu5q2m5bqr5LmL6I2Y5qCh!5e0!3m2!1sja!2sjp!4v1760389326963!5m2!1sja!2sjp' // 地図埋め込みのsrc
};

/**
 * HTMLのID要素に対して、SCHOOL_INFOの値を動的に挿入し、リンクを設定する関数。
 */
function updateContactInfo() {
    const phone = SCHOOL_INFO.phoneNumber;
    const email = SCHOOL_INFO.email;
    const line = SCHOOL_INFO.line;

    // 1. #contact セクションの更新
    const contactTelSpan = document.getElementById('contact-tel');
    if (contactTelSpan) {
        // 電話リンク（tel:）と太字のテキストを設定
        contactTelSpan.innerHTML = `<a href="tel:${phone}" style="font-weight: bold;">${phone}</a>`;
    }
    const contactMailSpan = document.getElementById('contact-mail');
    if (contactMailSpan) {
        // メールリンク（mailto:）と太字のテキストを設定
        contactMailSpan.innerHTML = `<a href="mailto:${email}" style="font-weight: bold;">${email}</a>`;
    }

    // 2. footer の更新
    const footerTelP = document.getElementById('footer-tel');
    if (footerTelP) {
        // 電話リンクを挿入 (フッターの文字色継承のためstyle="color: inherit;"を使用)
        footerTelP.innerHTML = `<a href="tel:${phone}" style="color: inherit;">電話: ${phone}</a>`;
    }
    const footerMailLink = document.getElementById('footer-mail-link');
    if (footerMailLink) {
        // メールリンクのhref属性を設定
        footerMailLink.href = `mailto:${email}`;
    }

    // ★ 3. 共通外部リンクの更新 (LINE, Google Map, iframe src)

    // LINEリンク
    document.querySelectorAll('[data-link="line"]').forEach(element => {
        element.href = SCHOOL_INFO.LINE_URL;
        // <a>タグのテキストコンテンツも更新する（例: https://lin.ee/...）
        if (element.tagName === 'A' && element.textContent.includes('lin.ee')) {
            element.textContent = SCHOOL_INFO.LINE_URL;
        }
    });

    // ★ Instagramリンク
    document.querySelectorAll('[data-link="instagram"]').forEach(element => {
        element.href = SCHOOL_INFO.INSTA_URL;
    });

    // Google Mapの直接リンク
    document.querySelectorAll('[data-link="map-direct"]').forEach(element => {
        element.href = SCHOOL_INFO.GOOGLE_MAP_LINK;
    });
    
    // Google Mapのiframe src
    document.querySelectorAll('[data-link="map-iframe"]').forEach(element => {
        element.src = SCHOOL_INFO.GOOGLE_MAP_IFRAME_SRC;
    });
}

// ページロード完了時に情報を更新する関数を実行
document.addEventListener('DOMContentLoaded', updateContactInfo);