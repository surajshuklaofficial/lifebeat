import { LOGO } from '../../assets';

const SideMenu = () => {
  return (
    <aside className='px-4 py-16 flex-center flex-col flex-grow w-60'>
        <figure className='flex-center'>
            <img className="w-20 h-20" src={LOGO} alt="logo"/>
        </figure>
        <nav className='pt-16'>
            <ul className='flex-center flex-col gap-4'>
                <li><a>Dashboard</a></li>
                <li><a>Medical Record</a></li>
                <li><a>Nutrition</a></li>
                <li><a>Workout</a></li>
                <li className='text-center'>
                    <a>
                    Appointments<br/>&<br/>Medications
                    </a>
                </li>
                <li><a>Chat</a></li>
            </ul>
        </nav>
    </aside>
  )
}

export default SideMenu;