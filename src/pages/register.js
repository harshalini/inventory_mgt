export const Register = () => {
    return (
        <div className="bg-img">
        <div className="content">
            <form>
            <h2>SignUp Now</h2>
                    <input type="text" name=" full name" required placeholder="Enter Full Name"/>
                    <input type="text" name="userid"  required placeholder="Username"/>
                    <input type="email" name="email" required placeholder="Email Address"/>
                    <input type="password" name="password"  required placeholder="Password"/>
                    
                    <input type="password"name="conformpassword"  required placeholder="Confrom Password"/>
                    <input type="submit" value="SignUp"/>
                   
                <div className="signup">Already Registered?
                    <a href="login.html">Log In </a>
                </div>
            </form>
        </div>
    </div>
    )
}
    
 