const LoginForm = ({ onLogin }) => {
  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.target;
    const { Login, password } = form.elements;
    console.log(Login, password);
    console.log(Login.value, password.value);
    onLogin({
      Login: Login.value,
      password: password.value,
    });
    form.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="Login" />
      <input type="password" name="password" />
      <button type="submit">Log in</button>
    </form>
  );
};
export default LoginForm;
