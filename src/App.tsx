import { Counter } from 'modules/Counter';

import UserAvatarIcon from 'assets/icons/user-avatar.svg';
import userProfile from 'assets/icons/profile.png';

export function App() {
  return (
    <div className="app">
      <img src={userProfile} alt="user profile" />
      <UserAvatarIcon  />
      <Counter/>
    </div>
  );
}
