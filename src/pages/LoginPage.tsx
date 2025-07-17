import "./LoginPage.css";

export default function LoginPage() {
    function handleSubmit(e: React.FormEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    return (
        <div className="login-page" onSubmit={handleSubmit}>
            <form className="login-form">
                <label>
                    Email
                    <input type="email" />
                </label>
                <label>
                    Password
                    <input type="password" />
                </label>
                <button type="submit">Login</button>
                <div>
                    <a href="/auth/forgot_password">Forgot password?</a>
                </div>
            </form>
            <div>
                Don't you have any account?{' '}
                <a href="/auth/sign_up">Sign up</a>
            </div>
        </div>
    )
}