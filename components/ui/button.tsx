import Link from 'next/link';
import { Fragment } from 'react';
import ButtonClass from './button.module.css';

const Button = (props:any) => {
    return(
        <Fragment>
        {props.link?
            <Link href={props.link} className={ButtonClass.btn}>
                {props.children}
            </Link>:
            <button className={ButtonClass.btn} onClick={props.onClick}>
                {props.children}
            </button>
        }
        </Fragment>
    )
}

export default Button;