import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <Image
                className={cx('avatar')}
                src="https://scontent.fsgn5-11.fna.fbcdn.net/v/t39.30808-6/269017650_3116251511993313_7016843383586218216_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tM21Q4K6hQQAX8rnNdH&_nc_ht=scontent.fsgn5-11.fna&oh=00_AT8x1izQHzsnja_LWcdEBybaDqc3Ki2b_64x89211mPOdQ&oe=633B16F2"
                alt="avatar"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Long Lưu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>longluuneeee</span>
            </div>
        </div>
    );
}

export default AccountItem;
