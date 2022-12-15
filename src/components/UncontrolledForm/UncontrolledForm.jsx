import Button from 'components/Button/Button';

const UncontrolledForm = () => {
  const handleSubmit = event => {
    event.preventDefault();

    const formElements = event.target.elements;
    const email = formElements.email.value;
    const password = formElements.password.value;
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }
    setTimeout(() => {
      console.log(email, password);
      event.target.reset();
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="email" placeholder="Enter your email" type="email" />
      <input
        name="password"
        placeholder="Enter your password"
        type="password"
      />
      <Button type="submit">Log in</Button>
    </form>
  );
};

export default UncontrolledForm;
