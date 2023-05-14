export const Login = () => {
    return (
        <div className="bg-img">
            <div className="content">
                <form>
                    <h1>Login</h1>
                    <input type="text" name="userid" required placeholder="User Id" />
                    <input type="password" name="password" required placeholder="Password" />
                    <span className="show">SHOW</span>
                    <p>
                        <input type="checkbox" /><span> Keep me Signed In</span>
                        <span className="forgot"><a href="forgot.html"> Forget Password?</a></span>
                    </p>

                    <input herf="home.html" type="submit" value="LogIn" />

                    <div className="signup">
                        Don't have account?
                        <a href="register.html">Sign up Now</a>
                    </div>
                </form>
            </div>
        </div>
    )
}  