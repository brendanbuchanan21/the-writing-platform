import { Bell, MessageCircle, AlertCircle} from 'lucide-react'





type NotificationsDropdownProps = {
    isOpen: boolean;
    onClose: () => void;
    notifications: { id: string; title: string; timestamp: string; icon: string }[];
  };
  
  function NotificationsDropdown({
    isOpen,
    onClose,
    notifications,
  }: NotificationsDropdownProps) {
    if (!isOpen) return null;
  
    // just some example cases potentially 
  const getIcon = (iconType: string) => {
    switch (iconType) {
    case 'comment':
        return <MessageCircle className="w-4 h-4 text-gray-600" />; 
    case 'alert':
        return <AlertCircle className="w-4 h-4 text-yellow-600" />;
    case 'message':
        return <Bell className="w-4 h-4 text-blue-600" />;
    default:
        return <Bell className="w-4 h-4 text-gray-600" />;
        }
      };
      // on click of the notis need to link to admin page
      return (
        <div className="absolute right-0 mt-2 w-80 rounded-xl bg-white shadow-lg border border-gray-200 z-50 overflow-hidden">
          <div className="p-4 font-semibold text-gray-700 border-b">Notifications</div>
          <ul className="max-h-60 overflow-y-auto">
            {notifications.map((n) => (
              <li
                key={n.id}
                className="px-4 py-3 hover:bg-gray-50 cursor-pointer border-b last:border-b-0"
                onClick={onClose}
              >
                <div className="flex items-center space-x-2">
                  {getIcon(n.icon)} 
                  <div className="text-sm text-gray-800">{n.title}</div>
                </div>
                <div className="text-xs text-gray-500 mt-1">{n.timestamp}</div>
              </li>
            ))}
          </ul>
          <div className="text-center p-2 text-sm text-rose-500 hover:underline cursor-pointer">
            View all
          </div>
        </div>
      );
  }
  export default NotificationsDropdown;