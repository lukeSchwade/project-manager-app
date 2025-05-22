import { NavLink } from 'react-router-dom';

interface SidebarProps {
  onOpenReminders: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ onOpenReminders }) => {
  const linkStyle = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'font-bold text-blue-500' : '';
  //TODO: add an on-hover dropdown menu that shows list of projects you're in for easy clicking as a navlink
  return (
    <nav className="h-screen w-48 bg-gray-800 text-white p-4 flex flex-col space-y-4">
      <NavLink to="/home" className={linkStyle}>Home</NavLink>
      <NavLink to="/profile" className={linkStyle}>Profile</NavLink>
      <NavLink to="/login" className={linkStyle}>Logout</NavLink> 
      <button onClick={onOpenReminders} className="text-left hover:text-blue-300">
        Reminders
      </button>
    </nav>
  );
};

export default Sidebar;