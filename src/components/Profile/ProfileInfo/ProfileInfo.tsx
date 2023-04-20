import { Preloader } from '../../common/Preloader/Preloader'
import s from './ProfileInfo.module.css'

export const ProfileInfo: React.FC<any> = (props) => {
   if(!props.profile){
    return <Preloader/>
   }
   
    return (
        <div className='profileInfo'>
            <div>
                <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt="" />
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large} alt="" />
                <div>{props.profile.aboutMe}</div>
                <div>{props.profile.lookingForAJobDescription}</div>
                ava + descr
                <img src="" alt="" />
            </div>
        </div>
    )

}