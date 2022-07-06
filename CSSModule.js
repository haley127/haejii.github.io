

import CSSModule from './CSSModule.module.css';

function CSSModule() {
    return (
        <div className='{`${styles.wrapper} ${styles.inverted}`}'>
            안녕하세요 <span className='something'>저는 CSSModule</span>
            <span className="something2">글로벌</span>
        </div>
    )
}

export default CSSModule;