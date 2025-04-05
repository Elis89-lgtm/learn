import { ColorPicker } from './ColorPicker/ColorPicker';
import { Counter } from './Counter/Counter';
import Header from './Header/Header';
import { TodoList } from './TodoList/TodoList';
import Voting from './Voting/Voting';
import Sparkle from './Sparkle/Sparkle';
import LoginForm from './LoginForm/LoginForm';
import LoginForm1 from './LoginForm1/LoginForm1';

const App = () => {
  const handleLogin = userData => {
    console.log(userData);
  };
  return (
    <div>
      {/* <Header /> */}
      {/* <Counter /> */}
      {/* <ColorPicker /> */}
      {/* <Voting /> */}
      {/* <TodoList /> */}
      {/* <Sparkle /> */}
      <h1> Please Login in your account !</h1>
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};
export default App;
