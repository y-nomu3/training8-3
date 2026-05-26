import { useState } from "react"
import { validateField, getPasswordStrength } from "./utils/validation";
import PasswordStrength from "./components/PasswordStrength";
import InputField from "./components/InputField";

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

  const passwordStrength = getPasswordStrength(formData.password);

  return (
    <div>
      <h1>フォーム管理</h1>

      <form>
        <InputField
          label="名前"
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
        />

        <InputField
          label="メールアドレス"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
        />

        <InputField
          label="パスワード"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
        />

        <PasswordStrength strength={passwordStrength} />

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