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
            return "";

        case "password":
            if (!value.trim()) {
                return "パスワードは必須です";
            }
            return "";

        default:
            return "";

    }
};