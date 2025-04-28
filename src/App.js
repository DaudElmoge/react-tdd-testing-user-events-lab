import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [interests, setInterests] = useState({
    coding: false,
    design: false,
    marketing: false,
  });
  const [submitted, setSubmitted] = useState(false);

  function handleCheckboxChange(event) {
    const { name, checked } = event.target;
    setInterests((prev) => ({
      ...prev,
      [name]: checked,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  const selectedInterests = Object.keys(interests).filter(
    (interest) => interests[interest]
  );

  return (
    <main>
      <h1>Hi, I'm (your name)</h1>
      <img alt="My profile pic" src="https://via.placeholder.com/350" />
      <h2>About Me</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>

      <div>
        <a href="https://github.com">GitHub</a>
        <a href="https://linkedin.com">LinkedIn</a>
      </div>

      <h2>Sign up for my newsletter!</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <fieldset>
          <legend>Select your interests:</legend>

          <label>
            <input
              type="checkbox"
              name="coding"
              checked={interests.coding}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>

          <label>
            <input
              type="checkbox"
              name="design"
              checked={interests.design}
              onChange={handleCheckboxChange}
            />
            Design
          </label>

          <label>
            <input
              type="checkbox"
              name="marketing"
              checked={interests.marketing}
              onChange={handleCheckboxChange}
            />
            Marketing
          </label>
        </fieldset>

        <button type="submit">Submit</button>
      </form>

      {submitted && (
        <div>
          <h3>Thanks for signing up, {name}!</h3>
          <p>We've added {email} to our mailing list.</p>
          {selectedInterests.length > 0 && (
            <div>
              <p>Your interests:</p>
              <ul>
                {selectedInterests.map((interest) => (
                  <li key={interest}>{interest}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      )}
    </main>
  );
}

export default App;
