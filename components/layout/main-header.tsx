import Link from "next/link";
import HeaderClass from './main-header.module.css';

export default function MainHeader(props:any) {
    return (
      <header className={HeaderClass.header}>
        <div className={HeaderClass.logo}>
            <Link href={'/'}>Events</Link>
        </div>
        <nav className={HeaderClass.navigation}>
            <ul>
                <li>
                    <Link href={'/events'}>Browse All Events</Link>
                </li>
            </ul>
        </nav>
      </header>
    )
}