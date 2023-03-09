import { Counter } from './components/Counter';

import UserAvatarIcon from './shared/icons/user-avatar.svg';
import userProfile from './shared/icons/profile.png';

export function App() {
  return (
    <div className="app">
      <img src={userProfile} alt="user profile" />
      <UserAvatarIcon  />
      <Counter/>
    </div>
  );
}
