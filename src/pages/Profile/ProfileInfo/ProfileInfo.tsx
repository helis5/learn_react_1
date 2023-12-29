import React from 'react';
import s from './ProfileInfo.module.scss'

const ProfileInfo = () => {
    return (<div className={s.content}>
        <div>
            <img
                src="https://img.freepik.com/premium-photo/wide-panoramic-landscape-with-the-edge-of-a-coniferous-forest-and-mountains-in-a-light-fog-atmospheric-dramatic-autumn-mountain-landscape-kurai-steppe-altai-mountains_158388-6954.jpg?w=1800"
                alt=""/>
        </div>
        <div className={s.descriptionBlock}>
            ava + des
        </div>
    </div>)
}
export default ProfileInfo;