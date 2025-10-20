import starFilled from '../assets/star-filled.svg';
import starHalfFill from '../assets/star-half-fill.svg';
import starEmpty from '../assets/star-empty.svg';

const RatingBar = ({ rating }) => {

    return (
        <div className='flex'>
            {[...Array(5)].map((_, index) => {
                let starSvg = index + 1 <= rating ? starFilled : ((rating % 1) < 1 && (rating % 1) > 0)  ? starHalfFill : starEmpty;
                return (
                    <div key={index} className={index + 1 <= rating ? "text-yellow-500" : "text-gray-300"}>
                        <img src={starSvg} alt="star" className="inline w-4 h-4" />
                    </div>
                )
            })}
        </div>
    )
}

export default RatingBar
