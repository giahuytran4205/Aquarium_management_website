import "./SignUpPage.css";

export default function SignUpPage() {
    function handleSubmit(e: React.FormEvent<HTMLDivElement>) {
        e.preventDefault();
    }

    return (
        <div className="sign-up-page" onSubmit={handleSubmit}>
            <form className="sign-up-form">
                <label>
                    Email
                    <input type="email" />
                </label>
                <label>
                    Password
                    <input type="password" />
                </label>
                <label>
                    Re-enter password
                    <input type="password" />
                </label>
                <label className="policy-label">
                    <input type="checkbox" />
                    Agree to our Terms & Privacy Policy
                </label>
                <button type="submit">Sign up</button>
            </form>
        </div>
    )
}