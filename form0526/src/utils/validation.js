export const validateField = (name, value) => {
    switch (name) {
        case "name":
            if (!value.trim()) {
                return "名前は必須です";
            }
            return "";

        case "email":
            if (!value.trim()) {
                return "メールアドレスは必須です";
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!emailRegex.test(value)) {
                return "メールアドレスの形式が正しくありません";
            }
            
            return "";

        case "password":
            if (!value.trim()) {
                return "パスワードは必須です";
            }

            const hasLowercase = /[a-z]/.test(value);
            const hasUppercase = /[A-Z]/.test(value);
            const hadNumber = /[0-9]/.test(value);

            if (!hasLowercase) {
                return "小文字を含めてください";
            }

            if (!hasUppercase) {
                return "大文字を含めてください";
            }
            
            if (!hasNumber) {
                return "数字を含めてください";
            }
            
            return "";

        default:
            return "";

    }
};