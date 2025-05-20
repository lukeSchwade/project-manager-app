import {NavLink} from 'react-router-dom';

type NavbarProps {
    onOpenReminders: () => void
};
//Create a new
function Navbar({ onOpenReminders }: NavbarProps) 
    const linkStyle = ({ isActive }: { isActive: boolean }) =>
      isActive ? 'font-bold text-blue-500' : '';
  
    return (
      <nav className="h-screen w-48 bg-gray-800 text-white p-4 flex flex-col space-y-4">
        <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
        <NavLink to="/projects" className={linkStyle}>Projects</NavLink>
        <NavLink to="/tasks" className={linkStyle}>Tasks</NavLink>
        <button onClick={onOpenReminders} className="text-left hover:text-blue-300">
          Reminders
        </button>
      </nav>
    );
  };