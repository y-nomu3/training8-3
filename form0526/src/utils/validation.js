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

export const getPasswordStrength = (password) => {
    const hasLowercase = /[a-z]/.test(password);
    const hasUppercase = /[A-Z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSymbol = /[^A-Za-z0-9]/.test(password);

    const length = password.length;

    if (
        length >= 12 &&
        hasLowercase &&
        hasUppercase &&
        hasNumber &&
        hasSymbol
    ) {
        return "strong";
    }

    if (
        length >= 8 &&
        hasLowercase &&
        hasUppercase &&
        hasNumber
    ) {
        return "medium";
    }

    if (password.length > 0) {
        return "weak";
    }

    return "";
};