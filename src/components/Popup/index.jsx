import classNames from 'classnames/bind';
import styles from './Popup.module.scss'
import { useEffect, useState } from 'react';

/* Usage:
  const [open, setOpen] = useState(false)
  ...
  return (
    ...
      <button onClick={() => setOpen(true)}>Open popup</button>
      <Popup open={open} onClose={setOpen} header={<h5>Title</h5>}>
        Content
      </Popup>
    ...
  )
*/

const cx = classNames.bind(styles);

const Popup = ({ open, onClose, header, children }) => {
  const [show, setShow] = useState(false)
  
  useEffect(() => {
    setShow(open)
  }, [open])

  const close = () => {
    setShow(false)
    onClose(false)
  }

  return (
    <div className={cx('container')} style={{
      // visibility: show ? 'visible' : 'hidden',
      display: show ? 'flex' : 'none',
      opacity: show ? '1' : '0',
    }}>
      <div className={cx('overlay')} onClick={close}/>
      <div className={cx('popup')}>
        {header}
        <button className={cx('close')} onClick={close}>&times;</button>
        <div className={cx('content')}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default Popup