function PasswordStrength({ strength }) {
    if (!strength) {
        return null;
    }

    return <p>Strength: {strength}</p>
}

export default PasswordStrength;