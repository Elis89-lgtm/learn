import { useId } from 'react';
import { useState } from 'react';

const LoginForm1 = () => {
  const LoginId = useId();
  const passwordId = useId();
  return (
    <form>
      <label htmlFor={LoginId}>Login</label>
      <input type="text" name="Login" id={LoginId} />

      <label htmlFor={passwordId}>Password</label>
      <input type="password" name="password" id={passwordId} />

      <button type="submit">Login</button>
    </form>
  );
};

const SearchBar = () => {
  const [inputValue, setInputValue] = useState('');
  const handleChange = evt => {
    setInputValue(evt.target.value);
  };
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>{inputValue}</p>
    </div>;
  );
};
export default LoginForm1;
export { SearchBar };
