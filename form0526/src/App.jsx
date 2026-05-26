import { useState } from "react"
import { validateField } from "./utils/validation";

function App() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    agree: false,
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });

    const errorMessage = validateField(name, value);

    setErrors({
      ...errors,
      [name]: errorMessage,
    });
  };

  return (
    <div>
      <h1>フォーム管理</h1>

      <form>
        <label>名前</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <p>{errors.name}</p>

        <label>メールアドレス</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <p>{errors.email}</p>

        <label>パスワード</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        <p>{errors.password}</p>

        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
          />
          利用規約に同意する
        </label>

        <button type="submit">
          送信
        </button>
      </form>
    </div>
  );
}

export default App