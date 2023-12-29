import React from 'react';
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (<div className={s.content}>
        <div>
            <img
                src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
                alt=""/>
        </div>
        <div className={s.descriptionBlock}>
            ava + des
        </div>
    </div>)
}
export default ProfileInfo;